import React from "react";
import { useTranslation } from "react-i18next";
import { Mail, Instagram } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-r from-blue-800 to-cyan-600 text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-4">
            International Migration Line
          </h3>
          <p className="text-sm opacity-90 mb-4">{t("footer_description")}</p>

          <div className="flex flex-col gap-2">
            <a href="tel:+998888720009" className="hover:underline">
              📞 +998 88 872 00 09
            </a>
            <a href="tel:+998888720008" className="hover:underline">
              📞 +998 88 872 00 08
            </a>
            <a
              href="mailto:internationmigrationxba@gmail.com"
              className="flex items-center gap-2 hover:underline"
            >
              <Mail size={18} /> internationmigrationxba@gmail.com
            </a>
            <p className="mt-2">📍 {t("address")}</p>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">{t("quick_links")}</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:underline">{t("home")}</a></li>
            <li><a href="#about" className="hover:underline">{t("about")}</a></li>
            <li><a href="#services" className="hover:underline">{t("services")}</a></li>
            <li><a href="#license" className="hover:underline">{t("license")}</a></li>
            <li><a href="#contact" className="hover:underline">{t("contact")}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">{t("follow_us")}</h4>
          <div className="flex gap-6 items-center">
            <a
              href="mailto:info@migrationline.uz"
              className="transition-colors duration-300 group"
              title="Email"
            >
              <Mail
                size={26}
                className="text-white transition-all duration-300 group-hover:text-[#EA4335]"
              />
            </a>

            <a
              href="https://t.me/international_migration_line"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 group"
              title="Telegram"
            >
              <FaTelegramPlane
                size={28}
                className="text-white transition-all duration-300 group-hover:text-[#0088cc]"
              />
            </a>

            <a
              href="https://instagram.com/migrationline"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 group"
              title="Instagram"
            >
              <Instagram
                size={26}
                className="text-white transition-all duration-300 group-hover:text-[#bb0a45]"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-10 border-t border-white/30 pt-5">
        © {new Date().getFullYear()} International Migration Line.{" "}
        {t("all_rights_reserved")}
      </div>
    </footer>
  );
};

export default Footer;
