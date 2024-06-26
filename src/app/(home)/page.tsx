import ContactSection from "@/app/(home)/sections/contact";
import EventsSection from "@/app/(home)/sections/events";
import InnovationSection from "@/app/(home)/sections/innovation";
import IntroSection from "@/app/(home)/sections/intro";
import JoinSection from "@/app/(home)/sections/join";

export default function Page() {
  return (
    <main className={"h-full container mx-auto"}>
      <IntroSection className={"h-full"} />
      <InnovationSection className={"h-full lg:h-[70%]"} />
      <JoinSection className={"h-full lg:h-[50%]"} />
      <EventsSection className={"h-full"} />
      <ContactSection className={"h-full lg:h-[50%]"} />
    </main>
  );
}