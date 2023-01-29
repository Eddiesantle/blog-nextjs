import PostDetailComponent from "@/domains/posts/components/post-detail-component";
import { PostDetail } from "@/domains/posts/models/post-detail";
import { Text } from "thon-ui";

type Props = {
  params: {
    slug: string;
  };
};

const postsEndPoint = "/contents/eddiesantle";

async function getPost(slug:string) {

  const postResponse = await fetch(`${process.env.BLOG_PROVIDER_BASE_API}${postsEndPoint}/${slug}`);

  const post = (await postResponse.json()) as PostDetail;

  if(!post){
    return null
  }

  post.created_at = new Date(post.created_at)

  return post;
  
}

export default async function BlogPostsDetailsPage({ params }: Props) {
  const { slug } = params;

  const post = await getPost(slug)

  console.log(post)


  console.log(params);
  return post ? (
    <PostDetailComponent
      post={post}
    />
  ) : <Text variant="xl">Poste não encontrado</Text>;
}
