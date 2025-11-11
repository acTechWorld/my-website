"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Globe, Search } from "lucide-react";

interface Project {
  title: string;
  role?: string;
  description: string;
  tech: string[];
  image: string;
  link?: string;
  github?: string;
  storybook?: string;
}

const projects: Project[] = [
  {
    title: "VueDragPlayground",
    description:
      "VueDragPlayground is a versatile Vue 3 library designed to create dynamic and interactive user interfaces with drag, resize, and rotate functionalities.",
    tech: ["Vue.js", "TypeScript"],
    image: "/assets/imgs/portfolio-1.png",
    link: "https://vuedragplayground.actechworld.com/",
    github: "https://github.com/acTechWorld/vue-drag-playground",
    storybook:
      "https://vuedragplayground.storybook.actechworld.com/?path=/story/lib-components-vuedragplayground--default",
  },
  {
    title: "VueOnboardingTour",
    description:
      "VueOnboardingTour is a Vue.js component that creates guided, step-by-step onboarding tours to help users navigate your app intuitively.",
    tech: ["Vue.js", "Typescript"],
    image: "/assets/imgs/portfolio-2.png",
    link: "https://vueonboardingtour.actechworld.com/",
    github: "http://github.com/acTechWorld/vue-onboarding-tour/tree/master/library",
    storybook:
      "https://vueonboardingtour.storybook.actechworld.com/?path=/story/lib-components-vueonboardingtour--default",
  },
  {
    title: "VueLanding",
    description:
      "VueLanding offers a comprehensive suite of modern, responsive, and customizable Vue.js components, enabling developers to build stunning landing pages with ease.",
    tech: ["Vue.js", "TypeScript", "Node.js"],
    image: "/assets/imgs/portfolio-3.png",
    link: "https://vuelanding.com/",
    storybook:
      "https://storybook.vuelanding.com/?path=/story/components-features-section--default",
  },
];

const ViewPortfolio: React.FC = () => {
  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase()) ||
        project.tech.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      return matchesSearch;
    });
  }, [search]);

  return (
    <section className="relative min-h-screen bg-gray-900 text-white py-28">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-blue-400 mb-3">All Projects</h1>
          <p className="text-gray-300 text-lg">
            A full showcase of my work — from open-source libraries to production apps.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-1/2 mx-auto mb-12">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-xl pl-10 pr-4 py-2 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
          />
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence>
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="group bg-gray-800 rounded-3xl overflow-hidden border border-gray-700 hover:border-blue-500 transition shadow-lg cursor-pointer"
                >
                  {/* Image */}
                  <motion.div layout className="relative overflow-hidden h-56">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
                  </motion.div>

                  {/* Content */}
                  <motion.div layout className="p-6">
                    <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                    {project.role && (
                      <p className="text-sm text-blue-400 font-medium mb-3">{project.role}</p>
                    )}

                    <p className="text-gray-400 text-sm mb-4 line-clamp-3 group-hover:line-clamp-none transition-all">
                        {project.description}
                    </p>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-blue-500/10 text-blue-300 px-2 py-1 rounded-full border border-blue-400/20"
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
                          className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition"
                        >
                          <Globe className="w-4 h-4" /> View Project
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition"
                        >
                          <Github className="w-4 h-4" /> Source
                        </a>
                      )}
                      {project.storybook && (
                        <a
                          href={project.storybook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition"
                        >
                          Storybook
                        </a>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))
            ) : (
              <motion.p
                key="no-projects"
                className="text-gray-400 col-span-full text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                No projects found.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ViewPortfolio;
