import React from 'react';
import ProductCard from '../components/Products/ProductCard';
import productsData from '../data/productsData';

const Products = () => {
  return (
    <div>
      {productsData.map(product => {
        return (
          <ProductCard
            key={product.id}
            name={product.name}
            id={product.id}
            price={product.price}
            description={product.description}
          />
        );
      })}
    </div>
  );
};

export default Products;
