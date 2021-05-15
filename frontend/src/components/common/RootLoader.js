/*
 *
 * Title: Root loader
 * Description: This loader will be used as a root loader when loading full page
 * Author: Shah Arafat
 * Date: 15-05-2021
 *
 */
import React from 'react';
import loader from '../../icons/body-loader.svg';

const RootLoader = () => {
  return (
    <div className="min-h-screen max-h-screen grid place-items-center bg-antiFlashWhite dark:bg-wetEsphalt">
      <img src={loader} alt="loader icon" className="w-12" />
    </div>
  );
};

export default RootLoader;
