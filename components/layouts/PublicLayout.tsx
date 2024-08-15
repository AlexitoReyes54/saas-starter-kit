import React from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

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

      <Footer />
    </div>
  );
}
