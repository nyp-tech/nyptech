import { unbounded } from "@/fonts";
import { Event } from "@/lib/api/events";
import clsx from "clsx";
import Link from "next/link";

export default function EventSlide(props: { data: Event }) {
  return (
    <Link className={"group relative min-h-full snap-center overflow-hidden"} href={props.data.url}>
      <img
        className={"absolute size-full object-cover opacity-25 transition group-hover:scale-105"}
        src={props.data.publicityUrl}
        alt={"Background"}
      />
      <div className={"absolute size-full grid place-items-center"}>
        <div className={"text-center"}>
          <h1 className={clsx("font-bold text-4xl sm:text-6xl text-white", unbounded.className)}>{props.data.title}</h1>
          {props.data.date && <p>{props.data.date.toISOString().split("T")[0]}</p>}
        </div>
      </div>
    </Link>
  );
}