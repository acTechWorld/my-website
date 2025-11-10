import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  Phone,
  Mail,
  Github,
  MapPin,
  Linkedin,
  ArrowUpRight,
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
      className="relative overflow-hidden bg-gray-900 text-white py-24"
    >
      <div className="container mx-auto px-4 relative z-10">
        <h3 className="text-3xl font-semibold text-blue-400 mb-4">
          Get in touch
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-12">
          I'm always excited to take on new projects and collaborate with
          innovative minds. If you have a project in mind or just want to chat
          about design, feel free to reach out!
        </p>

        <div className="flex gap-12">
          {/* Left side — contact info */}
          <div className="flex flex-col space-y-6 w-full lg:w-1/3">
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
                  <p className="text-gray-400 text-sm">{item.label}</p>
                  <h6 className="text-lg font-semibold text-white">
                    {item.value}
                  </h6>
                </div>
              </a>
            ))}
          </div>

          {/* Right side — contact form */}
          <div className="w-full lg:w-2/3 bg-gray-800 p-8 rounded-3xl relative">
            <h3 className="text-2xl font-semibold mb-6">Leave a message</h3>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm mb-2 text-gray-300"
                >
                  Your name <span className="text-blue-400">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-900 text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm mb-2 text-gray-300"
                >
                  Email address <span className="text-blue-400">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="canard.antoine@gmail.com"
                  className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-900 text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm mb-2 text-gray-300"
                >
                  Your phone <span className="text-blue-400">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="+33 601090720"
                  className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-900 text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm mb-2 text-gray-300"
                >
                  Subject <span className="text-blue-400">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="I want to contact for..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-900 text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm mb-2 text-gray-300"
                >
                  Message <span className="text-blue-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-900 text-white focus:ring-2 focus:ring-blue-500"
                  rows={5}
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={isSending}
                  className={`inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-6 py-3 rounded-lg mt-2 hover:opacity-90 transition disabled:opacity-50 ${isSending ? '' : 'cursor-pointer'}`}
                >
                  {isSending ? "Sending..." : sent ? "Sent!" : "Send Message"}
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
