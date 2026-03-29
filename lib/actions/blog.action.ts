import { Base64 } from "js-base64";
import { Octokit } from "octokit";

const octokit = new Octokit({ auth: process.env.GITHUB_API_KEY });

export async function getBlogContent(slug: string) {
  try {
    const res = await octokit.request(
      `GET /repos/{owner}/{repo}/contents/{path}`,
      {
        owner: "riyandarmawan",
        repo: "blogs",
        path: `blogs/${slug}.mdx`,
      }
    );

    if (Array.isArray(res.data)) {
      throw {
        error: {
          name: "FileProcessingError",
          message: "Expected a single file, but received an array.",
        },
        statusCode: 400,
      };
    }

    if (res.data.type !== "file" || !res.data.content) {
      throw {
        error: {
          name: "FileProcessingError",
          message: "Expected a file with content",
        },
        statusCode: 400,
      };
    }

    const encoded = res.data.content;
    const decoded = Base64.decode(encoded);
    return decoded;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getAllBlogs(): Promise<
  { slug: string; title: string; img: string; date: string; description: string }[]
> {
  try {
    const res = await octokit.request(
      `GET /repos/{owner}/{repo}/contents/{path}`,
      {
        owner: "riyandarmawan",
        repo: "blogs",
        path: "meta.json",
      }
    );

    if (Array.isArray(res.data)) {
      throw {
        error: {
          name: "FileProcessingError",
          message: "Expected a single file, but received an array.",
        },
        statusCode: 400,
      };
    }

    if (res.data.type !== "file" || !res.data.content) {
      throw {
        error: {
          name: "FileProcessingError",
          message: "Expected a file with content",
        },
        statusCode: 400,
      };
    }

    const encoded = res.data.content;
    const decoded = Base64.decode(encoded);
    const blogs = JSON.parse(decoded);

    blogs.sort((a: {date: string}, b: {date: string}) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })

    return blogs;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getBlogMetadata(slug: string): Promise<{slug: string; title: string; img: string; date: string; description: string}> {
  try {
  const blogs = await getAllBlogs();

  const blog = blogs.find(blog => blog.slug === slug);

if(!blog) {
    throw new Error(`Blog metadata not found for slug: ${slug}`);
  }

  return blog;
  } catch (error) {
    console.error("Failed to get blog metadata:", error);
    throw error;
  }
}
