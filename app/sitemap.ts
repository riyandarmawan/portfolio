
import { MetadataRoute } from 'next';
import { Octokit } from 'octokit';

const siteUrl = 'https://riyandarmawan.vercel.app';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const octokit = new Octokit({ auth: process.env.GITHUB_API_KEY });
  const repos = await octokit.request('GET /repos/{owner}/{repo}/contents/blogs', {
    owner: 'riyandarmawan',
    repo: 'blogs',
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
