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

const Editor = ({ note, setNote }) => {
  // this formats option of toolbar
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      ['code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link'],
      ['clean'],
    ],
  };

  // formats and this options will work
  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'code-block',
    'list',
    'bullet',
    'indent',
    'link',
  ];
  console.log(note);

  return (
    <>
      <ReactQuill
        value={note}
        onChange={setNote}
        theme="snow"
        className="bg-antiFlashWhite h-80 mt-4 border-none"
        modules={modules}
        formats={formats}
      />
    </>
  );
};

export default Editor;
