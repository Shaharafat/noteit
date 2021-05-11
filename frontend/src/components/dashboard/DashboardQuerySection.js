/*
 *
 * Title: Dashboard query section
 * Description: Dashboard left panel.
 * Author: Shah Arafat
 * Date: 24-04-2021
 *
 */
import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { Button, SearchTags } from '..';

const DashboardQuerySection = () => {
  return (
    <div className="flex flex-col items-center">
      <Button medium="true" to={'/dashboard/addNote'} linkButton={true} full={true}>
        <FaPlusCircle className="inline-block mr-2" /> New Note
      </Button>
      {/* search */}
      <SearchTags />
    </div>
  );
};

export default DashboardQuerySection;
