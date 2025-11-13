import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ActionButton from "../components/ActionButton";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
      stiffness: 100,
      damping: 14,
      delay: index * 0.15,
    },
  }),
  exit: { opacity: 0, scale: 0.9, y: 30, transition: { duration: 0.3 } },
};

const SectionBlog: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const visiblePosts = (t("blog.posts", { returnObjects: true }) as any[]).slice(0, 3);

  const handleClickCTA = () => {
    navigate("/blog");
  };

  return (
    <section
      id="blog"
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
        <div className="flex lex-row justify-between items-end gap-6 mb-16">
          <div>
            <h3 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
              {t("blog.headerTitle")}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {t("blog.headerDescription")}
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        <motion.div
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <AnimatePresence>
            {visiblePosts.map((post: any, index: number) => (
              <motion.a
                key={index}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                className="group cursor-pointer h-fit block bg-[#edeaf8] dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-300 dark:border-gray-700 hover:border-blue-500 shadow-lg"
              >
                {/* Image */}
                <motion.div layout className="relative overflow-hidden h-52">
                  <motion.img
                    src={post.image}
                    alt={post.title}
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
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {post.date}
                  </p>
                  <h4 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                    {post.title}
                  </h4>

                  <div className="relative overflow-hidden transition-all duration-600 ease-in-out max-h-[4.5rem] group-hover:max-h-[20rem]">
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                      {post.excerpt}
                    </p>
                    <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#edeaf8] dark:from-gray-800 to-transparent pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags?.map((tag: string, i: number) => (
                      <span
                        key={i}
                        className="text-xs bg-blue-500/10 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full border border-blue-400/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More */}
                  <span className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition">
                    {t("blog.readMore")} <ArrowUpRight className="w-4 h-4" />
                  </span>
                </motion.div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* See All Button */}
        <div className="text-center mt-16">
          <ActionButton text={t("blog.seeAllPosts")} onClick={handleClickCTA} />
        </div>
      </div>
    </section>
  );
};

export default SectionBlog;
