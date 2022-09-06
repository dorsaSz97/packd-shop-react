import React, { Fragment, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import { uiActions } from '../../store/uiSlice';
import { visibilityAnimation } from '../../animations/animations';
import QuantityForm from '../QuantityForm/index';

const CartModalContent = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalPrice = useSelector(state => state.cart.totalPrice);

  // const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState();

  useEffect(() => {
    if (cartItems.length > 0) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }, [cartItems]);

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={visibilityAnimation}
        className={`fixed flex items-center justify-center p-3 md:p-6 w-screen h-screen z-[10000]`}
      >
        <motion.div className="flex flex-col gap-10 p-6 w-[95%] md:w-[80%] lg:w-[50%] h-[90vh] bg-primary font-radial text-dark">
          <button
            className="self-end uppercase text-[1rem] tracking-wide cursor-pointer"
            onClick={() => dispatch(uiActions.toggleModal())}
          >
            Close
          </button>

          {isEmpty && (
            <div className="flex items-center justify-center">
              <p className="font-pp font-bold text-2xl tracking-wide">
                Your cart is empty :({' '}
              </p>
            </div>
          )}
          {!isEmpty && (
            <>
              <ul className="flex flex-col items-center gap-4 overflow-y-scroll ">
                {cartItems.map(item => {
                  return (
                    <li
                      key={item.id}
                      className="flex items-center justify-between gap-5"
                    >
                      <img
                        src={item.thumbnail}
                        alt={item.name}
                        className="mix-blend-darken w-[30%] aspect-square lg:w-[40%]"
                      />
                      <div className="w-[55%] md:w-[30%]">
                        <p className="mb-3">{item.name}</p>
                        <QuantityForm
                          isCart={true}
                          product={item}
                          readonly={true}
                        />
                      </div>
                      <span className="text-[1rem] font-bold">
                        {/* {item.quantity} x ${item.price.toFixed(2)} */}$
                        {item.price.toFixed(2)}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <div className="flex justify-between items-center mt-auto">
                <span className="font-bold text-[1.2rem]">Subtotal</span>
                <p className="font-bold text-[1.2rem]">
                  ${totalPrice.toFixed(2)}
                </p>
              </div>

              <button className="bg-orange-500 uppercase text-[1.2rem] text-white py-5">
                Order
              </button>
            </>
          )}
        </motion.div>
      </motion.div>
    </>
  );
};

const Backdrop = () => {
  const dispatch = useDispatch();
  return (
    <motion.div
      initial="hidden"
      animate={{ opacity: 0.7 }}
      exit="hidden"
      variants={visibilityAnimation}
      className="w-screen h-screen fixed top-0 left-0 bg-black opacity-70 z-[10000]"
      onClick={() => dispatch(uiActions.toggleModal())}
    ></motion.div>
  );
};

const CartModal = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop'))}
      {ReactDOM.createPortal(
        <CartModalContent />,
        document.getElementById('cart-modal')
      )}
    </Fragment>
  );
};

export default CartModal;
