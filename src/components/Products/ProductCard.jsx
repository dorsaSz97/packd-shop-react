import React from 'react';
import { Link } from 'react-router-dom';
import ButtonLink from '../UI/ButtonLink';

const ProductCard = ({ name, price, thumbnail, id }) => {
  return (
    <Link to={id}>
      <figure>
        <img src={thumbnail} alt={name} />
      </figure>
      <h3>{name}</h3>
      <span>{price}</span>
    </Link>
  );
};

export default ProductCard;
