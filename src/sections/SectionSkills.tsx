import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiVuedotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNuxtdotjs,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiPhp,
  SiSymfony,
} from "react-icons/si";
import { useTranslation } from "react-i18next";

interface Skill {
  name: string;
  years: number;
  icon: React.ReactNode;
  color: string; // main color to use for icon & bar
}

const frontendSkills: Skill[] = [
  {
    name: "React.js",
    years: 6,
    icon: <SiReact className="text-sky-400 w-6 h-6" />,
    color: "#38bdf8",
  },
  {
    name: "Vue.js",
    years: 6,
    icon: <SiVuedotjs className="text-green-400 w-6 h-6" />,
    color: "#4ade80",
  },
  {
    name: "TypeScript",
    years: 6,
    icon: <SiTypescript className="text-blue-500 w-6 h-6" />,
    color: "#3b82f6",
  },
  {
    name: "JavaScript (ES6+)",
    years: 6,
    icon: <SiJavascript className="text-yellow-400 w-6 h-6" />,
    color: "#facc15",
  },
  {
    name: "HTML / CSS / SCSS",
    years: 6,
    icon: (
      <div className="flex items-center gap-1">
        <SiHtml5 className="text-orange-500 w-5 h-5" />
        <SiCss3 className="text-blue-400 w-5 h-5" />
      </div>
    ),
    color: "#f97316",
  },
  {
    name: "Tailwind CSS",
    years: 4,
    icon: <SiTailwindcss className="text-cyan-400 w-6 h-6" />,
    color: "#22d3ee",
  },
  {
    name: "Nuxt.js",
    years: 2,
    icon: <SiNuxtdotjs className="text-emerald-400 w-6 h-6" />,
    color: "#34d399",
  },
];

const backendSkills: Skill[] = [
  {
    name: "Node.js",
    years: 4,
    icon: <SiNodedotjs className="text-green-500 w-6 h-6" />,
    color: "#22c55e",
  },
  {
    name: "Express.js",
    years: 4,
    icon: <SiExpress className="text-gray-700 dark:text-gray-300 w-6 h-6" />,
    color: "#d1d5db",
  },
  {
    name: "Java (Spring Boot)",
    years: 3,
    icon: <SiSpringboot className="text-green-300 w-6 h-6" />,
    color: "#86efac",
  },
  {
    name: "Python",
    years: 2,
    icon: <SiPython className="text-yellow-400 w-6 h-6" />,
    color: "#facc15",
  },
  {
    name: "Django",
    years: 2,
    icon: <SiDjango className="text-green-500 w-6 h-6" />,
    color: "#22c55e",
  },
  {
    name: "PostgreSQL",
    years: 5,
    icon: <SiPostgresql className="text-sky-500 w-6 h-6" />,
    color: "#0ea5e9",
  },
  {
    name: "PHP (Symfony)",
    years: 2,
    icon: (
      <div className="flex items-center gap-1">
        <SiPhp className="text-indigo-400 w-5 h-5" />
        <SiSymfony className="text-gray-700 dark:text-gray-300 w-5 h-5" />
      </div>
    ),
    color: "#818cf8",
  },
];

const SkillSection: React.FC = () => {
  const { t } = useTranslation();

  const maxYears = Math.max(
    ...[...frontendSkills, ...backendSkills].map((s) => s.years)
  );

  const renderSkill = (skill: Skill, index: number) => (
    <div key={index}>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-3">
          {skill.icon}
          <span className="font-medium">{skill.name}</span>
        </div>
        <span className="text-blue-600 dark:text-blue-400">
          {skill.years} yrs
        </span>
      </div>
      <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
        <motion.div
          className="h-3 rounded-full"
          style={{
            backgroundColor: skill.color,
            boxShadow: `0 0 12px ${skill.color}`,
          }}
          initial={{ width: 0 }}
          whileInView={{
            width: `${(skill.years / maxYears) * 100}%`,
          }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className="bg-white dark:bg-gray-900 text-black dark:text-white py-8 md:py-24"
    >
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
          {t("skills.title")}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-12">
          {t("skills.description")}
        </p>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Frontend */}
          <div>
            <h4 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6 flex items-center gap-2">
              🎨 {t("skills.frontend")}
            </h4>
            <div className="space-y-6">{frontendSkills.map(renderSkill)}</div>
          </div>

          {/* Backend */}
          <div>
            <h4 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6 flex items-center gap-2">
              ⚙️ {t("skills.backend")}
            </h4>
            <div className="space-y-6">{backendSkills.map(renderSkill)}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
