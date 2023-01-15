import { RenderMarkdown, Text } from "thon-ui";
import { Post } from "@/domains/posts/models/post";
import { format } from "date-fns";

const baseURL = "https://www.tabnews.com.br/api/v1";
const postsEndPoint = "/contents/guscsales";

async function getLastPost() {
  const postsResponse = await fetch(`${baseURL}${postsEndPoint}`);
  let posts = (await postsResponse.json()) as Post[];

  posts = posts
    .filter((post) => !!post.title)
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

  return null
}

export default async function Home() {
  const lastPost = await getLastPost();

  if(!lastPost){
    return null
  }

  return (
    <div className="h-[calc(100%-3.563rem)]">
      <article>
        <Text variant="sm" className="text-gray-500">
          {format(lastPost?.created_at, 'dd.MM.yyyy')} - Útima Postagem...
        </Text>
        <Text as="h1" variant="3xl" className="w-full lg:w-[35rem] mt-2">
          {lastPost.title}
        </Text>

        <RenderMarkdown value={lastPost.body}/>
      </article>
    </div>
  );
}
