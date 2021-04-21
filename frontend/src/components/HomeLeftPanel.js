/*
 *
 * Title: Home left panel
 * Description: Home left panel
 * Author: Shah Arafat
 * Date: 22-04-2021
 *
 */
import React from 'react';
import logo from '../icons/noteitlogo.png';

const HomeLeftPanel = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        {/* logo */}
        <div className="flex items-center">
          <img src={logo} alt="noteit logo" className="mr-2 w-20" />
          <h1 className="font-barlow font-bold text-electromagnatic text-3xl md:text-4xl lg:text-5xl ">
            Noteit
          </h1>
        </div>
        {/* subtitle */}
        <p className="text-electromagnatic font-railway text-md md:text-lg text-center font-semibold mt-4">
          Fast | Easy to use | Access from anywhere
        </p>
      </div>
    </>
  );
};

export default HomeLeftPanel;
