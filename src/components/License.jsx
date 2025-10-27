import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import licenseImage from "../../public/image.jpg";
import licenseImage2 from "../../public/image2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const License = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section id="license" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
          data-aos="fade-up"
        >
          {t("license_title")}
        </h2>

        <p
          className="text-gray-600 max-w-3xl mx-auto mb-14 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {t("license_text")}
        </p>

        <div
          className="flex flex-col md:flex-row items-center justify-center gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="relative group">
            <img
              src={licenseImage}
              alt="License"
              className="rounded-2xl shadow-xl w-full max-w-md transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-all duration-300"></div>
          </div>

          <div className="relative group">
            <img
              src={licenseImage2}
              alt="License"
              className="rounded-2xl shadow-xl w-full max-w-md transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-all duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default License;
