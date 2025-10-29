import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X, Phone, Mail } from "lucide-react";
import logo from "../../public/migrationwthoutbckfroundwhite.png";
import logo2 from "../../public/migrationwthoutbckfround.png";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lang) => i18n.changeLanguage(lang);

  const handleScrollTo = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
      }
    }
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      <div className="hidden md:flex justify-between items-center px-8 py-2 bg-gradient-to-r from-blue-700 to-cyan-500 text-white text-sm">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1">
            <Phone size={16} /> +998 88 872 00 09
          </div>
          <div className="flex items-center gap-1">
            <Mail size={16} /> info@migrationline.uz
          </div>
        </div>

        <div className="flex items-center gap-4">
          {["uz", "ru", "en"].map((lang) => (
            <button
              key={lang}
              onClick={() => changeLanguage(lang)}
              className={`uppercase transition-all ${
                i18n.language === lang
                  ? "text-yellow-300 font-bold scale-110"
                  : "hover:text-yellow-200"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md text-gray-900"
            : "bg-transparent text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
          <div
            onClick={() => handleScrollTo("home")}
            className="flex items-center cursor-pointer select-none"
          >
            <img
              src={isScrolled ? logo2 : logo}
              alt="logo"
              className="w-36 sm:w-44 h-auto transition-all duration-300"
            />
          </div>

          <ul className="hidden md:flex items-center gap-8 font-medium">
            {[
              ["home", t("home")],
              ["about", t("about")],
              ["services", t("services")],
              ["license", t("license")],
              ["team", t("our_team") || "Bizning jamoa"],
              ["destinations", t("our_destinations") || "Yuboriladigan davlatlar"],
              ["contact", t("contact")],
            ].map(([id, label]) => (
              <li
                key={id}
                onClick={() => handleScrollTo(id)}
                className="hover:text-blue-600 cursor-pointer transition-colors"
              >
                {label}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 md:hidden">
            <div className="flex items-center gap-1 text-sm">
              {["uz", "ru", "en"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => changeLanguage(lang)}
                  className={`uppercase ${
                    i18n.language === lang
                      ? "text-blue-500 font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`p-2 rounded-md transition-colors ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden bg-white text-gray-900 font-medium transition-all duration-500 overflow-hidden ${
            menuOpen ? "max-h-96 py-4 shadow-md" : "max-h-0 py-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-4">
            {[
              ["home", t("home")],
              ["about", t("about")],
              ["services", t("services")],
              ["license", t("license")],
              ["team", t("our_team") || "Bizning jamoa"],
              ["destinations", t("our_destinations") || "Yuboriladigan davlatlar"],
              ["contact", t("contact")],
            ].map(([id, label]) => (
              <li
                key={id}
                onClick={() => handleScrollTo(id)}
                className="hover:text-blue-600 cursor-pointer transition-colors"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
