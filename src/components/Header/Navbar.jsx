import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FiShoppingCart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/uiSlice';
import CartModal from '../Cart/CartModal';
const Navbar = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const isCartModalVisible = useSelector(state => state.cartUI.isVisible);
  console.log(isCartModalVisible);
  const dispatch = useDispatch();

  const cartClickHandler = () => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <Fragment>
      {isCartModalVisible && <CartModal />}
      <nav className="flex justify-between items-center py-5 px-7 bg-[#FEF9EF] text-lg">
        <h1 className="uppercase font-bold text-3xl">pack'd</h1>
        <ul className="flex gap-20">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </ul>

        <button onClick={cartClickHandler}>
          <IconContext.Provider value={{ className: 'text-2xl' }}>
            <div>
              <div className="badge">{totalQuantity}</div>
              <FiShoppingCart />
            </div>
          </IconContext.Provider>
        </button>
      </nav>
    </Fragment>
  );
};

export default Navbar;
