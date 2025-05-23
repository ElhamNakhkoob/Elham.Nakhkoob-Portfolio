import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BaseLayout from "../layout/BaseLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Resume from "../pages/Resume";
import Skils from "../pages/Skils";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />, // Applies to all children
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "resume", element: <Resume /> },
      { path: "skils", element: <Skils /> },
      { path: "projects", element: <Projects /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
