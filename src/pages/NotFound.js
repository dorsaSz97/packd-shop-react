import React from 'react';

const NotFound = ({ goBack }) => {
  return (
    <section>
      <h2>404 PAGE NOT FOUND</h2>
      <p>The page you were looking for does not exist.</p>
      <button onClick={goBack}>Go back</button>
    </section>
  );
};

export default NotFound;
