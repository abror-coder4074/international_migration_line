import React from "react";
import { useTranslation } from "react-i18next";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const { t } = useTranslation();

  const phone1 = "+998888720009";
  const phone2 = "+998971234567";
  const displayPhone1 = "+998 88 872 00 09";
  const displayPhone2 = "+998 90 100 50 05";
  const email = "internationmigrationxba@gmail.com";

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          {t("contact_us") || "Biz bilan bog‘laning"}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <Phone className="text-blue-600 mb-3" size={28} />
              <h4 className="text-lg font-semibold text-gray-800 mb-1">
                {t("phone") || "Telefon"}
              </h4>
              <div className="flex flex-col">
                <a
                  href={`tel:${phone1}`}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  {displayPhone1}
                </a>
                <a
                  href={`tel:${phone2}`}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  {displayPhone2}
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <Mail className="text-blue-600 mb-3" size={28} />
              <h4 className="text-lg font-semibold text-gray-800 mb-1">
                {t("email") || "Elektron pochta"}
              </h4>
              <a
                href={`mailto:${email}`}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium break-words"
              >
                {email}
              </a>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <MapPin className="text-blue-600 mb-3" size={28} />
              <h4 className="text-lg font-semibold text-gray-800 mb-1">
                {"Manzil"}
              </h4>
              <p className="text-gray-700 font-medium">
                {t("address") || "Samarqand viloyati, Mirsaid Baraka"}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49162.398065499685!2d66.90423713623883!3d39.63508652455152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d1f49cf673b31%3A0x9cf645e30cb70cf0!2smirsaid%20baraka!5e0!3m2!1sru!2s!4v1761386572380!5m2!1sru!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="International Migration Contact Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
