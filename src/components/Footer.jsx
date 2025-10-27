import React from "react";
import { useTranslation } from "react-i18next";
import { Mail, Instagram } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";
import logo from "../../public/migrationwthoutbckfroundwhite.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white pt-16 pb-8 mt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-10"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <img
            src={logo}
            alt="International Migration Line Logo"
            className="w-40 mb-4"
          />
          <p className="text-sm text-gray-200 leading-relaxed mb-6">
            {t("footer_description") ||
              "Ishchi migratsiya bo‘yicha xalqaro xizmatlar va professional maslahatlar markazi."}
          </p>

          <div className="space-y-3 text-sm text-gray-100">
            <a
              href="tel:+998888720009"
              className="block hover:text-cyan-300 transition-colors"
            >
              📞 +998 88 872 00 09
            </a>
            <a
              href="tel:+998888720008"
              className="block hover:text-cyan-300 transition-colors"
            >
              📞 +998 88 872 00 08
            </a>
            <a
              href="mailto:internationmigrationxba@gmail.com"
              className="flex items-center gap-2 hover:text-cyan-300 transition-colors"
            >
              <Mail size={18} /> internationmigrationxba@gmail.com
            </a>
            <p className="flex items-start gap-2 mt-2 leading-snug">
              📍 {t("address") || "Samarqand viloyati, Mirsaid Baraka"}
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 uppercase tracking-wide">
            {t("quick_links") || "Sahifalar"}
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home" className="hover:text-cyan-300 transition">
                {t("home") || "Bosh sahifa"}
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-cyan-300 transition">
                {t("about") || "Biz haqimizda"}
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-cyan-300 transition">
                {t("services") || "Xizmatlar"}
              </a>
            </li>
            <li>
              <a href="#license" className="hover:text-cyan-300 transition">
                {t("license") || "Litsenziyalar"}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-cyan-300 transition">
                {t("contact") || "Aloqa"}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 uppercase tracking-wide">
            {t("follow_us") || "Bizni kuzating"}
          </h4>

          <div className="flex items-center gap-6 mb-6">
            <a
              href="mailto:info@migrationline.uz"
              className="group transition-all duration-300"
              title="Email"
            >
              <Mail
                size={26}
                className="text-white group-hover:text-[#EA4335] transition-colors duration-300"
              />
            </a>

            <a
              href="https://t.me/international_migration_line"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-all duration-300"
              title="Telegram"
            >
              <FaTelegramPlane
                size={28}
                className="text-white group-hover:text-[#0088cc] transition-colors duration-300"
              />
            </a>

            <a
              href="https://instagram.com/migrationline"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-all duration-300"
              title="Instagram"
            >
              <Instagram
                size={26}
                className="text-white group-hover:text-[#E1306C] transition-colors duration-300"
              />
            </a>
          </div>

        </div>
      </div>

      <div className="relative z-10 mt-14 border-t border-white/20 pt-6 text-center text-sm text-gray-200">
        © {new Date().getFullYear()}{" "}
        <span className="font-medium">International Migration Line</span>.{" "}
        {t("all_rights_reserved") || "Barcha huquqlar himoyalangan."}
      </div>
    </footer>
  );
};

export default Footer;
