import React from 'react';
import { Link } from 'react-router-dom';

const ButtonLink = ({ text, path }) => {
  return (
    <Link
      to={path}
      className="inline-block py-4 px-11 border-[3px] border-black text-[0.84rem] uppercase font-bold text-black bg-white hover:bg-black hover:text-white transition-all ease-in-out"
    >
      {text}
    </Link>
  );
};

export default ButtonLink;
