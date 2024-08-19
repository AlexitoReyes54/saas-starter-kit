import React from 'react';
import { useTranslation } from 'next-i18next';

const Benefits = () => {
  const { t } = useTranslation('common');
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white ">
                {t('benefits-title')}
              </h2>

              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    {t('benefit-1')}
                  </dt>
                  <dd className="inline">{t('benefit-1-description')}</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    {t('benefit-2')}
                  </dt>
                  <dd className="inline">{t('benefit-2-description')}</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    {t('benefit-3')}
                  </dt>
                  <dd className="inline">{t('benefit-3-description')}</dd>
                </div>
              </dl>
            </div>
          </div>
          <img
            src="/img/home/iteration.svg"
            alt="scrum board"
            width={500}
            height={500}
            className="mt"
          />
        </div>
      </div>
    </div>
  );
};
export default Benefits;
