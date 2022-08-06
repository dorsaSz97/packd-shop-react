import React, { Fragment, useCallback, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

import productsData from '../data/productsData';
import ProductSlider from '../components/Products/ProductSlider';

import Product from '../components/Product';
// const quantityInputRef = useRef();

const ProductDetail = () => {
  const { id } = useParams(); //smoothie4e
  const currProductIndex = productsData.findIndex(product => product.id === id);
  const currProduct = productsData[currProductIndex];

  console.log(currProduct);
  if (!currProduct) return <p>No Product Found</p>; //TODO:create component maybe

  return (
    <Fragment>
      {/* product */}
      <Product product={currProduct} />

      {/* instructions/info */}
      {/* reecommended */}
    </Fragment>
  );
};

export default ProductDetail;
// sort (mese max)
// filter (mese dana)
// lib api mese max
//  random products
