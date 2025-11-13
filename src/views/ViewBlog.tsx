import React, { useState, useMemo, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Search } from "lucide-react";
import { useTranslation } from "react-i18next";

const ViewBlog: React.FC = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");

  // Get posts from translation JSON
  const blogPosts = t("blog.posts", { returnObjects: true }) as Array<{
    title: string;
    date: string;
    excerpt: string;
    image: string;
    link: string;
    tags: string[];
  }>;

  // Filter posts based on search input
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const query = search.toLowerCase();
      return (
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    });
  }, [search, blogPosts]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  })

  return (
    <section className="relative min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white py-28">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-3">
            {t("blog.headerTitle")}
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            {t("blog.headerDescription")}
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-1/2 mx-auto mb-12">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder={t("blog.searchPlaceholder", "Search posts...")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#edeaf8] dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl pl-10 pr-4 py-2 text-gray-800 dark:text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
          />
        </div>

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPosts.length > 0 ? (
            <AnimatePresence>
              {filteredPosts.map((post, index) => (
                <motion.a
                  key={index}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  layout
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="group h-fit block bg-[#edeaf8] dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-300 dark:border-gray-700 hover:border-blue-500 shadow-lg"
                >
                  {/* Image */}
                  <motion.div layout className="relative overflow-hidden h-56">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
                  </motion.div>

                  {/* Content */}
                  <div className="p-6">
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

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs bg-blue-500/10 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full border border-blue-400/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition">
                      {t("blog.readMore")} <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          ) : (
            <motion.p
              key="no-posts"
              className="text-gray-600 dark:text-gray-400 col-span-full text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {t("blog.noPostsFound", "No posts found.")}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ViewBlog;
