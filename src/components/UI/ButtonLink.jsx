import React from 'react';
import { Link } from 'react-router-dom';

const ButtonLink = ({ text, path }) => {
  return (
    <Link
      to={path}
      className="bg-white text-black p-5 border-black border-3 mt-10"
    >
      {text}
    </Link>
  );
};

export default ButtonLink;
