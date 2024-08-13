import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
// create new component

function Navbar() {
  const { t } = useTranslation('common');

  return (
    <div className="navbar bg-base-100 px-0 sm:px-1">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl normal-case">
          {t('navbar-title')}
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal flex items-center gap-2 sm:gap-4"></ul>
      </div>
    </div>
  );
}

export default Navbar;
