import { PostMetadata } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { CalendarDaysIcon, CircleUserRoundIcon, ClubIcon } from "lucide-react";
import Link from "next/link";

export default function NewsletterCard(props: { post: PostMetadata }) {
  return (
    <article
      className={"w-full bg-base-200 rounded-lg shadow-lg cursor-pointer overflow-hidden transition hover:bg-base-300"}
    >
      <Link className={"flex max-md:flex-col-reverse"} href={`/blog/${props.post.slug}`}>
        <div className={"p-4 flex flex-col flex-1"}>
          <div className={"flex-1"}>
            <h1 className={"text-xl font-bold"}>{props.post.title}</h1>
            <p className={"mt-1 mb-3 text-gray-600 dark:text-gray-400"}>{props.post.summary}</p>
          </div>
          <div className={"flex gap-4"}>
            <span className={"flex gap-1 items-center"}>
              <CircleUserRoundIcon />
              <span className={"text-sm"}>{props.post.author}</span>
            </span>
            <span className={"flex gap-1 items-center"}>
              <ClubIcon />
              <span className={"text-sm"}>NYP AI</span>
            </span>
            <span className={"flex gap-1 items-center"}>
              <CalendarDaysIcon />
              <span className={"text-sm"}>{formatDate(props.post.date)}</span>
            </span>
          </div>
        </div>
        <div>
          <img className={"md:h-32 aspect-video object-cover"} src={"/assets/blog/nyplink-committee.jpg"} />
        </div>
      </Link>
    </article>
  );
}