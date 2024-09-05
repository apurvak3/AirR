import React from "react";

import { Search } from "lucide-react";
import Navbar from "../navbar/Navbar";

const BlogPost = ({title, date, author, excerpt }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-2">{title}</h2>
    <p className="text-sm text-gray-600 mb-2">
      {date} by {author}
    </p>
    <p className="mb-2">{excerpt}</p>
    
  </div>
);

function CurrentBlog({singleBlog}) {
  return (
    <>
      <Navbar />
      <div className="container-sm ">
        <div className="flex justify-between items-center mb-8 mt-md-3 mt-1">
          <h1 className="text-3xl font-bold">Blog Posts</h1>
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
        <div className="flex">
          <div className="mx-auto">
              <BlogPost {...singleBlog} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentBlog;
