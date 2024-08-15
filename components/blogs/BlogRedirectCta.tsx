import React from 'react';
import { Link } from 'react-daisyui';
import { useTranslation } from 'next-i18next';

const BlogRedirectCta = () => {
    const { t } = useTranslation("common");

  return (
    <div
      className="flex items-center justify-center 
         text-center p-4 mt-8 rounded-md bg-base-700
         flex-col border-2 border-base-500 mb-4"
    >
      <h2 className="text-2xl font-bold mb-4">
        Bug Bash 4X times more efficiently
        {t("bug_bash_4x_more_efficiently")}
        {t}
      </h2>
      <p>Start bug bashing with an Agile approach</p>
      {t("start_bug_bashing_with_agile_approach")}
      <Link type="button" className="btn btn-outline mt-4">
        Let,s get started
        {t("lets_get_started")}
      </Link>
    </div>
  );
};

export default BlogRedirectCta;
