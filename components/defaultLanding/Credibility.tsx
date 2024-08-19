import React from 'react';
import { useTranslation } from 'next-i18next';
import CTAButton from './CTAButton';

const Credibility = () => {
  const { t } = useTranslation('common');

  return (
    <section className="bg-white dark:bg-gray-900 text-center flex justify-center items-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-6 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            <span
              style={{
                color: '#fe3146ff',
              }}
              className="font-extrabold"
            >
              {t('credibility-title-1')}
            </span>{' '}
            {t('credibility-title-2')}
          </h2>
          <p className="mb-4 ">{t('credibility-description-1')}</p>
          <p className="mb-4 font-bold text-black">
            {t('credibility-description-2')}
          </p>
          <p className="mb-8 ">{t('credibility-description-3')}</p>
        </div>
        <CTAButton text="Alright, I’m In. Show Me the Stuff!" />
      </div>
    </section>
  );
};

export default Credibility;
