import { useState } from 'react';

const URL = 'https://react-http-exerc-default-rtdb.firebaseio.com/';

const useSignup = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [receivedData, setReceivedData] = useState(null);

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
          return res.json();
        } else {
          setIsError(true);
        }
      })
      .then(data => setReceivedData(data))
      .catch(err => setIsError(true));
  };

  return {
    isError,
    isLoading,
    setIsLoading,
    sendData,
    setIsError,
    receivedData,
  };
};

export default useSignup;
