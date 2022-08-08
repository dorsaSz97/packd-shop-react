import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <div className="pt-[4.5rem]">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
