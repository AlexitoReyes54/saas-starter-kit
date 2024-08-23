import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });

interface RichTextInputProps {
  value: string;
  label: string;
  onChange: (value: string) => void;
}
const RichTextInput = (props: RichTextInputProps) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link'],
    ],
  };

  return (
    <>
      <label className="label">{props.label}</label>
      <QuillEditor
        modules={modules}
        value={props.value}
        onChange={(value) => {
          props.onChange(value);
        }}
        placeholder="Provide context for your team"
      />
    </>
  );
};

export default RichTextInput;
