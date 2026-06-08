import { useEffect, useRef } from "react";
import * as THREE from "three";

const StarfieldCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ── Renderer ──────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── Scene & Camera ────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    camera.position.z = 1;

    // ── Helper: random range ──────────────────────────────────
    const rnd = (min, max) => Math.random() * (max - min) + min;

    // ── Star layers (3 depths for parallax) ───────────────────
    const starLayers = [];
    const layerConfigs = [
      { count: 3000, spread: 1800, size: 0.6,  speed: 0.00006, color: 0xffffff },
      { count: 1500, spread: 1200, size: 1.1,  speed: 0.00012, color: 0xc8d8ff },
      { count:  600, spread:  800, size: 1.8,  speed: 0.00022, color: 0xe8f0ff },
    ];

    layerConfigs.forEach(({ count, spread, size, speed, color }) => {
      const geo = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);
      const alphas = new Float32Array(count);

      for (let i = 0; i < count; i++) {
        positions[i * 3]     = rnd(-spread, spread);
        positions[i * 3 + 1] = rnd(-spread, spread);
        positions[i * 3 + 2] = rnd(-spread, spread);
        alphas[i] = rnd(0.4, 1.0);
      }

      geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geo.setAttribute("alpha",    new THREE.BufferAttribute(alphas, 1));

      const mat = new THREE.PointsMaterial({
        color,
        size,
        transparent: true,
        opacity: 0.85,
        sizeAttenuation: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });

      const points = new THREE.Points(geo, mat);
      scene.add(points);
      starLayers.push({ points, speed });
    });

    // ── Nebula: volumetric sprite clouds ──────────────────────
    const nebulaGroup = new THREE.Group();
    scene.add(nebulaGroup);

    const nebulaDefs = [
      { color: 0x3b1f8c, x: -300, y:  150, z: -600, scale: 420, opacity: 0.10 },
      { color: 0x0f3d6e, x:  350, y: -100, z: -700, scale: 380, opacity: 0.09 },
      { color: 0x1a0a50, x:   80, y:  280, z: -500, scale: 460, opacity: 0.08 },
      { color: 0x2d0b6b, x: -200, y: -220, z: -800, scale: 500, opacity: 0.07 },
      { color: 0x0a2a5e, x:  220, y:  120, z: -550, scale: 340, opacity: 0.08 },
    ];

    nebulaDefs.forEach(({ color, x, y, z, scale, opacity }) => {
      // Build soft radial gradient texture on canvas
      const size = 256;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");

      const grad = ctx.createRadialGradient(
        size / 2, size / 2, 0,
        size / 2, size / 2, size / 2
      );
      grad.addColorStop(0,   "rgba(255,255,255,0.9)");
      grad.addColorStop(0.4, "rgba(255,255,255,0.4)");
      grad.addColorStop(1,   "rgba(255,255,255,0.0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, size, size);

      const tex = new THREE.CanvasTexture(canvas);
      const mat = new THREE.SpriteMaterial({
        map: tex,
        color,
        transparent: true,
        opacity,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const sprite = new THREE.Sprite(mat);
      sprite.position.set(x, y, z);
      sprite.scale.set(scale, scale, 1);
      nebulaGroup.add(sprite);
    });

    // ── Bright accent stars (random twinkle) ──────────────────
    const accentGeo = new THREE.BufferGeometry();
    const ACCENT = 120;
    const accentPos  = new Float32Array(ACCENT * 3);
    const accentPhase = new Float32Array(ACCENT);
    for (let i = 0; i < ACCENT; i++) {
      accentPos[i * 3]     = rnd(-900, 900);
      accentPos[i * 3 + 1] = rnd(-900, 900);
      accentPos[i * 3 + 2] = rnd(-600, 0);
      accentPhase[i] = rnd(0, Math.PI * 2);
    }
    accentGeo.setAttribute("position", new THREE.BufferAttribute(accentPos, 3));
    const accentMat = new THREE.PointsMaterial({
      color: 0xffeedd,
      size: 2.6,
      transparent: true,
      opacity: 1,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const accentPoints = new THREE.Points(accentGeo, accentMat);
    scene.add(accentPoints);

    // ── Mouse parallax ────────────────────────────────────────
    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth  - 0.5) * 2;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // ── Resize ────────────────────────────────────────────────
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // ── Animation loop ────────────────────────────────────────
    let frameId;
    let t = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      t += 0.016;

      // Rotate each star layer at its own speed (slow drift)
      starLayers.forEach(({ points, speed }, i) => {
        points.rotation.y += speed;
        points.rotation.x += speed * 0.3;
        // Gentle parallax offset by mouse
        points.position.x += (mouse.x * (i + 1) * 0.4 - points.position.x) * 0.02;
        points.position.y += (-mouse.y * (i + 1) * 0.4 - points.position.y) * 0.02;
      });

      // Nebula slow drift
      nebulaGroup.rotation.z += 0.00008;
      nebulaGroup.position.x += (mouse.x * 8 - nebulaGroup.position.x) * 0.008;
      nebulaGroup.position.y += (-mouse.y * 8 - nebulaGroup.position.y) * 0.008;

      // Twinkle accent stars
      accentMat.opacity = 0.7 + Math.sin(t * 1.2) * 0.3;

      renderer.render(scene, camera);
    };
    animate();

    // ── Cleanup ───────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
};

export default StarfieldCanvas;
