import templates from "@/content/data/templates.json";
import Link from "next/link";

export default function Page() {
  return (
    <main className={"grid grid-cols-1 gap-2 p-4 sm:grid-cols-2 md:grid-cols-3"}>
      {templates.map((template, index) => (
        <div key={index} className={"card bg-base-300"}>
          <div className={"card-body"}>
            <div className={"card-title"}>{template.name}</div>
            <div className={"flex-1"}>{template.description}</div>
            <div className={"card-actions"}>
              <Link className={"btn btn-primary"} href={template.url}>
                Start
              </Link>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}