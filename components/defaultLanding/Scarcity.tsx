import React from 'react';
import CTAButton from './CTAButton';
import { useTranslation } from 'next-i18next';

const Scarcity = () => {
  const { t } = useTranslation('common');

  return (
    <section
      className="bg-white dark:bg-gray-900 text-center flex
        justify-center items-center
      "
    >
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            {t('scarcity-title')}
          </h2>
          <div
            className="flex 
            justify-center align-center p-4"
          >
            <img
              src="/img/home/eng-team.svg"
              alt="working team "
              width={500}
              height={500}
            />
          </div>

          <p className="mb-8 font-light">{t('scarcity-description')}</p>

          <CTAButton text="Alright, I’m In. Show Me the Stuff!" />
        </div>
      </div>
    </section>
  );
};

export default Scarcity;
