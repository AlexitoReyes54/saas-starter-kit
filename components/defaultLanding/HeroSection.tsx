import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const HeroSection = () => {
  const { t } = useTranslation('common');
  
  return (
    <div className="hero py-52">
      <div className="hero-content text-center">
        <div className="max-w-7xl">
          <h1 className="text-5xl font-bold"> {t('navbar-title')}</h1>
          <p className="py-6 text-2xl font-normal">
            {t('hero-subtitle')}
          </p>
          <div className="flex items-center justify-center gap-2 ">
            <Link
              href="/"
              className="btn btn-primary px-8 no-underline"
            >
              {t('hero-primary-btn')}
            </Link>
            <Link
              href="/blog"
              className="btn btn-outline px-8"
            >
              {t('hero-secundary-btn')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};



export default HeroSection;
