import NewsletterCard from "@/app/(pages)/newsletter/_components/newsletter-card";
import NewsletterCarousel from "@/app/(pages)/newsletter/_components/newsletter-carousel";
import { getPosts } from "@/lib/blog";
import clsx from "clsx";
import Link from "next/link";

const filters = [
  {
    name: "All",
    category: undefined,
  },
  {
    name: "Events",
    category: "events",
  },
  {
    name: "Club",
    category: "club",
  },
  {
    name: "Tech",
    category: "tech",
  },
];

export default async function Page(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const category = searchParams?.category as string | undefined;
  const filter = filters.find((filter) => filter.category === category) ?? filters[0];
  const posts = getPosts().filter((post) => !filter.category || post.metadata.category === filter.category);
  return (
    <main className={"py-4"}>
      <div className={"mx-auto w-[70%] max-lg:w-[90%] space-y-2"}>
        <NewsletterCarousel />
        <div className={"flex gap-2 overflow-x-auto"}>
          {filters.map((filter) => (
            <Link
              key={filter.category}
              className={clsx("btn btn-sm", filter.category === category && "btn-primary")}
              href={filter.category ? { query: { category: filter.category } } : "/newsletter"}
            >
              {filter.name}
            </Link>
          ))}
        </div>
        <div className={"flex flex-col gap-2"}>
          {posts.map((post) => (
            <NewsletterCard key={post.metadata.slug} post={post.metadata} />
          ))}
        </div>
      </div>
    </main>
  );
}