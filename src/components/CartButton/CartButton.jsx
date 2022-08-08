import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiShoppingCart } from 'react-icons/fi';

import { uiActions } from '../../store/uiSlice';

const CartButton = () => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <button
      className="relative"
      onClick={() => dispatch(uiActions.toggleModal())}
    >
      <FiShoppingCart />
      {totalQuantity !== 0 && (
        <span className="flex justify-center items-center absolute right-[-10px] top-[-12px] w-5 h-5 rounded-full bg-dark text-sm text-white ">
          {totalQuantity}
        </span>
      )}
    </button>
  );
};

export default CartButton;
