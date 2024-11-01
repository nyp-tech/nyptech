"use client";

import { slugify } from "@/lib/utils";
import { XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProfileCard(props: {
  name: string;
  role: string;
  description: string;
  src: string;
  href: string;
}) {
  const dialogId = slugify(`modal-${slugify(props.name)}`);
  const showDialog = () => {
    const dialog = document.getElementById(dialogId) as HTMLDialogElement;
    dialog.showModal();
  };

  return (
    <>
      <button className={"card bg-base-300 shadow-lg cursor-pointer transition hover:bg-base-200"} onClick={showDialog}>
        <figure>
          <img className={"aspect-square object-cover"} src={props.src} alt={"Profile"} />
        </figure>
        <div className={"card-body"}>
          <div className={"card-title"}>{props.name}</div>
          <div className={"badge badge-lg badge-primary"}>{props.role}</div>
        </div>
      </button>
      <dialog id={dialogId} className={"modal"}>
        <div className={"modal-box"}>
          <form method={"dialog"}>
            <button className={"btn btn-sm btn-circle btn-ghost absolute right-4 top-4"} type={"submit"}>
              <XIcon />
            </button>
          </form>
          <div className={"text-xl font-bold"}>{props.name}</div>
          <div className={"mt-2 badge badge-primary"}>{props.role}</div>
          <div className={"my-4"}>{props.description || "Nothing to read here."}</div>
          <div>
            {props.href && (
              <Link className={"btn btn-sm btn-info"} href={props.href}>
                <Image src={"/assets/icons/linkedin.svg"} alt={"Icon"} width={16} height={16} />
                LinkedIn
              </Link>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}