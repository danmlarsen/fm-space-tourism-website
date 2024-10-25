import { Outlet } from "react-router-dom";
import Header from "./Header";
import Background from "./Background";

export default function AppLayout() {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr] text-white">
      <Background />
      <Header />
      <main className="py-300 flex">
        <Outlet />
      </main>
    </div>
  );
}
