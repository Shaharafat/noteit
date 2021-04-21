/*
 *
 * Title: Homepage
 * Description: Homepage
 * Author: Shah Arafat
 * Date: 21-04-2021
 *
 */
import React from 'react';
import { Button } from '../components';
import logo from '../icons/noteitlogo.png';

const Home = () => {
  return (
    <section className="min-h-screen grid grid-cols-1">
      {/* site intro */}
      <div className="bg-sourLemon px-3 grid place-items-center">
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
          <Button to="/login" full={true} large={true} pill={true} linkButton={true}>
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Home;
