import NavigationBar from "@/components/navigation-bar";

export default function AppShell(props: { children: React.ReactNode }) {
  return (
    <div className={"z-20 grid size-full grid-rows-[auto,1fr]"} data-theme={"dark"}>
      <NavigationBar />
      {props.children}
    </div>
  );
}