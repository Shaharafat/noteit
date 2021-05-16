/*
 *
 * Title: Homepage
 * Description: Homepage
 * Author: Shah Arafat
 * Date: 21-04-2021
 *
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { HomeLeftPanel, HomeRightPanel } from '../components';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Noteit</title>
      </Helmet>

      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <div className="bg-sourLemon px-3 grid place-items-center col-span-1 lg:col-span-2 border-r-0 md:border-r-4 border-electromagnatic ">
          <HomeLeftPanel />
        </div>

        <div className="bg-antiFlashWhite px-3">
          <HomeRightPanel />
        </div>
      </section>
    </>
  );
};

export default Home;
