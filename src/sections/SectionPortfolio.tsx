"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Globe } from "lucide-react";
import ActionButton from "@/components/ActionButton";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface Project {
  key: string; // translation key for title/description
  role?: string;
  tech: string[];
  image: string;
  link?: string;
  github?: string;
  storybook?: string;
}

const projects: Project[] = [
  {
    key: "vueDragPlayground",
    tech: ["Vue.js", "TypeScript"],
    image: "/assets/imgs/portfolio-1.png",
    link: "https://vuedragplayground.actechworld.com/",
    github: "https://github.com/acTechWorld/vue-drag-playground",
    storybook:
      "https://vuedragplayground.storybook.actechworld.com/?path=/story/lib-components-vuedragplayground--default",
  },
  {
    key: "vueOnboardingTour",
    tech: ["Vue.js", "TypeScript"],
    image: "/assets/imgs/portfolio-2.png",
    link: "https://vueonboardingtour.actechworld.com/",
    github:
      "http://github.com/acTechWorld/vue-onboarding-tour/tree/master/library",
    storybook:
      "https://vueonboardingtour.storybook.actechworld.com/?path=/story/lib-components-vueonboardingtour--default",
  },
  {
    key: "vueLanding",
    tech: ["Vue.js", "TypeScript", "Node.js"],
    image: "/assets/imgs/portfolio-3.png",
    link: "https://vuelanding.com/",
    storybook:
      "https://storybook.vuelanding.com/?path=/story/components-features-section--default",
  },
];

const cardVariants = {
  hidden: (index: number) => {
    const offset = index === 0 ? 0 : index * 50;
    return { opacity: 0, x: offset, y: 40, scale: 0.95 };
  },
  show: (index: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 14,
      delay: index * 0.15,
    },
  }),
  exit: { opacity: 0, scale: 0.9, y: 30, transition: { duration: 0.3 } },
};

const SectionPortfolio: React.FC = () => {
  const visibleProjects = projects.slice(0, 6);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClickCTA = () => navigate("/portfolio");

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-white dark:bg-gray-900 text-black dark:text-white py-8 md:py-24"
      style={{
        backgroundImage:
          "url('/assets/imgs/projects/projects-1/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-6 mb-16">
          <div>
            <h3 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
              {t("portfolio.headerTitle")}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {t("portfolio.headerDescription")}
            </p>
          </div>
        </div>

        {/* Project Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <motion.a
                key={project.key}
                href={project.link}
                layout
                custom={index % 3}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="group bg-[#edeaf8] dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-300 dark:border-gray-700 hover:border-blue-500 shadow-lg cursor-pointer"
              >
                {/* Image */}
                <motion.div layout className="relative overflow-hidden h-52">
                  <motion.img
                    src={project.image}
                    alt={t(`portfolio.projects.${project.key}.title`)}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition duration-500"
                    layout
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition"
                    layout
                  />
                </motion.div>

                {/* Content */}
                <motion.div layout className="p-6">
                  <h4 className="text-xl font-semibold mb-2">
                    {t(`portfolio.projects.${project.key}.title`)}
                  </h4>
                  {project.role && (
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">
                      {project.role}
                    </p>
                  )}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 group-hover:line-clamp-none transition-all">
                    {t(`portfolio.projects.${project.key}.description`)}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-blue-500/10 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full border border-blue-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 flex-wrap">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 group-hover:text-blue-700 hover:dark:text-blue-300 transition"
                      >
                        <Globe className="w-4 h-4" />{" "}
                        {t("portfolio.viewProject")}
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
                      >
                        <Github className="w-4 h-4" /> {t("portfolio.source")}
                      </a>
                    )}
                    {project.storybook && (
                      <a
                        href={project.storybook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition"
                      >
                        {t("portfolio.storybook")}
                      </a>
                    )}
                  </div>
                </motion.div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* See All Button */}
        <div className="text-center mt-16">
          <ActionButton
            text={t("portfolio.seeAllProjects")}
            onClick={handleClickCTA}
          />
        </div>
      </div>
    </section>
  );
};

export default SectionPortfolio;
