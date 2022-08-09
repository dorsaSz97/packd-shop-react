import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="py-10 px-4 h-full font-radial">
      <h2 className="mb-4 font-pp text-5xl tracking-wide font-bold text-center lg:text-7xl">
        PAGE NOT FOUND
      </h2>
      <p className="text-[1rem] text-center">
        The page you were looking for does not exist.
      </p>
      <Link className="inline-block mt-3 w-full text-center" to="/home">
        Go back
      </Link>
    </section>
  );
};

export default NotFound;
