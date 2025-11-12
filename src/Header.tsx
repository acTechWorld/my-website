import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Github, Linkedin, MailIcon, Sun, Moon, Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  // Initialize theme based on localStorage or system preference
useEffect(() => {
  const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
  const activeTheme = storedTheme || "dark"; // default = dark
  setTheme(activeTheme);
  document.documentElement.classList.toggle("dark", activeTheme === "dark");
}, []);


  // Toggle theme handler
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const mainRoutes = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/#contact" },
  ];

  const socials = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/antoine-canard/",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "GitHub",
      href: "https://github.com/acTechWorld",
      icon: <Github className="w-5 h-5" />,
    },
    {
      name: "Mail",
      href: "mailto:canard.antoine@gmail.com",
      icon: <MailIcon className="w-5 h-5" />,
    },
  ];

  // Handle navigation for contact scroll
  const handleNavClick = (href: string) => {
    setMenuOpen(false); // Close menu on click
    if (href.startsWith("/#")) {
      const sectionId = href.replace("/#", "");
      if (location.pathname === "/") {
        const section = document.getElementById(sectionId);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          const section = document.getElementById(sectionId);
          if (section) section.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    } else {
      navigate(href);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#edeaf8] dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden cursor-pointer p-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-blue-500 text-gray-700 dark:text-gray-300  hover:text-blue-600 dark:hover:text-blue-400 transition"
            aria-label="Toggle mobile menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        {/* Logo */}
        <Link
          to="/"
          className="hidden lg:flex text-2xl font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition"
        >
          Antoine CANARD<span className="text-gray-800 dark:text-gray-200">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {mainRoutes.map((route) => {
            const isActive =
              location.pathname === route.href ||
              (route.href.includes("#") && location.hash === route.href);

            return (
              <button
                key={route.name}
                onClick={() => handleNavClick(route.href)}
                className={`px-2 py-1 text-sm font-medium transition cursor-pointer ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                }`}
              >
                {route.name}
              </button>
            );
          })}
        </nav>

        {/* Right Section — Socials, Theme, Mobile Toggle */}
        <div className="flex items-center gap-4">
          

          {/* Social Icons (hidden on mobile) */}
          <div className="hidden md:flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
         {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg cursor-pointer border border-gray-300 dark:border-gray-700 hover:border-blue-500 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
        <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }  bg-[#edeaf8]/95 dark:bg-gray-800/95 border-t border-gray-200 dark:border-gray-800`}
        >
        <div className="px-6 py-4 space-y-4">
            {/* Navigation Links */}
            <nav className="flex flex-col space-y-3">
            {mainRoutes.map((route) => {
                const isActive =
                location.pathname === route.href ||
                (route.href.includes("#") && location.hash === route.href);

                return (
                <button
                    key={route.name}
                    onClick={() => handleNavClick(route.href)}
                    className={`text-left cursor-pointer text-base font-medium transition ${
                    isActive ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                    }`}
                >
                    {route.name}
                </button>
                );
            })}
            </nav>

            {/* Socials */}
            <div className="flex gap-5 pt-3 border-t border-gray-300 dark:border-gray-700">
            {socials.map((social) => (
                <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 cursor-pointer hover:text-blue-600 hover:dark:text-blue-400 transition"
                aria-label={social.name}
                >
                {social.icon}
                </a>
            ))}
            </div>
        </div>
        </div>
    </header>
  );
};

export default Header;
