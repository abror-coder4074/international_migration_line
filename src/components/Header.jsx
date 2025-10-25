import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Globe, Menu, X, Phone, Mail } from "lucide-react";

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
      window.location.reload();
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
      }
    }
  };

  return (
    <header className="w-full fixed top-0 z-50">
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
              className={`uppercase transition-all ${i18n.language === lang
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
        className={`transition-all duration-300 ${isScrolled
            ? "bg-white shadow-md text-gray-900"
            : "bg-transparent text-white"
          }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-2 font-bold font-serif text-xl cursor-pointer"
            onClick={() => handleScrollTo("home")}
          >
            <Globe className="text-blue-600" />
            <div>
              International <br /> Migration Line
            </div>
          </div>

          <ul className="hidden md:flex items-center gap-8 font-medium">
            <li
              onClick={() => handleScrollTo("home")}
              className="hover:text-blue-600 cursor-pointer"
            >
              {t("home")}
            </li>
            <li
              onClick={() => handleScrollTo("about")}
              className="hover:text-blue-600 cursor-pointer"
            >
              {t("about")}
            </li>
            <li
              onClick={() => handleScrollTo("services")}
              className="hover:text-blue-600 cursor-pointer"
            >
              {t("services")}
            </li>
            <li
              onClick={() => handleScrollTo("license")}
              className="hover:text-blue-600 cursor-pointer"
            >
              {t("license")}
            </li>
            <li
              onClick={() => handleScrollTo("team")}
              className="hover:text-blue-600 cursor-pointer"
            >
              {t("our_team") || "Bizning jamoa"}
            </li>
            <li
              onClick={() => handleScrollTo("destinations")}
              className="hover:text-blue-600 cursor-pointer"
            >
              {t("our_destinations") || "Yuboriladigan davlatlar"}
            </li>
            <li
              onClick={() => handleScrollTo("contact")}
              className="hover:text-blue-600 cursor-pointer"
            >
              {t("contact")}
            </li>
          </ul>


          <div className="flex items-center gap-3 md:hidden">
            <div className="flex items-center gap-2 text-sm">
              {["uz", "ru", "en"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => changeLanguage(lang)}
                  className={`uppercase ${i18n.language === lang ? "text-blue-600 font-bold" : ""
                    }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white text-gray-800 shadow-md">
            <ul className="flex flex-col items-center gap-4 py-4 font-medium">
              <li onClick={() => handleScrollTo("home")}>{t("home")}</li>
              <li onClick={() => handleScrollTo("about")}>{t("about")}</li>
              <li onClick={() => handleScrollTo("services")}>{t("services")}</li>
              <li onClick={() => handleScrollTo("license")}>{t("license")}</li>
              <li onClick={() => handleScrollTo("contact")}>{t("contact")}</li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
