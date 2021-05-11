/*
 *
 * Title: Dashboard
 * Description: Dashboard will contain all the features
 * Author: Shah Arafat
 *
 */
import React from 'react';
import { Navbar } from '../components';

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <section className="container-area h-min-nav grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 bg-antiFlashWhite dark:bg-wetEsphalt"></section>
    </>
  );
};

export default Dashboard;
