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
      <ul aria-label="Posts" className="w-full lg:w-[41.375rem]">
        <li>
          <Link href={"/blog/1"} className="flex flex-col gap-2">
            <Text variant="sm" className="text-gray-500">
              24.11.2022- Última Postagem...
            </Text>
            <Text variant="3xl lg:4xl" className="text-gray-800 ">
              Uma boa manira de ser o melhor do mundo
            </Text>
          </Link>
        </li>
      </ul>
    </article>
  );
}
