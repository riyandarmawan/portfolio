
import { MetadataRoute } from 'next';
import { Octokit } from 'octokit';

const siteUrl = 'https://riyandarmawan.vercel.app';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const octokit = new Octokit();
  const repos = await octokit.request('GET /repos/{owner}/{repo}/contents/blogs', {
    owner: 'riyandarmawan',
    repo: 'next-portfolio',
  });

  const posts = repos.data.map((repo: any) => ({
    url: `${siteUrl}/blogs/${repo.name.replace('.mdx', '')}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  const routes = ['', '/blogs'].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...posts];
}
