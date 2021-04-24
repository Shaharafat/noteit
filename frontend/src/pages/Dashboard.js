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
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6"></div>
    </>
  );
};

export default Dashboard;
