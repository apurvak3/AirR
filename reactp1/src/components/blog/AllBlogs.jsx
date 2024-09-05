import React from "react";
import { Search } from "lucide-react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import BlogData from "../blog/BlogData";
import { Link } from "react-router-dom";

const BlogPost = ({id, title, date, author, excerpt }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-2">{title}</h2>
    <p className="text-sm text-gray-600 mb-2">
      {date} by {author}
    </p>
    <p className="mb-2">{excerpt}</p>
    <Link  to={`/currentBlog/${id}`}>
      <button className="text-blue-500 hover:underline italic">
        Read more
      </button>
    </Link>
  </div>
);

const AllBlogs = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto p-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold italic">All Blogs For You !</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search.."
              className="py-2 px-4 pr-10 border border-gray-300 rounded-md"
            />
            <Search
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>
        {BlogData.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default AllBlogs;
