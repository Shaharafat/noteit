/*
 *
 * Title: tag manager
 * Description: tag manager
 * Author: Shah Arafat
 * Date: 27-04-2021
 *
 */
import React from 'react';

const TagManager = ({ register, errors }) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor="tags"
        className="text-electromagnatic dark:text-antiFlashWhite mt-3 font-semibold"
      >
        Tags (maximum 3)
      </label>
      <input
        type="text"
        className="px-1 py-2 mt-1 border border-gray-200 focus:outline-none"
        placeholder="Tags must be comma separated (maximum five)"
        id="tags"
        {...register('tags')}
      />
      <p className="small text-red-500">{errors.tags?.message}</p>
    </div>
  );
};

export default TagManager;
