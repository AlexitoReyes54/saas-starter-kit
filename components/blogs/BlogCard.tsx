import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
  slug: string;
}

const BlogCard = (props: BlogCardProps) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href={`/blog/${props.slug}`}>
        <Image
          alt="blog image"
          className=" w-full h-64 object-cover"
          src={props.image}
          width={300}
          height={200}
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.description}
          </p>
          <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">
            {props.date}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
