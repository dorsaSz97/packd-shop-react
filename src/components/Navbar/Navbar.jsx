import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { IconContext } from 'react-icons';
import { FiMenu } from 'react-icons/fi';

import CartButton from '../CartButton';

import { uiActions } from '../../store/uiSlice';
import HEADER_LINKS from '../../data/headerLinks';

import styles from './Navbar.module.css';

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="flex justify-between items-center relative py-5 px-7 w-full h-full bg-inherit font-radial text-lg text-dark">
      <Link to="/">
        <h1 className="font-radial text-3xl font-bold">PACK'D</h1>
      </Link>

      <ul className="hidden">
        {HEADER_LINKS.map((link, index) => {
          return (
            <Link key={index} to={link.path}>
              {link.name}
            </Link>
          );
        })}
      </ul>

      <div className="flex gap-5">
        <IconContext.Provider
          value={{
            size: '1.7rem',
            className: `cursor-pointer ${styles.stroke}`,
          }}
        >
          <CartButton />
          <button
            className="md:hidden"
            onClick={() => dispatch(uiActions.toggleMenu())}
          >
            <FiMenu />
          </button>
        </IconContext.Provider>
      </div>
    </nav>
  );
};

export default Navbar;
