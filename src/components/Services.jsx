import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Briefcase, Users, MessageSquare, Globe } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Briefcase className="w-10 h-10 text-blue-600" />,
      title: t("service_card1_title"),
      desc: t("service_card1_desc"),
    },
    {
      icon: <Users className="w-10 h-10 text-blue-600" />,
      title: t("service_card2_title"),
      desc: t("service_card2_desc"),
    },
    {
      icon: <MessageSquare className="w-10 h-10 text-blue-600" />,
      title: t("service_card3_title"),
      desc: t("service_card3_desc"),
    },
    {
      icon: <Globe className="w-10 h-10 text-blue-600" />,
      title: t("service_card4_title"),
      desc: t("service_card4_desc"),
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6" data-aos="fade-up">
          {t("services_title")}
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">
          {t("services_text")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={200 + index * 100} 
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
