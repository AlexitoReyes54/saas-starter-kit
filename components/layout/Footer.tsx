import React from "react";
import { useTranslation } from 'next-i18next';


const Footer = () => {
    const { t } = useTranslation("common");
    return (
        <footer className="footer footer-center w-full p-4 bg-slate-900 text-white">
        <div className="text-center">
          <p
            className="text-base-400 font-bold text-6xl" 
          >
            {t("footer-love-message")}
          </p>
          <p
            className="text-base-400 font-bold text-4xl mt-n2" 
          >
          {t("footer-copyright")}
          </p>
        </div>
      </footer>
    );
    }

    export default Footer;
    