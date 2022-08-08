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
    <>
      <section className="py-5 px-6">
        <ProductSlider images={product.images} />

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-5xl font-bold font-pp tracking-wider">
              {product.name}
            </h2>
            <span className="text-[1.5rem]">${product.price.toFixed(2)}</span>

            <ul>
              {product.ingredients.map(ing => {
                return (
                  <li className="capitalize" key={Math.random()}>
                    * {ing}
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="mb-2 font-bold">Quantity</h3>
            <form className="flex flex-col items-stretch justify-center">
              <div className="form-control relative">
                <button
                  type="button"
                  className="absolute  translate-y-[-50%] top-[50%] left-[5%] w-[30px] h-[30px] border-gray-500 border-2 opacity-50"
                >
                  -
                </button>
                <input
                  type="text"
                  name=""
                  id=""
                  ref={quantityInputRef}
                  value={qttValue}
                  onChange={inputChangeHandler}
                  className="w-full p-6 text-center border-black border-2"
                />
                <button
                  type="button"
                  className="absolute w-[30px] h-[30px] top-[50%] right-[5%] border-gray-500 border-2 opacity-50 translate-y-[-50%]"
                >
                  +
                </button>
              </div>
              <button
                onClick={addItemHandler}
                className="inline-block   py-4 px-11 border-[3px] border-black text-[0.84rem] uppercase font-bold text-white bg-black hover:bg-white hover:text-black transition-all ease-in-out"
              >
                Add to cart
              </button>
            </form>
          </div>

          <p className="text-[1.17rem]">{product.description}</p>
        </div>
      </section>
      <div className="bg-orange-500 text-white p-6 mt-12">
        <h3 className="tracking-wider font-bold font-pp text-[2.3rem] uppercase max-w-[65%]">
          Super nutrition made simple
        </h3>
        <ul className="flex flex-col">
          {product.directions.map((step, index) => {
            //some are arrays and some string!
            return (
              <li className="py-10" key={index}>
                {step}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Product;
