/*
 *
 * Title: Dashboard
 * Description: Dashboard will contain all the features
 * Author: Shah Arafat
 *
 */
import React from 'react';
import { DashboardQuerySection, Navbar } from '../components';

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <section className="container-area h-min-nav grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 bg-antiFlashWhite dark:bg-wetEsphalt">
        <div className="col-span-1 md:col-span-1 lg:col-span-2 xl:col-span-2 p-4 my-4 bg-white dark:bg-midnightBlue rounded-sm shadow-md ">
          <DashboardQuerySection />
          hello
        </div>
        <div className="self-stretch col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 p-4 my-4 bg-white dark:bg-midnightBlue shadow-md">
          helly
        </div>
      </section>
    </>
  );
};

export default Dashboard;
