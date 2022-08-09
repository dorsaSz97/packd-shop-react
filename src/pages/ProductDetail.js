import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Product from '../components/Product';
import NotFound from './NotFound';

import productsData from '../data/productsData';

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // ex. smoothie4e
  const currProductIndex = productsData.findIndex(product => product.id === id);
  const currProduct = productsData[currProductIndex];

  const goBack = () => {
    navigate(-1);
  };

  // the manually entered url is wrong / no product with that id is found
  if (!currProduct) {
    return <NotFound />;
  }

  return (
    <section className="py-10 px-4 font-radial">
      <button className="text-[1.1rem]" onClick={goBack}>
        &lt; Back
      </button>

      <Product product={currProduct} />
    </section>
  );
};

export default ProductDetail;
