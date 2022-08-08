import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import NotFound from './pages/NotFound';

import ScrollToTop from './helpers/ScrollToTop';
import Layout from './components/Layout';

import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from './store/cartSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      cartActions.setCart(JSON.parse(localStorage.getItem('cartItems')))
    );
  }, []);

  return (
    <Layout>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollToTop>
    </Layout>
  );
}

export default App;
