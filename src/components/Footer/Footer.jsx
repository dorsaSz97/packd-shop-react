import React from 'react';
import { Link } from 'react-router-dom';

import FOOTER_LINKS from '../../data/footerLinks';

const Footer = () => {
  return (
    <footer className="flex flex-col justify-between gap-20 bg-dark text-white py-10 px-4">
      <ul className="flex flex-col md:flex-row ">
        {FOOTER_LINKS.map(link => {
          return (
            <Link
              key={link.name}
              to="/home"
              className="py-5 px-2 border-white border-opacity-40 border-b-[0.5px] md:border-0 text-[14px] uppercase"
            >
              {link.name}
            </Link>
          );
        })}
      </ul>
      <p className="text-[10px]">
        © 2022 PACKD All rights reserved. PACK’D is a limited company registered
        in England and Wales company number 9005105.
      </p>
    </footer>
  );
};

export default Footer;
