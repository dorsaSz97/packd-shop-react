import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IconContext } from 'react-icons';
import { FiShoppingCart, FiMenu } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

import { uiActions } from '../../store/uiSlice';
import CartModal from '../Cart/CartModal';
import visibilityAnimation from '../../animations/animations';
const Header = () => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const isCartModalVisible = useSelector(state => state.cartUI.isVisible);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const cartClickHandler = () => {
    dispatch(uiActions.toggleCart());
  };

  const menuClickHandler = () => {
    setIsMenuVisible(prev => !prev);
  };
  return (
    <Fragment>
      <AnimatePresence>
        {isMenuVisible && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit={{
              transform: 'translateY(-100%) translateX(-50%)',
              opacity: 0,
            }}
            variants={visibilityAnimation}
            transition={{
              type: 'spring',
              bounce: 0.35,
              mass: 0.07,
              duration: 0.4,
            }}
            className="absolute top-[8%] left-[50%] z-[99] p-5 w-[90%] bg-[#FEF9EF]"
          >
            <motion.ul className="flex-col flex bg-[#f8f3e9] p-5 gap-3">
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  delay: 1 * 1,
                  duration: 1,
                }}
                href=""
              >
                hi
              </motion.a>
              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  delay: 1 * 2,
                  duration: 1,
                }}
                href=""
              >
                there
              </motion.a>

              {/* <Link className="px-4 py-2" to="/">
                Home
              </Link>
              <Link className="px-4 py-2" to="/products">
                Products
              </Link>
              <Link className="px-4 py-2" to="/about">
                About
              </Link> */}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* {isCartModalVisible && <CartModal />} */}
      <nav className=" z-[100] fixed top-0 right-0 left-0 flex justify-between items-center py-5 px-7 bg-[#FEF9EF] text-lg">
        <Link to="/" className="inline-block">
          <h1 className="text-3xl font-bold tracking-tighter">PACKd</h1>
        </Link>
        <ul className="md:flex gap-20 hidden ">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </ul>

        <div className="flex gap-5">
          <IconContext.Provider
            value={{
              size: '1.7rem',
              className: 'cursor-pointer  icon-stroke',
            }}
          >
            <button className="relative" onClick={cartClickHandler}>
              <div>
                {totalQuantity !== 0 && (
                  <span className="absolute right-[-10px] top-[-12px] bg-black text-white text-sm w-5 h-5 flex justify-center items-center rounded-full">
                    {totalQuantity}
                  </span>
                )}
                <FiShoppingCart />
              </div>
            </button>
          </IconContext.Provider>

          <IconContext.Provider
            value={{ size: '1.7rem', className: ' cursor-pointer icon-stroke' }}
          >
            <button className="relative" onClick={menuClickHandler}>
              <FiMenu />
            </button>
          </IconContext.Provider>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
