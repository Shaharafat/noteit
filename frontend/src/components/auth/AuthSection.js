/*
 *
 * Title: Auth Routes
 * Description: Authentication related routes like login, register ...
 * Author: Shah Arafat
 * Date: 21-04-2021
 *
 */
import React from 'react';
import { Button } from '..';

const AuthSection = () => {
  return (
    <>
      <h2 className="uppercase text-2xl md:text-4xl lg:text-6xl font-barlow font-bold">
        Hey, What&apos;Up
      </h2>
      <p className="text-electromagnatic font-railway text-md md:text-lg text-center font-semibold mt-4">
        Nice to see you here.
      </p>
      <Button to="/home/login" full={true} large={true} pill={true} linkButton={true}>
        Login
      </Button>
      <Button
        to="/home/signup"
        primary={true}
        large={true}
        full={true}
        pill={true}
        linkButton={true}
      >
        Signup
      </Button>
    </>
  );
};

export default AuthSection;
