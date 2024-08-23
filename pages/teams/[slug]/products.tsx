import { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { NextPageWithLayout } from 'types';
import { useTranslation } from 'next-i18next';
import { Button, Link } from 'react-daisyui';
import useTeam from 'hooks/useTeam';

const Products: NextPageWithLayout = () => {
  const { t } = useTranslation('common');
  const { team } = useTeam();

  return (
    <div className="p-3">
      <Link href={`/teams/${team?.slug}/create-bug-bash`}>
        <Button>Crear Bug Bash</Button>
      </Link>
      <p className="text-sm">{t('product-placeholder')}</p>
      <ul>

      </ul>
    </div>
  );
};

export async function getServerSideProps({
  locale,
}: GetServerSidePropsContext) {
  return {
    props: {
      ...(locale ? await serverSideTranslations(locale, ['common']) : {}),
    },
  };
}

export default Products;
