import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface KPIItem {
  value: number;
  label1: string;
  label2: string;
}

const kpis: KPIItem[] = [
  { value: 6, label1: "Year of", label2: "Experience" },
  { value: 30, label1: "Projects", label2: "Completed" },
  { value: 6, label1: "Satisfied", label2: "Happy Clients" },
  { value: 15, label1: "Technologies", label2: "Mastered" },
];

const SectionKPI: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.3,    // start animation when 30% of section is visible
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden z-0 py-16 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap flex-col lg:flex-row items-center justify-between gap-8">
          {kpis.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full sm:w-1/2 lg:w-auto"
            >
              <div className="flex items-center text-center mx-auto">
                <span className="text-5xl font-medium text-blue-400 flex items-center">
                  <span className="text-6xl font-semibold text-gray-100">
                    {inView ? (
                      <CountUp
                        start={0}
                        end={item.value}
                        duration={2}
                      />
                    ) : (
                      0
                    )}
                  </span>
                  +
                </span>
                <div className="text-start ms-3">
                  <p className="text-lg text-gray-400 mb-0">{item.label1}</p>
                  <p className="text-lg font-bold mb-0 text-gray-100">
                    {item.label2}
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
