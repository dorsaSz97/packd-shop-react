import React, { Fragment, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import { cartActions } from '../../store/cartSlice';
import { uiActions } from '../../store/uiSlice';
import { visibilityAnimation } from '../../animations/animations';

const CartModalContent = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalPrice = useSelector(state => state.cart.totalPrice);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (cartItems.length > 0) {
      setIsLoading(false);
    }
  }, [cartItems]);

  return (
    <>
      {!isLoading && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={visibilityAnimation}
          className={`fixed flex items-center justify-center  p-10 w-screen h-screen z-[10000]`}
        >
          <motion.div className="flex flex-col gap-10 p-6 w-[95%] h-[90vh] bg-primary font-radial text-dark">
            <button
              className="self-end font-light uppercase text-[1.1rem] tracking-wide cursor-pointer"
              onClick={() => dispatch(uiActions.toggleModal())}
            >
              Close
            </button>
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
                      className="mix-blend-darken w-[30%] aspect-square"
                    />
                    <div className="w-[55%]">
                      <p className="mb-3">{item.name}</p>
                      <form className="flex flex-col items-stretch justify-center">
                        <div className="form-control relative">
                          <button
                            onClick={() =>
                              dispatch(cartActions.removeItem(item.id))
                            }
                            type="button"
                            className="absolute translate-y-[-50%] top-[50%] left-[5%] w-[30px] h-[30px] border-gray-500 border-2 opacity-50"
                          >
                            -
                          </button>
                          <input
                            type="text"
                            readOnly
                            value={item.quantity}
                            className="w-full p-6 text-center border-black border-[3px] pointer-events-none"
                          />
                          <button
                            onClick={() =>
                              dispatch(
                                cartActions.addItem({ ...item, quantity: 1 })
                              )
                            }
                            type="button"
                            className="absolute w-[30px] h-[30px] top-[50%] right-[5%] border-gray-500 border-2 opacity-50 translate-y-[-50%]"
                          >
                            +
                          </button>
                        </div>
                      </form>
                    </div>
                    <span className="text-[1rem] font-bold">
                      ${item.price.toFixed(2)}
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
          </motion.div>
        </motion.div>
      )}
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
      className="w-screen h-screen absolute top-0 left-0 bg-black opacity-70 z-[10000]"
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
