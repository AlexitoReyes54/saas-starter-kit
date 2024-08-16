import React from 'react';
import { Link } from 'react-daisyui';
import { useTranslation } from 'next-i18next';
import { sendGAEvent } from '@next/third-parties/google';

interface BlogRedirectCtaProps {
  slug: string;
}

function BlogRedirectCta({ slug }: BlogRedirectCtaProps): React.ReactElement {
  const { t } = useTranslation('common');

  const handleClick = (slug: string) => {
    sendGAEvent({ event: 'blog_cta_button_click', value: slug || 'unknown' });
  };

  return (
    <div
      className="flex items-center justify-center 
         text-center p-4 mt-8 rounded-md bg-base-700
         flex-col border-2 border-base-500 mb-4"
    >
      <h2 className="text-2xl font-bold mb-4">
        {t('bug_bash_4x_more_efficiently')}
      </h2>
      <p>{t('start_bug_bashing_with_agile_approach')}</p>

      <Link
        href="/"
        type="button"
        className="btn btn-outline mt-4"
        onClick={() => handleClick(slug)}
      >
        {t('lets_get_started')}
      </Link>
    </div>
  );
}

export default BlogRedirectCta;
