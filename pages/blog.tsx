import React from 'react';
import { NextPageWithLayout } from 'types';
import { type ReactElement } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import PublicLayout from '@/components/layouts/PublicLayout';
import Head from 'next/head';
import BlogCard from '@/components/blogs/BlogCard';

interface BlogMarkdown {
    author: string;
    date: string;
    description: string;
    linkedin: string;
    slug: string;
    title: string;
    twitter: string;
    image: string;
  }

function BlogIndex(props: { blogs: BlogMarkdown[] }) {
  return (
    <div>
      <Head>
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="container mx-auto mt-12 p-4 ">
        <h1 className="text-4xl font-bold">
          Here you can find testers experiences
        </h1>
        <hr className="my-8" />

        <div className="grid grid-cols-3 gap-4">
          {props.blogs.map((blog) => (
            <BlogCard
                key={blog.slug}
                title={blog.title}
                date={blog.date}
                description={blog.description}
                image={blog.image}
                slug={blog.slug}
            />
          ))    
        }
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async ({ params })=> {
  const files = fs.readdirSync('data/blogs');
  const blogs = files.map((filename) => {
    const markdownWithMetadata = fs.readFileSync(
      path.join('data/blogs', filename),
      'utf-8'
    );
    const { data } = matter(markdownWithMetadata);
    return data;
  });

  return {
    props: {
      blogs,
    },
  };
};

BlogIndex.getLayout = (page: ReactElement) => (
  <PublicLayout>{page}</PublicLayout>
);

export default BlogIndex;
