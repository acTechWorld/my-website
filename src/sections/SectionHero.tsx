import type { FC } from "react";
import { DownloadIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";
import i18n from "i18next";

import {
  SiReact,
  SiVuedotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";

const techIcons = [
  { icon: <SiVuedotjs className="w-8 h-8 text-green-500" />, name: "Vue.js" },
  { icon: <SiReact className="w-8 h-8 text-blue-500" />, name: "React" },
  {
    icon: <SiTypescript className="w-8 h-8 text-blue-600" />,
    name: "TypeScript",
  },
  { icon: <SiNodedotjs className="w-8 h-8 text-green-700" />, name: "Node.js" },
  {
    icon: <SiExpress className="w-8 h-8 text-gray-700 dark:text-gray-300" />,
    name: "Express",
  },
];

const Hero: FC = () => {
  const { t } = useTranslation();

  const handleClickHireMe = () => {
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden pt-28 pb-14 bg-white dark:bg-gray-900">
      <div
        className="absolute inset-0 bg-cover bg-center dark:invert-100"
        style={{ backgroundImage: "url('/assets/imgs/background_hero.png')" }}
      ></div>

      <div className="container mx-auto px-6 z-10 flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="lg:w-1/2 z-10">
          <span
            className="text-gray-700 dark:text-gray-300 text-lg"
            dangerouslySetInnerHTML={{ __html: t("hero.greeting") }}
          />

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold my-4 text-gray-900 dark:text-gray-100"
          >
            <span className="text-blue-600">{t("hero.titleHighlight")}</span>{" "}
            {t("hero.titleSuffix")}
            <span className="blink-cursor text-blue-500 ml-1">_</span>
          </motion.h1>

          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            <Trans
              i18nKey="hero.description"
              components={{
                react: <span className="text-blue-600 font-medium">React</span>,
                vue: <span className="text-blue-600 font-medium">Vue.js</span>,
                node: <span className="text-blue-600 font-medium">NodeJS</span>,
                express: (
                  <span className="text-blue-600 font-medium">Express</span>
                ),
                postgressql: (
                  <span className="text-blue-600 font-medium">PostgresSql</span>
                ),
              }}
            />
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            <a
              href={
                i18n.language === "en"
                  ? "/assets/pdfs/Antoine Canard CV EN.pdf"
                  : "/assets/pdfs/Antoine Canard CV FR.pdf"
              }
              target="_blank"
              download
              className="btn inline-flex cursor-pointer items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:opacity-90 transition"
            >
              {t("hero.downloadResume")}
              <DownloadIcon />
            </a>

            <motion.button
              onClick={handleClickHireMe}
              className="relative overflow-hidden border-2 border-gray-400 dark:border-purple-800 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 text-purple-800 text-gray-900 dark:text-gray-100 cursor-pointer bg-purple-600 hover:bg-purple-800"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl opacity-30 z-0"
                initial={{ scale: 0, opacity: 0.6 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              <span className="relative z-10 flex items-center gap-2 text-white">
                {t("hero.hireMe")}
                <i className="ri-arrow-right-line"></i>
              </span>
              <motion.div
                className="absolute inset-0 rounded-xl z-0 pointer-events-none"
                whileHover={{ scale: 1.05, opacity: 0.1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.button>
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {t("hero.experience")}
          </p>

          {/* Tech icons */}
          <div className="flex flex-wrap items-center gap-3">
            {techIcons.map((tech, i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-xl bg-[#edeaf8] dark:bg-gray-800 p-2 flex items-center justify-center"
              >
                {tech.icon}
              </div>
            ))}
            <span className="text-gray-600 dark:text-gray-400 text-sm ml-2">
              {t("hero.techMore")}
            </span>
          </div>
        </div>
        {/* Hero Image */}
        <div className="w-fit lg:absolute bottom-0 left-1/2">
          <img
            src="/assets/imgs/hero-6.png"
            alt="Antoine Canard"
            className="lg:max-h-[400px] object-contain relative z-10 max-h-[300px] -mb-14 lg:mb-auto"
          />
          <motion.img
            src="/assets/imgs/hero-7.png"
            alt=""
            className="absolute hidden lg:flex top-1/2 left-1/3 -translate-y-1/2 opacity-50 w-[500px]"
            animate={{
              rotate: [0, 45, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
