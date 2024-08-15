import React from 'react';
import { Link } from 'react-daisyui';

const BlogRedirectCta = () => {
  return (
    <div
      className="flex items-center justify-center 
         text-center p-4 mt-8 rounded-md bg-base-700
         flex-col border-2 border-base-500 mb-4"
    >
      <h2 className="text-2xl font-bold mb-4">
        Bug Bash 4X times more efficiently
      </h2>
      <p>Start bug bashing with an Agile approach</p>
      <Link type="button" className="btn btn-outline mt-4">
        Let,s get started
      </Link>
    </div>
  );
};

export default BlogRedirectCta;
