import type { FC } from "react";
import { motion } from "framer-motion";

const techIcons = [
  "/assets/imgs/home-page-2/hero-1/icon-1.svg",
  "/assets/imgs/home-page-2/hero-1/icon-2.svg",
  "/assets/imgs/home-page-2/hero-1/icon-3.svg",
  "/assets/imgs/home-page-2/hero-1/icon-4.svg",
  "/assets/imgs/home-page-2/hero-1/icon-5.svg",
];

const Hero: FC = () => {
  return (
    <section className="relative overflow-hidden py-28 ">
       <div
        className="absolute inset-0 bg-cover bg-center invert-100"
        style={{
          backgroundImage:
             "url('/assets/imgs/hero-1/background.png')",
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
            className="text-4xl md:text-5xl font-bold my-4"
          >
            <span className="text-blue-600">{`{Full Stack}`}</span> Website & Web
            App Developer<span className="animate-pulse text-blue-500">_</span>
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
              href="/ayesha%20asghar.pdf"
              target="_blank"
              download
              className="btn bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:opacity-90 transition"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="border border-gray-400 dark:border-gray-600 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
            >
              Hire me
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>

          <p className="text-gray-500 dark:text-gray-400 mb-4">
            +6 years of professional website and web app development
          </p>

          {/* Tech icons */}
          <div className="flex flex-wrap items-center gap-3">
            {techIcons.map((icon, i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-xl bg-gray-900 p-2 flex items-center justify-center"
              >
                <img
                  src={icon}
                  alt={`Tech ${i + 1}`}
                  className="w-8 h-8 object-contain"
                />
              </div>
            ))}
            <span className="text-gray-400 text-sm ml-2">...and more</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0 relative">
          <img
            src="/assets/imgs/hero/hero-1/man.png"
            alt="Ayesha Asghar"
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
