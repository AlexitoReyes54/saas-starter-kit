import { useTranslation } from 'next-i18next';
import CTAButton from './CTAButton';

const HeroSection = () => {
  const { t } = useTranslation('common');

  return (
    <section className="bg-white dark:bg-gray-900 mt-14">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            {t('heroSection-title')}
          </h1>
          <p className="max-w-2xl mb-2 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            {t('heroSection-subtitle')}
          </p>
          <CTAButton text="Alright, I’m In. Show Me the Stuff!" />
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="/img/home/collaboration.svg"
            alt="mockup"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
