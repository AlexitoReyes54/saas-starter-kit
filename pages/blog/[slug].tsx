import React from 'react';
import { NextPageWithLayout } from 'types';
import { type ReactElement } from 'react';
import { GetStaticPaths } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import PublicLayout from '@/components/layouts/PublicLayout';

import Author from '@/components/blogs/Author';
import Head from 'next/head';
import Image from 'next/image';

interface BlogProps {
  title: string;
  date: string;
  content: string;
  image: string;
  author: string;
  linkedin: string;
  auhorImage: string;
  twiter: string;
  twiterUsername: string;
}

const Blog: NextPageWithLayout<BlogProps> = (post: BlogProps) => {
  return (
    <div>
      <Head>
        <meta name="robots" content="index, follow" />
        <title>{`${post.title}`}</title>
      </Head>

      <div className="container mx-auto mt-12 max-w-4xl p-4 ">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <p className="text-base-400">{post.date}</p>

        <Author
          name={post.author}
          socialMediaUsername={post.twiterUsername}
          avatar={post.auhorImage}
          socialMediaLink={post.twiter}
        />

        <div className="flex justify-center">
          <Image
            alt='blog image'
            src={post.image}
            className="mt-8 object-cover w-full h-96"
            width={800}
            height={400}
          />
        </div>

        <hr className="my-8" />

        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDirectory = path.join(process.cwd(), 'data/blogs');
  const filenames = fs.readdirSync(postsDirectory);
  const paths = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    return { params: { slug } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params!;
  const postsDirectory = path.join(process.cwd(), 'data/blogs');
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  const htmlContent = marked(content);

  return {
    props: {
      title: data.title,
      date: data.date,
      content: htmlContent,
      image: data.image,
      author: data.author,
      linkedin: data.linkedin,
      auhorImage: data.authorImage,
      twiter: data.twiter,
      twiterUsername: data.twiterUsername,
    },
  };
};

Blog.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Blog;
