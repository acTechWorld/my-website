import React, { useState } from "react";
import { GraduationCap, Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import ActionButton from "../components/ActionButton";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface ResumeItem {
  key: string; // translation key
}

const educationData: ResumeItem[] = [{ key: "education1" }];

const experienceData: ResumeItem[] = [
  { key: "experience1" },
  { key: "experience2" },
  { key: "experience3" },
  { key: "experience4" },
];

const SectionResume: React.FC = () => {
  const { t } = useTranslation();
  const [expandedExp, setExpandedExp] = useState<number | null>(null);
  const [expandedEducation, setExpandedEducation] = useState<number | null>(
    null
  );

  const handleClickCTA = () => {
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const renderCard = (
    item: ResumeItem,
    isOpen: boolean,
    toggle: () => void
  ) => (
    <div
      key={item.key}
      className="group relative p-4 mb-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 cursor-pointer"
      onClick={toggle}
    >
      <span className="absolute top-0 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-500 ease-out group-hover:w-full"></span>
      <span className="absolute top-0 right-0 w-0.5 h-0 bg-blue-500 transition-all duration-500 ease-out delay-150 group-hover:h-full"></span>
      <span className="absolute bottom-0 left-0 w-0.5 h-0 bg-blue-500 transition-all duration-500 ease-out delay-150 group-hover:h-full"></span>
      <span className="absolute bottom-0 right-0 h-0.5 w-0 bg-blue-500 transition-all duration-500 ease-out delay-300 group-hover:w-full"></span>

      <div className="relative z-10">
        <div className="flex justify-between items-center mb-1">
          <p className="text-blue-600 dark:text-blue-400 font-semibold">
            {t(`resume.${item.key}.year`)}
          </p>
          {t(`resume.${item.key}.type`) && (
            <span className="text-gray-600 dark:text-gray-400 text-sm italic">
              {t(`resume.${item.key}.type`)}
            </span>
          )}
        </div>
        <h5 className="text-lg font-medium">{t(`resume.${item.key}.title`)}</h5>
        <p className="text-gray-600 dark:text-gray-400">
          {t(`resume.${item.key}.subtitle`)}
        </p>

        {t(`resume.${item.key}.description`) && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggle();
            }}
            className="flex items-center gap-2 mt-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 hover:dark:text-blue-300 text-sm cursor-pointer"
          >
            {isOpen ? (
              <>
                {t("resume.hideDetails")} <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                {t("resume.showDetails")} <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        )}

        <AnimatePresence initial={false}>
          {isOpen && t(`resume.${item.key}.description`) && (
            <motion.div
              key="content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div
                className="mt-3 text-black dark:text-white text-md border-t border-gray-300 dark:border-gray-700 pt-3"
                dangerouslySetInnerHTML={{
                  __html: t(`resume.${item.key}.description`),
                }}
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
      className="relative overflow-hidden bg-white dark:bg-gray-900 text-black dark:text-white py-8 md:py-24"
    >
      <div
        className="absolute inset-0 bg-center invert-50 lg:bg-cover"
        style={{ backgroundImage: "url('/assets/imgs/background_resume.png')" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-6">
          <div>
            <h3 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
              {t("resume.headerTitle")}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {t("resume.headerDescription")}
            </p>
          </div>
          <div className="self-center lg:self-auto">
            <ActionButton
              text={t("resume.getInTouch")}
              onClick={handleClickCTA}
            />
          </div>
        </div>

        {/* Resume Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          {/* Education */}
          <div className="bg-[#edeaf8] dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-300 dark:border-gray-700">
            <div className="flex items-center gap-3 border-b border-gray-400 dark:border-gray-600 pb-3 mb-6">
              <div className="bg-blue-500/10 p-3 rounded-xl">
                <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold">
                {t("resume.education")}
              </h3>
            </div>
            {educationData.map((item, index) =>
              renderCard(item, expandedEducation === index, () =>
                setExpandedEducation(expandedEducation === index ? null : index)
              )
            )}
          </div>

          {/* Experience */}
          <div className="bg-[#edeaf8] dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-300 dark:border-gray-700">
            <div className="flex items-center gap-3 border-b border-gray-400 dark:border-gray-600 pb-3 mb-6">
              <div className="bg-blue-500/10 p-3 rounded-xl">
                <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold">
                {t("resume.experience")}
              </h3>
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
