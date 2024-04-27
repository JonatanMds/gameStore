import Main from "./components/main";
import SidebarMenu from "./sidebarMenu";

export default function Home() {
  return (
    <main className="flex min-h-screen flex items-start justify-between pr-6 gap-4 bg-[#232426]">
      <SidebarMenu />
      <Main />
    </main>
  );
}
