import React from 'react';
import { useTranslation } from 'next-i18next';

const Footer = () => {
  const { t } = useTranslation('common');
  return (
    <footer className="p-4  md:p-8 lg:p-10 bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl text-center">
        <p className="my-6 text-gray-500 dark:text-gray-400">
          {t('homepage-title')}
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-white">
          <li>
            <a href="/blog" className="mr-4 hover:underline md:mr-6">
              {t('blog')}
            </a>
          </li>
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6">
              {t('home')}
            </a>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          {t('footer-copyright')}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
