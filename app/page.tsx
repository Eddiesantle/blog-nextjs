import { Text } from "thon-ui";
import { Post } from "@/domains/posts/models/post";
import { format } from "date-fns";
import Markdown from "@/shared/components/markdown";
import Link from "next/link";

const baseURL = "https://www.tabnews.com.br/api/v1";
const postsEndPoint = "/contents/guscsales";

async function getLastPost() {
  const postsResponse = await fetch(`${baseURL}${postsEndPoint}`);
  let posts = (await postsResponse.json()) as Post[];

  posts = posts
    .filter((post) => !post["parent_id"])
    .map((post) => ({
      ...post,
      created_at: new Date(post.created_at),
    }));

  posts.sort((a, b) => {
    return (
      (b.created_at as unknown as number) - (a.created_at as unknown as number)
    );
  });

  const [lastPostFromList] = posts;

  const lastPostResponse = await fetch(
    `${baseURL}${postsEndPoint}/${lastPostFromList.slug}`
  );
  const lastPost = (await lastPostResponse.json()) as Post;

  if (lastPost) {
    return {
      ...lastPost,
      created_at: new Date(lastPost.created_at),
    };
  }

  return null;
}

export default async function Home() {
  const lastPost = await getLastPost();

  if (!lastPost) {
    return null;
  }

  return (
    <article>
      <Text variant="sm" className="text-gray-500">
        {format(lastPost?.created_at, "dd.MM.yyyy")} - Útima Postagem...
      </Text>
      <Text as="h1" variant="2xl lg:3xl" className="w-full lg:w-[35rem] mt-2 mb-12">
        {lastPost.title}
      </Text>

      <div
        className={`relative before:content-[''] before:w-[calc(100%-5rem)] before:h-[5.5rem]
        before:absolute before:bottom-0 before:-left-10
        before:bg-linear-bottom-white`}
      >
        <Markdown
          value={lastPost.body || ""}
          className="h-[59vh] overflow-hidden mb-6"
        />
      </div>

      <div className="flex items-center justify-end mt-9 mb-4">
        <Link href="/blog" className="py-2 px-3">
          <Text
            variant="xs"
            className="text-blue-400 hover:text-blue-600 transiton-all duratiom-200 ease-in-out"
          >
            Ver outros Posts
          </Text>
        </Link>
        <Link
          href={`/blog/${lastPost.slug}`}
          className="py-2 px-3 bg-gray-100 hover:bg-gray-200 transiton-all duratiom-200 ease-in-out rounded"
        >
          <Text variant="xs" className="font-bold text-gray-800">
            Continuar Lendo
          </Text>
        </Link>
      </div>
    </article>
  );
}
