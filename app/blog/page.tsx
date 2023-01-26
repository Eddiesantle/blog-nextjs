import PostsListItem from "@/domains/posts/components/posts-list-item";
import Link from "next/link";
import { Text } from "thon-ui";

export default function BolgPage() {
  return (
    <article>
      <header>
        <Text variant="3xl lg:4xl" as="h1" className="mb-7 lg:mb-12">
          Blog
        </Text>
      </header>
      <ul aria-label="Posts" className="grid gap-6 w-full lg:w-[41.375rem]">
        <PostsListItem
          post={{
            slug: "any-slug",
            title: "Uma boa maneira de organizar",
            created_at: new Date(2022, 10, 24),
          }}
          isLarge
          headerComplement="- Última postagem..."
        />
        <PostsListItem
          post={{
            slug: "any-slug-2",
            title: "Uma boa maneira de organizar",
            created_at: new Date(2022, 10, 24),
          }}
        />
        <PostsListItem
          post={{
            slug: "any-slug-3",
            title: "Uma boa maneira de organizar",
            created_at: new Date(2022, 10, 24),
          }}
        />
      </ul>
    </article>
  );
}
