import React, { useState } from "react";
import {
  GraduationCap,
  Briefcase,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import ActionButton from "@/components/ActionButton";
import { AnimatePresence, motion } from "framer-motion";

interface ResumeItem {
  year: string;
  title: string;
  subtitle: string;
  type?: string;
  description?: string;
}

const educationData: ResumeItem[] = [
  {
    year: "2015–2019",
    title: "Master 2, Information Systems Engineer",
    subtitle: "ISEP",
    description: `<b><u>Majors</u></b>: Information Systems Architecture, Cybersecurity, Engineering Software and web technologies<br>
<b><u>Studied programming languages</u></b>: Python, Java, Js, Html, Css, SQL, PHP, Git<br>
<b><u>Studied frameworks</u></b>: React.js, Spring boot, Vue.js, Node.js`
  },
];

const experienceData: ResumeItem[] = [
  {
    year: "january 2024 - now",
    title: "Senior Web Frontend Developer - Vue.js | React.js",
    subtitle: "Amundi",
    type: "Freelance",
    description: `
    <b><u>Context</u></b>:<br>
        <p style="margin-left: 16px">As a freelancer, I supported Amundi in improving their investment web platforms intended for banking advisor</p><br>

    <b><u>Tasks carried out</u></b>:<br>
        <p style="margin-left: 16px">
        - Creation of a new web platform for placing banking orders<br>
        - Improvement of client web platforms, development of new frontend features and fixed existing bugs<br>
        - Improvement of web administration platforms, development of new frontend functionalities and fixing existing bugs<br>
        - Creation of a library of graphic frontend components, used internally on several applications<br>
        - PoC Al: creation of a web interface incorporating a Al integration for internal business use
        </p><br>

    <b><u>Technical environment:</u></b>:<br>
        <p style="margin-left: 16px">
        - Frontend: Vue.js 2 / Vue.js 3 / Typescript / React<br>
        - Backend: PHP Symfony<br>
        - Models and prototypes: Figma / Zeroheight<br>
        - Tests: Cypress / Vitest<br>
        - Quality code: SonarQube<br>
        - CI/CD: Jenkins / argo CD<br>
        - Tickets: Jira
        </p>
    `
  },
  {
    year: "September 2021 - December 2023",
    title: "Lead Fullstack Web Developer - Vue.js | Java Spring Boot",
    subtitle: "System U",
    type: "Full-time (Consulting) / Freelance",
    description: `
    <b><u>Context</u></b>:<br>
        <p style="margin-left: 16px">
        As a consultant and later a freelancer, I supported Système U in modernizing their suite of supply chain applications.<br>
        Within the UIris division, I was part of a team composed of 4 developers, 2 project managers, 3 Product Owners, and 1 UX/UI designer.<br>
        Over the course of two years, we worked under a waterfall methodology to design and build three new applications used in the group’s logistics warehouses.
        </p><br>

    <b><u>Tasks carried out</u></b>:<br>
        <p style="margin-left: 16px">
        - Designed, developed, deployed, and maintained three new PWA frontend applications built with Vue.js.<br>
        - Designed, developed, deployed, and maintained three Android mobile APK TWA applications using Java.<br>
        - Designed, developed, deployed, and maintained nine backend microservices in Java Spring Boot connected to IBMi databases.<br>
        - Led and mentored a team of three junior developers.<br>
        - Developed automated unit and integration test suites.<br>
        - Trained teams on Vue.js and Java Spring Boot technologies.<br>
        - Created a proof of concept (PoC) integrating Kafka messaging systems.<br>
        - Contributed to the GCP cloud migration of several components and integrated a Firestore database.<br>
        - Authored and maintained technical documentation.
        </p><br>

    <b><u>Technical environment:</u></b>:<br>
        <p style="margin-left: 16px">
        - Frontend: Vue.js 2 / Vue.js 3 / TypeScript<br>
        - Backend: Java (Spring Boot)<br>
        - Databases: PostgreSQL / IBMi / Firestore<br>
        - Cloud: Google Cloud Platform (GCP)<br>
        - Design & prototyping: Figma<br>
        - Code quality: SonarQube<br>
        - CI/CD: Jenkins<br>
        - Monitoring: Grafana, ELK / APM<br>
        - Project management: Jira
        </p>
    `
  },
  {
    year: "September 2020 – September 2021",
    title: "Full Stack Web Developer - React.js / Node.js",
    subtitle: "L'Oréal",
    type: "Full-time (Consulting)",
    description: `
        <b><u>Context</u></b>:<br>
            <p style="margin-left: 16px">
            As a web development consultant, I joined L’Oréal’s France Data team, where I contributed to the development of new features integrated with the Adobe Campaign marketing tool and to the enhancement of various e-commerce websites for the group’s brands.<br>
            I worked within a team of 5 developers, 3 project managers, and 2 Product Owners, following an Agile SCRUM methodology. Team communication was primarily conducted in English.
            </p><br>

        <b><u>Tasks carried out</u></b>:<br>
            <p style="margin-left: 16px">
            - Developed new features for the Adobe Campaign marketing platform.<br>
            - Built several React.js web pages integrated with Adobe Campaign.<br>
            - Integrated new customer data flows into the Adobe Campaign CRM.<br>
            - Created automated unit and integration test suites.<br>
            - Authored and maintained technical documentation.<br>
            - Trained internal teams on Adobe Campaign usage.
            </p><br>
            
        <b><u>Technical environment:</u></b>:<br>
            <p style="margin-left: 16px">
            - Frontend: React.js / TypeScript<br>
            - CRM: Adobe Campaign<br>
            - Cloud: Google Cloud Platform (GCP)<br>
            - Design & prototyping: Figma
            </p>
    `
  },
  {
    year: "January 2020 – September 2021",
    title: "Full Stack Web Developer - React.js / Node.js",
    subtitle: "Velvet Consulting",
    type: "Full-time",
    description: `
    <b><u>Context</u></b>:<br>
        <p style="margin-left: 16px">
        As part of the internal development team at Velvet Consulting, I contributed to the creation of a web application for the ESSEC Business School.<br>
        Working within a team of 3 developers, 1 Product Owner, and 1 Project Manager, we followed an Agile SCRUM methodology.<br>
        The developed application was an internal portal designed for ESSEC students and faculty.<br>
        The platform allowed users to track courses, share information between students and teachers, and stay updated on school news and announcements.
        </p><br>

    <b><u>Tasks carried out</u></b>:<br>
        <p style="margin-left: 16px">
        - Developed the new internal web portal using React.js.<br>
        - Enhanced the site’s backend, built on the WordPress CMS.<br>
        - Implemented automated unit and integration test suites.
        </p><br>

    <b><u>Technical environment:</u></b>:<br>
        <p style="margin-left: 16px">
        - Frontend: React.js / TypeScript<br>
        - CMS: WordPress<br>
        - Design & prototyping: Figma<br>
        - Project management: Jira
        </p>
    `
  },
];

const SectionResume: React.FC = () => {
  const [expandedExp, setExpandedExp] = useState<number | null>(null);
  const [expandedEducation, setExpandedEducation] = useState<number | null>(null);

  const renderCard = (
    item: ResumeItem,
    isOpen: boolean,
    toggle: () => void
  ) => (
    <div
      className="group relative p-4 mb-6 rounded-xl bg-gray-900 border border-gray-700 cursor-pointer"
      onClick={toggle}
    >
      {/* Animated border */}
      <span className="absolute top-0 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-500 ease-out group-hover:w-full"></span>
      <span className="absolute top-0 right-0 w-0.5 h-0 bg-blue-500 transition-all duration-500 ease-out delay-150 group-hover:h-full"></span>
      <span className="absolute bottom-0 left-0 w-0.5 h-0 bg-blue-500 transition-all duration-500 ease-out delay-150 group-hover:h-full"></span>
      <span className="absolute bottom-0 right-0 h-0.5 w-0 bg-blue-500 transition-all duration-500 ease-out delay-300 group-hover:w-full"></span>

      <div className="relative z-10">
        <div className="flex justify-between items-center mb-1">
          <p className="text-blue-400 font-semibold">{item.year}</p>
          {item.type && (
            <span className="text-gray-400 text-sm italic">{item.type}</span>
          )}
        </div>
        <h5 className="text-lg font-medium">{item.title}</h5>
        <p className="text-gray-400">{item.subtitle}</p>

        {item.description && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggle();
            }}
            className="flex items-center gap-2 mt-3 text-blue-400 hover:text-blue-300 text-sm cursor-pointer"
          >
            {isOpen ? (
              <>
                Hide details <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Show details <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        )}

        {/* Smooth expand animation */}
        <AnimatePresence initial={false}>
          {isOpen && item.description && (
            <motion.div
              key="content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div
                className="mt-3 text-white text-md border-t border-gray-700 pt-3"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );

  return (
    <section
      id="resume"
      className="relative overflow-hidden bg-gray-900 text-white py-24"
    >
      <div
        className="absolute inset-0 bg-cover bg-center invert-50"
        style={{
          backgroundImage: "url('/assets/imgs/background_resume.png')",
        }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-6">
          <div>
            <h3 className="text-3xl font-semibold text-blue-400 mb-3">
              My Resume
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I believe that working hard and learning every day will help me
              improve and satisfy my customers.
            </p>
          </div>
          <ActionButton text="Get in touch" />
        </div>

        {/* Resume Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          {/* Education */}
          <div className="bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-700">
            <div className="flex items-center gap-3 border-b border-gray-600 pb-3 mb-6">
              <div className="bg-blue-500/10 p-3 rounded-xl">
                <GraduationCap className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            {educationData.map((item, index) =>
              renderCard(item, expandedEducation === index, () =>
                setExpandedEducation(
                  expandedEducation === index ? null : index
                )
              )
            )}
          </div>

          {/* Experience */}
          <div className="bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-700">
            <div className="flex items-center gap-3 border-b border-gray-600 pb-3 mb-6">
              <div className="bg-blue-500/10 p-3 rounded-xl">
                <Briefcase className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold">Experience</h3>
            </div>
            {experienceData.map((item, index) =>
              renderCard(item, expandedExp === index, () =>
                setExpandedExp(expandedExp === index ? null : index)
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};


export default SectionResume;