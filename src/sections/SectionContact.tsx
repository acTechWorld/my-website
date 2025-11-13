import React, { useState } from "react";
import emailjs from "emailjs-com";
import ActionButton from "@/components/ActionButton";
import { Phone, Mail, Github, MapPin, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

type ToastType = "success" | "error" | null;

const SectionContact: React.FC = () => {
  const { t } = useTranslation();
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [toast, setToast] = useState<{
    type: ToastType;
    message: string;
  } | null>(null);

  const showToast = (type: ToastType, message: string) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 4000); // Auto-hide after 4s
  };

  const contactItems = [
    {
      icon: <Phone className="w-6 h-6 text-blue-500" />,
      label: t("contact.phone"),
      value: "+33 601090720",
      href: "tel:+0123456789",
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-500" />,
      label: t("contact.email"),
      value: "canard.antoine@gmail.com",
      href: "mailto:canard.antoine@gmail.com",
    },
    {
      icon: <Github className="w-6 h-6 text-blue-500" />,
      label: t("contact.github"),
      value: "github.com/acTechWorld",
      href: "https://github.com/acTechWorld",
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-500" />,
      label: t("contact.location"),
      value: "Paris, France",
      href: "https://maps.google.com/maps?q=Paris+France",
    },
    {
      icon: <Linkedin className="w-6 h-6 text-blue-500" />,
      label: t("contact.linkedin"),
      value: "linkedin.com/in/antoine-canard",
      href: "https://www.linkedin.com/in/antoine-canard",
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    const form = e.currentTarget;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setSent(true);
          setIsSending(false);
          form.reset();
          showToast("success", "✅ Message sent successfully!");
        },
        (error: Error) => {
          console.error("Email send error:", error);
          setIsSending(false);
          showToast("error", "❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#edeaf8] dark:bg-gray-800 text-black dark:text-white py-8 md:py-24"
    >
      {/* Toast notification */}
      {toast && (
        <div
          className={`fixed top-6 right-6 z-50 px-6 py-3 rounded-xl shadow-lg text-white font-medium transition-all duration-500 ${
            toast.type === "success"
              ? "bg-green-300 animate-fadeIn"
              : "bg-red-300 animate-fadeIn"
          }`}
        >
          {toast.message}
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <h3 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
          {t("contact.headerTitle")}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-12">
          {t("contact.headerDescription")}
        </p>

        <div className="flex gap-12 flex-col-reverse lg:flex-row">
          {/* Contact info */}
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
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.label}
                  </p>
                  <h6 className="text-lg font-semibold text-black dark:text-white">
                    {item.value}
                  </h6>
                </div>
              </a>
            ))}
          </div>

          {/* Contact form */}
          <div className="w-full lg:w-2/3 bg-[#edeaf8] dark:bg-gray-800 p-8 rounded-3xl relative">
            <h3 className="text-2xl font-semibold mb-6">
              {t("contact.formTitle")}
            </h3>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm mb-2 text-gray-700 dark:text-gray-300"
                >
                  {t("contact.formName")}{" "}
                  <span className="text-blue-600 dark:text-blue-400">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={t("contact.formNamePlaceholder")}
                  className="w-full px-4 py-2 rounded-lg border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm mb-2 text-gray-700 dark:text-gray-300"
                >
                  {t("contact.formEmail")}{" "}
                  <span className="text-blue-600 dark:text-blue-400">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t("contact.formEmailPlaceholder")}
                  className="w-full px-4 py-2 rounded-lg border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm mb-2 text-gray-700 dark:text-gray-300"
                >
                  {t("contact.formPhone")}{" "}
                  <span className="text-blue-600 dark:text-blue-400">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder={t("contact.formPhonePlaceholder")}
                  className="w-full px-4 py-2 rounded-lg border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm mb-2 text-gray-700 dark:text-gray-300"
                >
                  {t("contact.formSubject")}{" "}
                  <span className="text-blue-600 dark:text-blue-400">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder={t("contact.formSubjectPlaceholder")}
                  className="w-full px-4 py-2 rounded-lg border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm mb-2 text-gray-700 dark:text-gray-300"
                >
                  {t("contact.formMessage")}{" "}
                  <span className="text-blue-600 dark:text-blue-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder={t("contact.formMessagePlaceholder")}
                  className="w-full px-4 py-3 rounded-lg border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white focus:ring-2 focus:ring-blue-500"
                  rows={5}
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <ActionButton
                  className="flex-left"
                  type="submit"
                  disabled={isSending}
                  text={
                    isSending
                      ? t("contact.sending")
                      : sent
                      ? t("contact.sent")
                      : t("contact.sendMessage")
                  }
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Simple fade animation */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default SectionContact;
