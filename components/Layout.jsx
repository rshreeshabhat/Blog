import React from 'react';
import Header from './Navbar';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
