import React from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

import Navbar from '../Navbar';
import HamburgerMenu from '../HamburgerMenu/index';
import CartModal from '../CartModal';

const Header = () => {
  const isCartVisible = useSelector(state => state.ui.isModalVisible);
  const isMenuVisible = useSelector(state => state.ui.isHamburgerMenuVisible);

  return (
    <div className="fixed top-0 right-0 left-0 w-full h-[4.5rem] border-b-2 border-black shadow-xl bg-primary z-[1000]">
      <AnimatePresence>{isMenuVisible && <HamburgerMenu />}</AnimatePresence>

      <AnimatePresence exitBeforeEnter>
        {isCartVisible && <CartModal />}
      </AnimatePresence>

      <Navbar />
    </div>
  );
};

export default Header;
