import type { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';
import { url } from 'inspector';

const DOMAIN = 'https://bugbashparty.tools'


// const files = fs.readdirSync('data/blogs');
//   const blogs = files.map((filename) => {
//     const markdownWithMetadata = fs.readFileSync(
//       path.join('data/blogs', filename),
//       'utf-8'
//     );
//     const { data } = matter(markdownWithMetadata);
//     return {
//         url: `${DOMAIN}/blog/${filename}`,
//     };
//   });


 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: DOMAIN,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${DOMAIN}/blog`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}