import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const HeroSection = () => {
  const { t } = useTranslation('common');
  return (
    <div className="hero py-52">
      <div className="hero-content text-center">
        <div className="max-w-7xl">
          <h1 className="text-5xl font-bold">🚧  Working on best bug bash tool 🚧</h1>
          <p className="py-6 text-2xl font-normal">
            Make anyhing except bugs reporting invisible 🐞
          </p>
          <div className="flex items-center justify-center gap-2 ">
            <Link
              href="/"
              className="btn btn-primary px-8 no-underline"
            >
              I want to use it ! 🚀
            </Link>
            <Link
              href="/blog"
              className="btn btn-outline px-8"
            >
              Visit the blogs 📝
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};



export default HeroSection;
