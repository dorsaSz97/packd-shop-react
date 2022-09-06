import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { cartActions } from '../../store/cartSlice';

const QuantityForm = ({ product, isCart = false, readonly = false }) => {
  const dispatch = useDispatch();
  const [qttValue, setQttValue] = useState(isCart ? product.quantity : 1);
  const qttInputRef = useRef();

  const addItemHandler = e => {
    e.preventDefault();
    let quantityValue = +qttInputRef.current.value;

    dispatch(
      cartActions.addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantityValue,
        thumbnail: product.thumbnail,
      })
    );
  };

  const qttChangeHandler = e => {
    if (isNaN(+e.target.value) || +e.target.value < 1) return;
    setQttValue(+e.target.value);
  };

  const incQtt = () => {
    if (isCart) {
      setQttValue(product.quantity + 1);
      dispatch(
        cartActions.addItem({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          thumbnail: product.thumbnail,
        })
      );
    } else {
      setQttValue(prev => prev + 1);
    }
  };
  const decQtt = () => {
    let quantityValue = +qttInputRef.current.value;
    if (quantityValue === 1) return;

    if (isCart) {
      setQttValue(product.quantity - 1);
      dispatch(cartActions.removeItem(product.id));
    } else {
      setQttValue(prev => prev - 1);
    }
  };

  return (
    <form className="flex flex-col items-stretch justify-center">
      <div className="relative">
        <button
          type="button"
          className="absolute top-[50%] left-[5%] w-[30px] h-[30px] translate-y-[-1/2] border-2 border-gray-500 opacity-40"
          onClick={decQtt}
        >
          -
        </button>
        <label htmlFor="quantity" className="inline-block mb-3 font-bold">
          Quantity
        </label>
        <input
          type="text"
          name="quantity"
          id="quantity"
          ref={qttInputRef}
          value={qttValue}
          className={`p-6 w-full border-2 ${!isCart && 'border-b-0'} ${
            readonly ? 'cursor-default' : 'cursor-text'
          } border-dark text-center`}
          onChange={qttChangeHandler}
          readOnly={readonly}
        />
        <button
          type="button"
          className="absolute top-[50%] right-[5%] w-[30px] h-[30px] translate-y-[-1/2] border-2 border-gray-500 opacity-40"
          onClick={incQtt}
        >
          +
        </button>
      </div>
      {!isCart && (
        <button
          onClick={addItemHandler}
          className="inline-block p-4 border-[3px] border-dark bg-dark text-[0.84rem] uppercase font-bold text-white transition-all ease-in-out hover:bg-white hover:text-dark "
        >
          Add to cart
        </button>
      )}
    </form>
  );
};

export default QuantityForm;
