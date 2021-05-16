/*
 *
 * Title: note writing editor
 * Description: Note writing editor
 * Author: Shah Arafat
 * Date: 26-04-2021
 *
 */
import React from 'react';
import ReactQuill from 'react-quill';
import { formats, modules } from '../../helpers/editor';

const Editor = ({ note, setNote }) => {
  return (
    <>
      <h3 className="text-electromagnatic dark:text-antiFlashWhite mt-3 font-semibold">Note</h3>
      <ReactQuill
        value={note}
        onChange={setNote}
        theme="snow"
        className="bg-antiFlashWhite mt-1 border-none outline-none"
        modules={modules}
        formats={formats}
      />
    </>
  );
};

export default Editor;
