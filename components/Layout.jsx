import React from 'react';
import Header from './Navbar';
import NewsletterSubscribe from './footer'

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <div className="flex flex-col">
      <NewsletterSubscribe />
    </div>
  </>
);

export default Layout;
