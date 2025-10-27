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
            duration: 800,
            once: true,
        });
    }, []);

    const countryKeys = [
        "england",
        "europe",
        "canada",
        "slovakia",
        "latvia",
        "lithuania",
        "bulgaria",
        "estonia",
        "germany",
    ];

    function getFlagCode(key) {
        const codes = {
            england: "gb",
            europe: "eu",
            canada: "ca",
            slovakia: "sk",
            latvia: "lv",
            lithuania: "lt",
            bulgaria: "bg",
            estonia: "ee",
            germany: "de",
        };
        return codes[key] || "un";
    }

    const countries = countryKeys.map((key) => ({
        name: t(`countries.${key}`),
        img: `https://flagcdn.com/w640/${getFlagCode(key)}.png`,
    }));

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 800,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0",
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
                <h2
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
                    data-aos="fade-down"
                >
                    {t("our_destinations") || "Biz yuboradigan davlatlar"}
                </h2>

                <Slider {...settings}>
                    {countries.map((c, i) => (
                        <div
                            key={i}
                            className="px-3"
                            data-aos="zoom-in"
                            data-aos-delay={i * 100}
                        >
                            <div className="flex items-center justify-center">
                                <img
                                    src={c.img}
                                    alt={c.name}
                                    className="w-48 h-32 md:w-56 md:h-36 object-cover rounded-xl shadow-md hover:shadow-2xl hover:scale-110 transition-all duration-500 border border-gray-200"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Destinations;
