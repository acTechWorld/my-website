import React, { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Search } from "lucide-react";

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  image: string;
  link: string;
  tags?: string[];
}

const blogPosts: BlogPost[] = [
  {
    title: "How I Built a Custom Vue.js Onboarding Tour Component",
    date: "Nov 20, 2024",
    excerpt:
      "Building a good user onboarding experience is crucial for engaging new users. Instead of relying on a pre-built solution, I decided to create my own Vue.js onboarding tour component. In this article, I’ll walk you through how I approached the creation of the VueOnboardingTour component, the challenges I faced, and how I overcame them.",
    image: "/assets/imgs/blog-1.png",
    link: "https://medium.com/p/8dbf1e588b9b",
    tags: ["Vue.js", "Frontend", "Open Source"],
  },
  {
    title: "Building a Collaborative Workspace with VueDragPlayground and Vue 3",
    date: "Oct 15, 2025",
    excerpt:
      "In today’s world, collaborative tools are more important than ever. Whether you’re brainstorming ideas, managing projects, or designing interfaces, having a shared digital workspace is key to enhancing productivity and creativity. In this article, we’ll explore how to build a collaborative workspace using VueDragPlayground.",
    image: "/assets/imgs/blog-2.png",
    link: "/blog/vue3-composition-api-tips",
    tags: ["Vue.js", "Web Development", "User Onboarding"],
  },
  // Add more posts here...
];

const ViewBlog: React.FC = () => {
  const [search, setSearch] = useState("");

  // Filter posts based on search input
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const query = search.toLowerCase();
      return (
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    });
  }, [search]);

  return (
    <section className="relative min-h-screen bg-gray-900 text-white py-28">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-blue-400 mb-3">My Blog Posts</h1>
          <p className="text-gray-300 text-lg">
            Explore insights, tutorials, and stories from my development journey.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-1/2 mx-auto mb-12">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-xl pl-10 pr-4 py-2 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
          />
        </div>

        {/* Blog Grid with smooth animated filtering */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence>
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <motion.a
                  key={post.title}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  layout
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="group block bg-gray-800 rounded-3xl overflow-hidden border border-gray-700 hover:border-blue-500 shadow-lg"
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
                  <motion.div layout className="p-6">
                    <p className="text-sm text-gray-400 mb-1">{post.date}</p>
                    <h4 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition">
                      {post.title}
                    </h4>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags?.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs bg-blue-500/10 text-blue-300 px-2 py-1 rounded-full border border-blue-400/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <span className="inline-flex items-center gap-1 text-sm text-blue-400 font-medium group-hover:text-blue-300 transition">
                      Read More <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </motion.div>
                </motion.a>
              ))
            ) : (
              <motion.p
                key="no-posts"
                className="text-gray-400 col-span-full text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                No posts found.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};


export default ViewBlog;
