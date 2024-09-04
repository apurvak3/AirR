import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Support from "./components/support/Support.jsx";
import TermsAndConditions from "./components/TermsAndCondition/TermsAndCondition.jsx";
import AllBlogs from "./components/blog/AllBlogs.jsx";
import CurrentBlog from "./components/blog/CurrentBlog.jsx";


AOS.init();


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/homepage",
    element: <homePage/>
  },
  {
    path: "/blogs",
    element: <AllBlogs />,
  },
  {
    path: "/currentBlog",
    element: <CurrentBlog />,
  },
  {
    path: "/support",
    element: <Support />,
  },
  {
    path:"/termsandcondition",
    element : <TermsAndConditions/>,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
