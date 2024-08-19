import React from 'react';
import { useTranslation } from 'next-i18next';

const LandingCTA = () => {
  const { t } = useTranslation('common');

  return (
    <section className=" bg-gray-900 m-5 rounded-lg shadow-lg ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 mb-12">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2
            className="
              text-white  
              mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white"
          >
            {t('landing-cta-title')}
          </h2>
          <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg text-white">
            {t('landing-cta-description')}
          </p>
          <a
            href="https://share.hsforms.com/10nQy-jM3R-ukgcwlgJon7grdcrm"
            className="btn btn-outline0"
            target="_blank">
            {t('landing-cta-button')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingCTA;
