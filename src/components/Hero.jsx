import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 pt-24 md:pt-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      {/* Glow Effects */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500 opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-pink-500 opacity-10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">

           

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-tight"
          >
            <span className="text-white">Mohit</span> <span className="text-pink-400">Singh</span>
            <br />
            <span className="text-cyan-400">Chouhan</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-cyan-400 uppercase tracking-widest text-sm mb-4"
          >
            Java Full Stack Developer
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-gray-400 text-lg max-w-2xl"
          >
            Building scalable, secure and high-performance web applications
            using Spring Boot, React.js, JWT Authentication, PostgreSQL,
            Hibernate and modern software engineering practices.
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <button className="px-6 py-3 border border-cyan-400 rounded-lg text-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300">
              View Projects
            </button>

            <button className="px-6 py-3 border border-pink-400 rounded-lg text-pink-400 hover:bg-pink-400 hover:text-black transition duration-300">
              Contact Me
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-16">
            <div className="border border-cyan-500 rounded-xl px-8 py-5 bg-black/40 min-w-[170px] text-center">
              <h3 className="text-3xl text-cyan-400 font-bold">2+</h3>
              <p className="text-gray-400 text-sm mt-1">Projects</p>
            </div>

            <div className="border border-cyan-500 rounded-xl px-8 py-5 bg-black/40 min-w-[170px] text-center">
              <h3 className="text-3xl text-cyan-400 font-bold">1+</h3>
              <p className="text-gray-400 text-sm mt-1">Years Coding</p>
            </div>

            <div className="border border-cyan-500 rounded-xl px-8 py-5 bg-black/40 min-w-[170px] text-center">
              <h3 className="text-3xl text-cyan-400 font-bold">100+</h3>
              <p className="text-gray-400 text-sm mt-1">DSA Problems</p>
            </div>

            <div className="border border-cyan-500 rounded-xl px-8 py-5 bg-black/40 min-w-[170px] text-center">
              <h3 className="text-3xl text-cyan-400 font-bold">10+</h3>
              <p className="text-gray-400 text-sm mt-1">Technologies</p>
            </div>
          </div>
        </div>

        {/* Scroll Arrow */}
        <div className="flex justify-center mt-20">
          <FiArrowDown
            size={30}
            className="text-cyan-400 animate-bounce"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
