
import { MetadataRoute } from 'next';
import { Post, allPosts } from 'contentlayer/generated';

const siteUrl = 'https://riyandarmawan.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = allPosts.map((post: Post) => ({
    url: `${siteUrl}/blogs/${post.slug}`,
    lastModified: post.date,
  }));

  const routes = ['', '/blogs'].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...posts];
}
