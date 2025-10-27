import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Briefcase, Users, MessageSquare, Globe } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Briefcase className="w-12 h-12 transition-transform duration-300 group-hover:scale-110" />,
      title: t("service_card1_title"),
      desc: t("service_card1_desc"),
    },
    {
      icon: <Users className="w-12 h-12 transition-transform duration-300 group-hover:scale-110" />,
      title: t("service_card2_title"),
      desc: t("service_card2_desc"),
    },
    {
      icon: <MessageSquare className="w-12 h-12 transition-transform duration-300 group-hover:scale-110" />,
      title: t("service_card3_title"),
      desc: t("service_card3_desc"),
    },
    {
      icon: <Globe className="w-12 h-12 transition-transform duration-300 group-hover:scale-110" />,
      title: t("service_card4_title"),
      desc: t("service_card4_desc"),
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-50 -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          data-aos="fade-up"
        >
          {t("services_title")}
        </h2>
        <p
          className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {t("services_text")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 p-8 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="bg-blue-100 p-4 rounded-2xl group-hover:bg-white/20 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 group-hover:text-blue-100 text-sm leading-relaxed transition-colors">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
