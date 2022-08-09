import React from 'react';
import { Link } from 'react-router-dom';
import ButtonLink from '../UI/ButtonLink';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const addToCartClickHandler = () => {
    dispatch(cartActions.addItem({ ...product }));
  };
  return (
    <article className="p-5 basis-[100%] md:basis-[50%] lg:basis-[33%]">
      <Link to={`/products/${product.id}`}>
        <figure className="flex items-center justify-center">
          <img
            src={product.thumbnail}
            className="mix-blend-darken w-[400px] object-contain"
            alt={product.name}
          />
        </figure>
      </Link>
      <div className="flex flex-col items-center gap-2 justify-center">
        <h3>{product.name}</h3>
        <span>${product.price.toFixed(2)}</span>
        <button
          onClick={addToCartClickHandler}
          className="inline-block py-4 px-11 mt-5 border-[3px] border-black text-[0.84rem] uppercase font-bold text-black bg-white hover:bg-black hover:text-white transition-all ease-in-out"
        >
          Add to cart
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
