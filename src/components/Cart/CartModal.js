import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cartSlice';
import { uiActions } from '../../store/uiSlice';

const CartModalContent = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const cancelModalHandler = () => {
    dispatch(uiActions.toggleCart());
  };
  const additemhandler = item => {
    dispatch(cartActions.addItem(item));
  };
  const removeitemhandler = id => {
    dispatch(cartActions.removeItem(id));
  };
  return (
    <div className="absolute top-[20%] left-0 right-0 bottom-0 w-screen h-screen bg-red-300 text-2xl text-blue-900">
      <p>CartModal</p>
      <ul>
        {cartItems.map(item => {
          return (
            <li key={item.id}>
              <p>
                {item.name} ${item.price.toFixed(2)} {item.quantity}
              </p>
              <button onClick={additemhandler.bind(null, item)}>+</button>
              <button onClick={removeitemhandler.bind(null, item.id)}>-</button>
            </li>
          );
        })}
      </ul>
      <p>{totalPrice.toFixed(2)}</p>
      <button className="cursor-pointer" onClick={cancelModalHandler}>
        cancel
      </button>
    </div>
  );
};

const CartModal = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <CartModalContent />,
        document.getElementById('modal')
      )}
    </Fragment>
  );
};

export default CartModal;
