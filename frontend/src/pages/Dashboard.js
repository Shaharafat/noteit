/*
 *
 * Title: Dashboard
 * Description: Dashboard will contain all the features
 * Author: Shah Arafat
 *
 */
import React from 'react';
import { Navbar, NotesList } from '../components';
import DashboardRightSection from '../components/DashboardRightSection';

const Dashboard = () => {
  return (
    <>
      <section className="grid grid-cols-12 ">
        <div className="col-span-3 lg:col-span-2">
          <Navbar />
        </div>
        <div className="col-span-4 lg:col-span-4">
          <NotesList />
        </div>
        <div className="col-span-5 lg:col-span-6">
          <DashboardRightSection />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
