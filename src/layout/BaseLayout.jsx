import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function BaseLayout() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar />
      <main className="flex-1 overflow-auto p-6 pt-24 md:pt-6">
        {/* ↑ pt-24 gives space below fixed nav on mobile */}
        <Outlet />
      </main>
    </div>
  );
}
