import { type ReactElement } from 'react';
import { useTranslation } from 'next-i18next';
import type { NextPageWithLayout } from 'types';
import { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import env from '@/lib/env';
import Head from 'next/head';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/defaultLanding/HeroSection';
import TomStory from '@/components/defaultLanding/TomStory';
import Credibility from '@/components/defaultLanding/Credibility';
import ExcelProve from '@/components/defaultLanding/ExcelProve';
import Benefits from '@/components/defaultLanding/Benefits';
import LandingCTA from '@/components/defaultLanding/LandingCTA';
import Scarcity from '@/components/defaultLanding/Scarcity';

const Home: NextPageWithLayout = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('homepage-title')}</title>
      </Head>

      <Navbar />
      {/* -------- hero attention ------------  */}

      <div className="container mx-auto space-y-14">
        <HeroSection />

        {/* ------- info interest -----  */}
        <TomStory />

        {/* -------- credibility  --------------  */}

        <Credibility />

        {/*---------- prove  -------  */}
        <ExcelProve />

        {/* ------ benefits  ----------- */}
        <Benefits />

        {/* --------- scarcity  ----------------  */}
        <Scarcity />

        {/* ----------- social proof  -----------------  */}

        {/* ---------------------------- authority  -------------------------------  */}

        {/* ---------------------------- guarantee  -------------------------------  */}

        {/* ---------- action  ------  */}
        <LandingCTA />

        {/* ---------------------------- warn  -------------------------------  */}

        {/* ---------------------------- now  -------------------------------  */}
      </div>
      <Footer />
    </>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  if (env.hideLandingPage) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: true,
      },
    };
  }

  const { locale } = context;

  return {
    props: {
      ...(locale ? await serverSideTranslations(locale, ['common']) : {}),
    },
  };
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default Home;
