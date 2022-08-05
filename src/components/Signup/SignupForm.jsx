import React, { useRef, useState } from 'react';
import useSignup from '../../hooks/useSignup';

const SignupForm = () => {
  const [emailInput, setEmailInput] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const emailInputRef = useRef();
  const { isError, isLoading, setIsError, setIsLoading, sendData } =
    useSignup();

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
  return (
    <form className="flex  w-full" onSubmit={submitSignupHandler}>
      <input
        value={emailInput}
        // type="email"
        type="text"
        required
        className="form-control flex-1 bg-[#FEF9EF] focus:placeholder-opacity-50 placeholder-black px-5 border-2 border-black text-black"
        placeholder="Enter your email"
        ref={emailInputRef}
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
        className={`form-action flex-1/4 bg-black text-white p-3 ${
          isError && 'border-indigo-500 border-4'
        }`}
      >
        {isLoading && !isError ? 'Loading...' : 'Subscribe'}
      </button>
    </form>
  );
};

export default SignupForm;
