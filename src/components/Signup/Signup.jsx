import React, { useRef, useState } from 'react';

import useSignup from '../../hooks/useSignup';

const Signup = () => {
  const [emailInput, setEmailInput] = useState('');
  const emailInputRef = useRef();
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const {
    isError,
    isLoading,
    setIsError,
    setIsLoading,
    sendData,
    receivedData,
  } = useSignup();

  const submitSignupHandler = e => {
    e.preventDefault();

    if (isTouched && isValid) {
      emailInputRef.current.blur();
      setEmailInput('');
      setIsLoading(true);
      sendData(emailInputRef.current.value);
    } else {
      setIsError(true);
    }
  };

  let content = 'Subscribe';
  if (receivedData) {
    content = 'Subscribed! :)';
  } else {
    if (isLoading && !isError) {
      content = 'Loading...';
    }
    if (isError) {
      content = 'Sorry!';
    }
  }

  return (
    <section className="p-10 lg:py-24">
      <h3
        className="font-pp text-[2.3rem] font-bold mb-10 text-center"
        htmlFor="email"
      >
        Want to hear more?
      </h3>
      <form
        className="flex  w-full max-w-[500px] mx-auto"
        onSubmit={submitSignupHandler}
      >
        <input
          id="email"
          value={emailInput}
          type="text"
          required
          disabled={receivedData}
          placeholder={!receivedData ? 'Enter your e-mail' : ''}
          ref={emailInputRef}
          className={`flex-1 px-5 k text-dark focus:placeholder-opacity-50 ${
            receivedData
              ? 'border-2 border-green-300 '
              : 'border-2 border-dark placeholder-dark '
          }`}
          onChange={e => {
            setEmailInput(e.target.value);
            setIsTouched(true);
            if (
              e.target.value.trim().length !== 0 &&
              e.target.value.includes('@')
            ) {
              setIsError(false);
              setIsValid(true);
            } else {
              setIsValid(false);
            }
          }}
        />
        <button
          className={`flex-1/4 p-3 bg-dark text-white  ${
            isError && 'bg-orange-500'
          } ${
            receivedData &&
            'bg-green-300 pointer-events-none cursor-not-allowed'
          }`}
        >
          {content}
        </button>
      </form>
    </section>
  );
};

export default Signup;
