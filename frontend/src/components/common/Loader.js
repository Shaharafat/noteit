/*
 *
 * Title: loader component
 * Description: Loader
 * Author: Shah Arafat
 * Date: 13-05-2021
 *
 */
import React from 'react';

const Loader = ({ loader }) => {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-wetEsphalt grid place-items-center">
      <img src={loader} className="w-12" />
    </div>
  );
};

export default Loader;
