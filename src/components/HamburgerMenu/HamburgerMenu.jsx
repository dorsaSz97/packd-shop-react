import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';

import { uiActions } from '../../store/uiSlice';
import HEADER_LINKS from '../../data/headerLinks';
import { menuAnimation } from '../../animations/animations';

const HamburgerMenu = () => {
  const dispatch = useDispatch();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{
        transform: 'translateY(-100%) translateX(-50%)',
        opacity: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      variants={menuAnimation}
      className="absolute top-[102.5%] left-[50%] p-5 w-[90%] shadow-xl bg-primary"
    >
      <motion.ul className="flex flex-col gap-3 p-5 bg-[#f8f3e9]">
        {HEADER_LINKS.map((link, index) => {
          return (
            <motion.li
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                delay: (index + 1) * 0.6,
                duration: 0.5,
              }}
              className="py-4"
              onClick={() => dispatch(uiActions.toggleMenu())}
            >
              <Link to={link.path} className="text-[1.05rem]">
                {link.name}
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.div>
  );
};

export default HamburgerMenu;
