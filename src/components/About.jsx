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
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div
          className="relative group"
          data-aos="fade-right"
        >
          <div className="absolute -inset-2 bg-blue-100/40 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={about}
              alt="About"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div
            className="absolute -bottom-8 -right-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-5 rounded-2xl shadow-xl text-center"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <p className="text-4xl font-extrabold">10+</p>
            <p className="text-sm uppercase tracking-wide">
              {t("about_experience")}
            </p>
          </div>
        </div>

        <div data-aos="fade-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-snug">
            {t("about_title")}
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4 text-lg">
            {t("about_text1")}
          </p>
          <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            {t("about_text2")}
          </p>

          <ul className="space-y-4 mb-10">
            <li
              className="flex items-start gap-3"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-6 h-6 flex items-center justify-center bg-blue-600 text-white rounded-full text-sm shadow-md">
                ✓
              </div>
              <span className="text-gray-700 text-base">
                {t("about_point1")}
              </span>
            </li>

            <li
              className="flex items-start gap-3"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-6 h-6 flex items-center justify-center bg-blue-600 text-white rounded-full text-sm shadow-md">
                ✓
              </div>
              <span className="text-gray-700 text-base">
                {t("about_point2")}
              </span>
            </li>

            <li
              className="flex items-start gap-3"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-6 h-6 flex items-center justify-center bg-blue-600 text-white rounded-full text-sm shadow-md">
                ✓
              </div>
              <span className="text-gray-700 text-base">
                {t("about_point3")}
              </span>
            </li>
          </ul>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
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
