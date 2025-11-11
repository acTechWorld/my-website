import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ActionButton from '@/components/ActionButton'

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
      "In today’s world, collaborative tools are more important than ever. Whether you’re brainstorming ideas, managing projects, or designing interfaces, having a shared digital workspace is key to enhancing productivity and creativity. In this article, we’ll explore how to build a collaborative workspace using VueDragPlayground, a powerful Vue 3 library that provides drag, resize, and rotate functionalities, alongside Vue 3’s reactive capabilities.",
    image: "/assets/imgs/blog-2.png",
    link: "/blog/vue3-composition-api-tips",
    tags: ["Vue.js", "Web Development", "User Onboarding"],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const SectionBlog: React.FC = () => {
  const visiblePosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="relative overflow-hidden bg-gray-900 text-white py-24">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-6 mb-16">
          <div>
            <h3 className="text-3xl font-semibold text-blue-400 mb-3">
              Latest Blog Posts
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Insights, tutorials, and guides from my latest web development
              experiences.
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {visiblePosts.map((post, index) => (
            <motion.a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              className="group h-fit block bg-gray-800 rounded-3xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all shadow-lg"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-gray-400 mb-1">{post.date}</p>
                <h4 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition">
                  {post.title}
                </h4>

                {/* ✨ Smooth expandable excerpt */}
                <div className="relative overflow-hidden transition-all duration-600 ease-in-out max-h-[4.5rem] group-hover:max-h-[20rem]">
                  <p className="text-gray-300 text-sm mb-4">
                    {post.excerpt}
                  </p>
                  {/* Gradient fade when clamped */}
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-gray-800 to-transparent pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
                </div>

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
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* See All Button */}
        <div className="text-center mt-16">
          <ActionButton text="See all posts" />
        </div>
      </div>
    </section>
  );
};

export default SectionBlog;
