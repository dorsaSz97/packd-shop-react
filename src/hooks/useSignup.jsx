import React, { useState } from 'react';

const URL = 'https://react-http-exerc-default-rtdb.frebaseio.com/';
const useSignup = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendData = email => {
    // send the value to the firebase
    fetch(`${URL}signups.json`, {
      method: 'POST',
      body: JSON.stringify({ email: email }),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(res => {
        if (res.ok) {
          console.log('done');
          setIsLoading(false);
        } else {
          setIsError(true);
        }
      })
      .catch(err => setIsError(true));
    // .then(data => console.log(data));
  };

  return {
    isError,
    isLoading,
    setIsLoading,
    sendData,
    setIsError,
  };
};

export default useSignup;
