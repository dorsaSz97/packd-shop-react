import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer/Footer';

import About from '../../pages/About';
import Home from '../../pages/Home';
import Products from '../../pages/Products';
import Product from '../../pages/Product';

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default Layout;
