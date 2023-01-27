import PostDetails from "@/domains/posts/components/post-detail";
import { Post } from "@/domains/posts/models/post";

type Props = {
  params: {
    slug: string;
  };
};



export default function BlogPostsDetailsPage({ params }: Props) {
  const { slug } = params;

  console.log(params);
  return (
    <PostDetails
      post={{
        slug: "any-slug",
        title: "Uma boa maneira de organizar",
        created_at: new Date(2022, 10, 24),
      }}
    />
  );
}
