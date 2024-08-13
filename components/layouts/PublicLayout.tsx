import React from 'react';
import Link from 'next/link';
import Navbar from '../layout/Navbar';

interface AccountLayoutProps {
  children: React.ReactNode;
}

export default function PublicLayout({ children }: AccountLayoutProps) {
  return (
    <div>
      <div className="container mx-auto">
        <Navbar />
        {children}
      </div>

      <footer className="footer footer-center  w-full p-4 bg-slate-900 text-white">
        <div className="text-center">
          <p>
            Copyright © { new Date().getFullYear()} -
            <a className="font-semibold" href="mailto:m.sohanemon@gmail.com">
              Alexander Elias Reyes Brazoban
            </a>
          </p>
          <p>Made with ❤️ to Users</p>
        </div>
      </footer>
    </div>
  );
}
