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
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          {t("contact_us")}
        </h2>

        <div className="flex flex-col md:flex-row justify-center flex-wrap gap-10 mb-10 items-center">
          <div className="flex items-center gap-3 text-gray-700">
            <Phone className="text-blue-600" size={22} />
            <div className="flex flex-col text-left">
              <a
                href={`tel:${phone1}`}
                aria-label={`Call ${displayPhone1}`}
                className="text-gray-800 hover:text-blue-600 font-medium"
              >
                {displayPhone1}
              </a>
              <a
                href={`tel:${phone2}`}
                aria-label={`Call ${displayPhone2}`}
                className="text-gray-800 hover:text-blue-600 font-medium"
              >
                {displayPhone2}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <Mail className="text-blue-600" size={22} />
            <a
              href={`mailto:${email}`}
              aria-label={`Email ${email}`}
              className="text-gray-800 hover:text-blue-600 font-medium"
            >
              {email}
            </a>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <MapPin className="text-blue-600" size={22} />
            <p className="text-gray-800 font-medium">{t("address")}</p>
          </div>
        </div>

         <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg border">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49162.398065499685!2d66.90423713623883!3d39.63508652455152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d1f49cf673b31%3A0x9cf645e30cb70cf0!2smirsaid%20baraka!5e0!3m2!1sru!2s!4v1761386572380!5m2!1sru!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowfullscreen="" 
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
