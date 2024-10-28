import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
const config = require('../../next.config');

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

function replaceBasePath(content: any): any {
  const basePath = config.basePath || '';
  
  if (typeof content === 'string') {
    return content.replace(/\$\{basePath\}/g, basePath);
  }
  
  if (Array.isArray(content)) {
    return content.map(item => replaceBasePath(item));
  }
  
  if (typeof content === 'object' && content !== null) {
    return Object.entries(content).reduce((acc, [key, value]) => {
      acc[key] = replaceBasePath(value);
      return acc;
    }, {} as Record<string, any>);
  }
  
  return content;
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  
  // First, process the raw file contents to handle YAML frontmatter
  const processedFileContents = replaceBasePath(fileContents);
  
  // Parse the processed content with gray-matter
  const { data, content } = matter(processedFileContents);

  // Process frontmatter data recursively
  const processedData = replaceBasePath(data);

  // Process main content
  const processedContent = replaceBasePath(content);

  return {
    ...processedData,
    slug: realSlug,
    content: processedContent,
  } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

// Optional: Add type checking for the Post interface
export function validatePost(post: any): post is Post {
  return (
    typeof post.slug === 'string' &&
    typeof post.content === 'string' &&
    typeof post.title === 'string' &&
    typeof post.coverImage === 'string' &&
    typeof post.date === 'string' &&
    typeof post.author?.name === 'string' &&
    typeof post.author?.picture === 'string' &&
    typeof post.ogImage?.url === 'string'
  );
}