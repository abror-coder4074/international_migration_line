import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

const Team = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: t("director_name"),
      role: t("director"),
      phone: "+998 97 920 70 71",
    },
    {
      name: t("hr_specialist_name"),
      role: t("hr_specialist"),
      phone: "+998 90 100 50 05",
    },
    {
      name: t("migration_expert_name"),
      role: t("migration_expert"),
      phone: "+998 99 773 29 99",
    },
    {
      name: t("consultant_name"),
      role: t("consultant"),
      phone: "+998 99 123 70 70",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="team">
      <div className="max-w-5xl mx-auto px-4">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-gray-800 tracking-wide"
          data-aos="fade-up"
        >
          {t("our_team")}
        </h2>

        <div className="relative border-l-4 border-blue-600 pl-6 md:pl-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="mb-10 relative group transition-transform duration-300 hover:translate-x-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="absolute -left-3 top-3 w-5 h-5 bg-blue-600 rounded-full shadow-md group-hover:scale-125 transition-transform"></div>

              <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-2xl transition-all">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-blue-600 text-sm uppercase tracking-wide font-medium mb-1">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm font-medium">{member.phone}</p>
              </div>

              {index !== teamMembers.length - 1 && (
                <div className="absolute left-[-2px] top-20 w-[2px] h-10 bg-blue-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
