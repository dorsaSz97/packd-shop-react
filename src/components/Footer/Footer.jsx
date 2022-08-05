import React from 'react';

const footerLinks = [
  {
    name: 'contact us',
    path: '/',
  },
  {
    name: 'legal stuff',
    path: '/',
  },
  {
    name: 'about us',
    path: '/',
  },
  {
    name: 'posts',
    path: '/',
  },
  {
    name: 'our shop',
    path: '/',
  },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4">
      <ul className="flex flex-col ">
        {footerLinks.map(link => {
          return (
            <li
              key={link.name}
              className="text-[14px] py-5 px-2 border-white border-b-2 uppercase"
            >
              {link.name}
            </li>
          );
        })}
      </ul>
      <p className="text-[10px] mt-20">
        © 2022 PACKD All rights reserved. PACK’D is a limited company registered
        in England and Wales company number 9005105.
      </p>
    </footer>
  );
};

export default Footer;
