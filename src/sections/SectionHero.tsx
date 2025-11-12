import type { FC } from "react";
import {DownloadIcon} from 'lucide-react'
import { motion } from "framer-motion";
import {
  SiReact,
  SiVuedotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress
} from "react-icons/si";


const techIcons = [
  { icon: <SiVuedotjs className="w-8 h-8 text-green-500" />, name: "Vue.js" },
  { icon: <SiReact className="w-8 h-8 text-blue-500" />, name: "React" },
  { icon: <SiTypescript className="w-8 h-8 text-blue-600" />, name: "TypeScript" },
  { icon: <SiNodedotjs className="w-8 h-8 text-green-700" />, name: "Node.js" },
  { icon: <SiExpress className="w-8 h-8 text-gray-700 dark:text-gray-300" />, name: "Express" },
];

const Hero: FC = () => {
  const handleClickHireMe = () => {
    const section = document.getElementById('contact');
    if (section) section.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <section className="relative overflow-hidden py-28 bg-white dark:bg-gray-900">
       <div
        className="absolute inset-0 bg-cover bg-center dark:invert-100"
        style={{
          backgroundImage:
             "url('/assets/imgs/background_hero.png')",
          }}
        ></div>
      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <span className="text-gray-700 dark:text-gray-300 text-lg">
            👋 Hello there, <br/> I'm Antoine Canard
          </span>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold my-4 text-gray-900 dark:text-gray-100"
          >
            <span className="text-blue-600">{`{Full Stack}`}</span> Website & Web
            App Developer<span className="blink-cursor text-blue-500 ml-1">_</span>
          </motion.h1>

          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            With expertise in cutting-edge technologies such as{" "}
            <span className="text-blue-600 font-medium">React</span>,{" "}
            <span className="text-blue-600 font-medium">Vue.js</span>,{" "}
            <span className="text-blue-600 font-medium">NodeJS</span>,{" "}
            <span className="text-blue-600 font-medium">Express</span>, and{" "}
            <span className="text-blue-600 font-medium">PostgresSql</span> — I
            deliver web solutions that are both innovative and robust.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            <a
              href="/assets/pdfs/resume.pdf"
              target="_blank"
              download
              className="btn inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:opacity-90 transition"
            >
              Download Resume
              <DownloadIcon />
            </a>
            
    <motion.button
      onClick={handleClickHireMe}
      className="relative overflow-hidden border-2 border-gray-400 dark:border-purple-800 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 text-purple-800 text-gray-900 dark:text-gray-100 cursor-pointer bg-purple-600  hover:bg-purple-800"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      {/* Center-to-edge gradient pulse */}
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl opacity-30 z-0"
        initial={{ scale: 0, opacity: 0.6 }}
        animate={{ scale: 1.5, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Button text */}
      <span className="relative z-10 flex items-center gap-2 text-white">
        Hire me
        <i className="ri-arrow-right-line"></i>
      </span>

      {/* Hover effect */}
      <motion.div
        className="absolute inset-0 rounded-xl z-0 pointer-events-none"
        whileHover={{ scale: 1.05, opacity: 0.1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </motion.button>


          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-4">
            +6 years of professional website and web app development
          </p>

          {/* Tech icons */}
          <div className="flex flex-wrap items-center gap-3">
            {techIcons.map((tech, i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-xl bg-[#edeaf8] dark:bg-gray-800 p-2 flex items-center justify-center"
                title={tech.name}
              >
                {tech.icon}
              </div>
            ))}
            <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">...and more</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0 relative">
          <img
            src="/assets/imgs/hero/hero-1/man.png"
            alt="Antoine Canard"
            className="max-h-[500px] object-contain relative z-10"
          />
          <img
            src="/assets/imgs/hero/hero-1/decorate.png"
            alt=""
            className="absolute top-1/2 left-0 w-1/3 -translate-y-1/2 opacity-50"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
