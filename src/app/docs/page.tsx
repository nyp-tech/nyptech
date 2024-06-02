import { CodeXml, Component, Home, WaypointsIcon } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <main className={"h-full grid grid-cols-2"}>
      <aside className={"max-w-[40%] shadow-lg bg-base-300"}>
        <ul className={"menu"}>
          <li>
            <Link href={"#"}>
              <Home />
              <span>Introduction</span>
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <CodeXml />
              <span>Installation</span>
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <Component />
              <span>Components</span>
            </Link>
            <ul>
              <li>
                <Link href={"#"}>Timeline</Link>
              </li>
              <li>
                <Link href={"#"}>Socials</Link>
              </li>
              <li>
                <Link href={"#"}>Project Card</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href={"#"}>
              <WaypointsIcon />
              <span>APIs</span>
            </Link>
          </li>
        </ul>
      </aside>
      <article>
        <div>
          <h1>Hello, world!</h1>
        </div>
      </article>
    </main>
  );
}