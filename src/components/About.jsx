import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import about from "../../public/bckgroundimg.png";

const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        <div className="relative" data-aos="fade-right">
          <img
            src={about}
            alt="About"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
          <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-5 rounded-2xl shadow-xl text-center" data-aos="zoom-in" data-aos-delay="200">
            <p className="text-3xl font-bold">10+</p>
            <p className="text-sm">{t("about_experience")}</p>
          </div>
        </div>

        <div data-aos="fade-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            {t("about_title")}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            {t("about_text1")}
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            {t("about_text2")}
          </p>

          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3" data-aos="fade-up" data-aos-delay="100">
              <span className="text-blue-700 text-xl">✔</span>
              <span>{t("about_point1")}</span>
            </li>
            <li className="flex items-center gap-3" data-aos="fade-up" data-aos-delay="200">
              <span className="text-blue-700 text-xl">✔</span>
              <span>{t("about_point2")}</span>
            </li>
            <li className="flex items-center gap-3" data-aos="fade-up" data-aos-delay="300">
              <span className="text-blue-500 text-xl">✔</span>
              <span>{t("about_point3")}</span>
            </li>
          </ul>

          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {t("about_btn")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
