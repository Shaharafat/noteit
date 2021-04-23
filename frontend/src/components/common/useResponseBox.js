/*
 *
 * Title: Response Box hook
 * Description: Prints response of requests as notification
 * Author: Shah Arafat
 * Date: 22-04-2021
 *
 */
import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const ResponseBox = () => {
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // sets response data
  const configureMessageBox = (setSuccess, message) => {
    setMessage(message);
    setIsSuccess(setSuccess);
  };

  useEffect(() => {
    // remove message automatically after 5 seconds
    if (message) {
      setTimeout(() => {
        setMessage('');
      }, 5000);
    }
  }, [message]);

  // message box
  let MessageBox = () =>
    message && (
      <div
        className={`flex justify-between items-center mt-2 py-3 px-2 rounded-sm ring-2 ${
          isSuccess ? 'bg-green-300 ring-green-200' : 'bg-red-300 ring-red-200'
        } `}
      >
        <h1 className={`text-md font-semibold ${isSuccess ? 'text-green-700' : 'text-red-700'}`}>
          {message}
        </h1>
        <FaTimes
          onClick={() => setMessage('')}
          className={`inline-block ${isSuccess ? 'text-green-700' : 'text-red-700'}`}
        />
      </div>
    );

  return { MessageBox, configureMessageBox };
};

export default ResponseBox;
