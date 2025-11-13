import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

const kpisData: { value: number; key: string }[] = [
  { value: 6, key: "experienceYears" },
  { value: 30, key: "projectsCompleted" },
  { value: 6, key: "happyClients" },
  { value: 15, key: "technologiesMastered" },
];

const SectionKPI: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden z-0 py-16 bg-[#edeaf8] dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap flex-col lg:flex-row items-center justify-between gap-8">
          {kpisData.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full sm:w-1/2 lg:w-auto"
            >
              <div className="flex items-center text-center mx-auto">
                <span className="text-5xl font-medium text-blue-600 dark:text-blue-400 flex items-center">
                  <span className="text-6xl font-semibold text-gray-900 dark:text-gray-100">
                    {inView ? (
                      <CountUp start={0} end={item.value} duration={2} />
                    ) : (
                      0
                    )}
                  </span>
                  +
                </span>
                <div className="text-start ms-3">
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-0">
                    {t(`kpi.${item.key}.label1`)}
                  </p>
                  <p className="text-lg font-bold mb-0 text-gray-900 dark:text-gray-100">
                    {t(`kpi.${item.key}.label2`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionKPI;
