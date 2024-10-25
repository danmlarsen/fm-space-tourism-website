import { Outlet } from "react-router-dom";
import Header from "./Header";
import Background from "./Background";
import MobileNav from "./MobileNav";

export default function AppLayout() {
  return (
    <>
      <MobileNav />
      <div className="grid min-h-screen grid-rows-[auto_1fr] text-white">
        <Background />
        <Header />
        <main className="py-300 flex">
          <Outlet />
        </main>
      </div>
    </>
  );
}
