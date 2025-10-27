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
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-4 tracking-tight"
          data-aos="fade-up"
        >
          {t("our_team")}
        </h2>
        <p
          className="text-gray-500 text-center max-w-3xl mx-auto mb-12 text-lg"
          data-aos="fade-up"
          data-aos-delay="100"
        >
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 p-6 flex flex-col items-center text-center hover:-translate-y-2"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-tr from-blue-600 to-cyan-400 text-white font-bold text-xl rounded-full shadow-md mb-4 group-hover:scale-110 transition-transform">
                {member.name[0]}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{member.name}</h3>
              <p className="text-blue-600 text-sm font-medium uppercase tracking-wide mb-2">
                {member.role}
              </p>
              <p className="text-gray-500 text-sm">{member.phone}</p>

              <div className="mt-4 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
