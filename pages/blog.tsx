import React from 'react';
import { type ReactElement } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import PublicLayout from '@/components/layouts/PublicLayout';
import Head from 'next/head';
import BlogCard from '@/components/blogs/BlogCard';
import { useTranslation } from "next-i18next";
import { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BlogMarkdown  from '../interfaces/BlogMarkdown';

function BlogIndex(props: { blogs: BlogMarkdown[] }) {
  const { t } = useTranslation('common');
  return (
    <div>
      <Head>
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="container mx-auto mt-12 p-4 ">
        <h1 className="text-4xl font-bold">
          {t('blog-list-title')}
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

export const getStaticProps = async ({ locale }: GetServerSidePropsContext)=> {
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
      ...(locale ? await serverSideTranslations(locale, ['common']) : {}),
      blogs,
    },
  };
};

BlogIndex.getLayout = (page: ReactElement) => (
  <PublicLayout>{page}</PublicLayout>
);

export default BlogIndex;
