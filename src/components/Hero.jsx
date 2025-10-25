import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const { t } = useTranslation();
  const [scale, setScale] = useState(1);
  const [scrolling, setScrolling] = useState(false);

  const backgroundImage =
    "https://img.freepik.com/free-vector/queue-immigrants-standing-holding-luggage-waiting-departure-airport-group-tourists-with-globe-map-pointers-destination-line-background-travel-immigration-concept_74855-10142.jpg?semt=ais_hybrid&w=740&q=80";

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolling(true);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrolling) return;

    const interval = setInterval(() => {
      setScale((prev) => {
        if (prev >= 1.05) return 1.05;
        return +(prev + 0.0005).toFixed(4);
      });
    }, 16);

    return () => clearInterval(interval);
  }, [scrolling]);

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        transform: `scale(${scale})`,
        transition: "transform 0.2s linear",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1
            data-aos="fade-up"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg"
          >
            {t("hero_title")}
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg sm:text-xl md:text-2xl text-white/90"
          >
            {t("hero_subtitle")}
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4"
          >
            <a
              href="#about"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white text-blue-700 font-semibold shadow-lg transform transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/30"
            >
              <span>{t("hero_cta")}</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-white text-white font-medium bg-white/10 hover:bg-white/20 transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/20"
            >
              <span>{t("hero_contact")}</span>
            </a>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-8 text-lg font-semibold text-white"
          >
            <div className="flex flex-col items-center">
              <span className="text-4xl font-extrabold">
                <CountUp end={10} duration={3} />+
              </span>
              <span className="text-white/80">{t("hero_stat_1")}</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-4xl font-extrabold">
                <CountUp end={5000} duration={3} />+
              </span>
              <span className="text-white/80">{t("hero_stat_2")}</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-4xl font-extrabold">🌍</span>
              <span className="text-white/80">{t("hero_stat_3")}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
