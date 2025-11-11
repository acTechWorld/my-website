import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Github, Linkedin, MailIcon } from "lucide-react";

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

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

  // Handle "Contact" link to scroll properly
  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      const sectionId = href.replace("/#", "");
      if (location.pathname === "/") {
        // Already on homepage → just scroll
        const section = document.getElementById(sectionId);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      } else {
        // Navigate home first, then scroll after render
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
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-semibold text-blue-400 hover:text-blue-300 transition"
        >
          Antoine CANARD<span className="text-white">.</span>
        </Link>

        {/* Navigation */}
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
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {route.name}
              </button>
            );
          })}
        </nav>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
