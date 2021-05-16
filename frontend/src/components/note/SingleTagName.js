/*
 *
 * Title: Single Tag name
 * Description: Tag name to show on note card
 * Author: Shah Arafat
 * Date: 11-05-2021
 *
 */
import React from 'react';

const SingleTagName = ({ tag }) => {
  return (
    <span className="grid place-items-center font-semibold px-3 py-1 mt-1 rounded-full mr-2 bg-antiFlashWhite ">
      {tag}
    </span>
  );
};

export default SingleTagName;
