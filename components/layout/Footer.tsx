import React from "react";
import { useTranslation } from 'next-i18next';


const Footer = () => {
    const { t } = useTranslation("common");
    return (
        <footer className="footer footer-center  w-full p-4 bg-slate-900 text-white">
        <div className="text-center">
          <p>
            {t("footer-love-message")}
          </p>
          {t("footer-copyright")}
        </div>
      </footer>
    );
    }

    export default Footer;