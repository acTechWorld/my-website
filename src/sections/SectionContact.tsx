import React, { useState } from "react";
import emailjs from "emailjs-com";
import ActionButton from "@/components/ActionButton";
import {
  Phone,
  Mail,
  Github,
  MapPin,
  Linkedin,
} from "lucide-react";

const contactItems = [
  {
    icon: <Phone className="w-6 h-6 text-blue-500" />,
    label: "Phone",
    value: "+33 601090720",
    href: "tel:+0123456789",
  },
  {
    icon: <Mail className="w-6 h-6 text-blue-500" />,
    label: "Email",
    value: "canard.antoine@gmail.com",
    href: "mailto:canard.antoine@gmail.com",
  },
  {
    icon: <Github className="w-6 h-6 text-blue-500" />,
    label: "GitHub",
    value: "github.com/acTechWorld",
    href: "https://github.com/acTechWorld",
  },
  {
    icon: <MapPin className="w-6 h-6 text-blue-500" />,
    label: "Location",
    value: "Paris, France",
    href: "https://maps.google.com/maps?q=Paris+France",
  },
    {
    icon: <Linkedin className="w-6 h-6 text-blue-500" />,
    label: "LinkedIn",
    value: "linkedin.com/in/antoine-canard",
    href: "https://www.linkedin.com/in/antoine-canard",
  },
];

const SectionContact: React.FC = () => {

    const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const form = e.currentTarget;

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",    // e.g. "service_xxx"
        "YOUR_TEMPLATE_ID",   // e.g. "template_xxx"
        form,
        "YOUR_PUBLIC_KEY"     // e.g. "3e7Q9aXl_XXXXX"
      )
      .then(
        () => {
          setSent(true);
          setIsSending(false);
          form.reset();
        },
        (error: Error) => {
          console.error("Email send error:", error);
          setIsSending(false);
        }
      );
  };
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#edeaf8] dark:bg-gray-800 text-black dark:text-white py-8 md:py-24"
    >
      <div className="container mx-auto px-4 relative z-10">
        <h3 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
          Get in touch
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-12">
          I'm always excited to take on new projects and collaborate with
          innovative minds. If you have a project in mind or just want to chat
          about design, feel free to reach out!
        </p>

        <div className="flex gap-12 flex-col-reverse lg:flex-row">
          {/* Left side — contact info */}
          <div className="grid p-4 md:p-0 md:grid-cols-2 lg:flex flex-wrap flex-col self-center gap-6 lg:w-1/3">
            {contactItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 group"
              >
                <div className="bg-white rounded-xl p-4 flex items-center justify-center border-2 border-blue-500 transition-transform group-hover:scale-105">
                  {item.icon}
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.label}</p>
                  <h6 className="text-lg font-semibold text-black dark:text-white">
                    {item.value}
                  </h6>
                </div>
              </a>
            ))}
          </div>

          {/* Right side — contact form */}
          <div className="w-full lg:w-2/3 bg-[#edeaf8] dark:bg-gray-800 p-8 rounded-3xl relative">
            <h3 className="text-2xl font-semibold mb-6">Leave a message</h3>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm mb-2 text-gray-700 dark:text-gray-300"
                >
                  Your name <span className="text-blue-600 dark:text-blue-400">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 rounded-lg border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm mb-2 text-gray-700 dark:text-gray-300"
                >
                  Email address <span className="text-blue-600 dark:text-blue-400">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="canard.antoine@gmail.com"
                  className="w-full px-4 py-2 rounded-lg border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm mb-2 text-gray-700 dark:text-gray-300"
                >
                  Your phone <span className="text-blue-600 dark:text-blue-400">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="+33 601090720"
                  className="w-full px-4 py-2 rounded-lg border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm mb-2 text-gray-700 dark:text-gray-300"
                >
                  Subject <span className="text-blue-600 dark:text-blue-400">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="I want to contact for..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm mb-2 text-gray-700 dark:text-gray-300"
                >
                  Message <span className="text-blue-600 dark:text-blue-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white focus:ring-2 focus:ring-blue-500"
                  rows={5}
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <ActionButton className="flex-left" type="submit" disabled={isSending} text={isSending ? "Sending..." : sent ? "Sent!" : "Send Message"}/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
