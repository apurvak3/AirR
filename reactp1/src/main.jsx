import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Support from "./components/support/Support.jsx";
import TermsAndConditions from "./components/TermsAndCondition/TermsAndCondition.jsx";
import AllBlogs from "./components/blog/AllBlogs.jsx";
import CurrentBlog from "./components/blog/CurrentBlog.jsx";
import { useParams } from "react-router-dom";
import Blogdata from "./components/blog/BlogData.jsx";

AOS.init();

const RecentBlog = () => {
  const { id } = useParams();
  const singleBlog = Blogdata.find((singleBlog) => singleBlog.id === parseInt(id, 10));

  if (!singleBlog) {
    return <div>Article not found!</div>;
  }

  return <CurrentBlog singleBlog={singleBlog} />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/homepage",
    element: <homePage />,
  },
  {
    path: "/blogs",
    element: <AllBlogs />,
  },
  {
    path: "/currentBlog/:id",
    element: <RecentBlog />,
  },
  {
    path: "/support",
    element: <Support />,
  },
  {
    path: "/termsandcondition",
    element: <TermsAndConditions />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
