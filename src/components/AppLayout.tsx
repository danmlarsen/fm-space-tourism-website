import { Outlet } from "react-router-dom";
import Header from "./Header";
import Background from "./Background";
import MobileNav from "./MobileNav";
import { AnimatePresence, MotionConfig } from "framer-motion";

export default function AppLayout() {
  return (
    <MotionConfig reducedMotion="user">
      <MobileNav />
      <div className="grid min-h-screen grid-rows-[auto_1fr] text-white">
        <Background />
        <Header />
        <main className="flex">
          <AnimatePresence mode="wait">
            <Outlet />
          </AnimatePresence>
        </main>
      </div>
    </MotionConfig>
  );
}
