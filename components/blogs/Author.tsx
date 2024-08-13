// create compoennet

import React from 'react';

interface AuthorProps {
  name: string;
  socialMediaUsername: string;
  avatar: string;
  socialMediaLink: string;
}

const Author: React.FC<AuthorProps> = (props: AuthorProps) => {
  return (
    <a href={props.socialMediaLink}>
      <div className="flex items-center gap-4 mt-4">
        <img
          src={props.avatar}
          alt="avatar"
          className="rounded-full w-10 h-10"
        />
        <div>
          <p className="text-base-600">{props.name}</p>
          <p className="text-sm text-base-500">{props.socialMediaUsername}</p>
        </div>
      </div>
    </a>
  );
};

export default Author;
