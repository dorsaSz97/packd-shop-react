import React, { useRef, useState } from 'react';

import ProductSlider from '../Products/ProductSlider';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cartSlice';
const Product = ({ product }) => {
  const quantityInputRef = useRef();
  console.log(product);
  const dispatch = useDispatch();
  const [qttValue, setQttValue] = useState(1);
  const addItemHandler = e => {
    e.preventDefault();
    dispatch(
      cartActions.addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: +quantityInputRef.current.value,
      })
    );
  };

  const inputChangeHandler = e => {
    setQttValue(+e.target.value);
  };

  return (
    <section>
      <ProductSlider images={product.images} />

      <div>
        <h2>{product.name}</h2>
        <span>{product.price}</span>
        <ul>
          {product.ingredients.map(ing => {
            return <li key={Math.random()}>{ing}</li>;
          })}
        </ul>
        <h3>Quantity</h3>
        <form>
          <div className="form-control">
            <button type="button">-</button>
            <input
              type="text"
              name=""
              id=""
              ref={quantityInputRef}
              value={qttValue}
              onChange={inputChangeHandler}
            />
            <button type="button">+</button>
          </div>
          <button
            onClick={addItemHandler}
            className="inline-block py-4 px-11 mt-5 border-[3px] border-black text-[0.84rem] uppercase font-bold text-black bg-white hover:bg-black hover:text-white transition-all ease-in-out"
          >
            Add to cart
          </button>
        </form>
        <p>{product.description}</p>
      </div>
    </section>
  );
};

export default Product;
