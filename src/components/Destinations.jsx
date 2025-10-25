import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Destinations = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({
            duration: 800, // animatsiya davomiyligi
            once: true, // faqat bir marta ishlasin
        });
    }, []);

    const countries = [
        { name: t("countries.england"), img: "https://flagcdn.com/w320/gb.png" },
        { name: t("countries.europe"), img: "https://flagcdn.com/w320/eu.png" },
        { name: t("countries.canada"), img: "https://flagcdn.com/w320/ca.png" },
        { name: t("countries.slovakia"), img: "https://flagcdn.com/w320/sk.png" },
        { name: t("countries.latvia"), img: "https://flagcdn.com/w320/lv.png" },
        { name: t("countries.lithuania"), img: "https://flagcdn.com/w320/lt.png" },
        { name: t("countries.bulgaria"), img: "https://flagcdn.com/w320/bg.png" },
        { name: t("countries.estonia"), img: "https://flagcdn.com/w320/ee.png" },
        { name: t("countries.germany"), img: "https://flagcdn.com/w320/de.png" },
    ];

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 800,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 4 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 480, settings: { slidesToShow: 2 } },
        ],
    };

    return (
        <section
            id="destinations"
            className="py-20 bg-gradient-to-b from-blue-50 to-white"
            data-aos="fade-up"
        >
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" data-aos="fade-down">
                    {t("our_destinations") || "Biz yuboradigan davlatlar"}
                </h2>
                <p className="text-gray-600 mb-10" data-aos="fade-up" data-aos-delay="200">
                    {t("destinations_description") ||
                        "Biz ishchi kuchini yuqori talabga ega bo‘lgan davlatlarga yuboramiz."}
                </p>

                <Slider {...settings}>
                    {countries.map((c, i) => (
                        <div key={i} className="p-4" data-aos="zoom-in" data-aos-delay={i * 100}>
                            <div className="bg-gray-50 shadow-md rounded-xl overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center">
                                <img
                                    src={c.img}
                                    alt={c.name}
                                    className="w-28 h-20 object-cover rounded-lg"
                                />
                                <h3 className="text-lg font-semibold mt-3 text-gray-800">
                                    {c.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Destinations;
