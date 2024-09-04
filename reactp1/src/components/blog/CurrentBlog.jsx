import React from "react";

import { Search } from "lucide-react";
import Navbar from "../navbar/Navbar";

const BlogPost = ({ title, date, author, excerpt, readMoreLink }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-2">{title}</h2>
    <p className="text-sm text-gray-600 mb-2">
      {date} by {author}
    </p>
    <p className="mb-2">{excerpt}</p>
    {/* <a href={readMoreLink} className="text-blue-500 hover:underline">
      Read more
    </a> */}
  </div>
);

function CurrentBlog() {
  const posts = [
    {
      title: "How do I contact Air France Colombia by phone?",
      date: "30 August, 2024",
      author: "Article",
      excerpt:
        "Are you thinking of taking a trip? But you don't have any knowledge about Airlines. Now, don't worry because I am here to suggest you a better Airline so that you can take a relaxed trip. Apart from that, no one wants to face any kind of inconvenience during their trip. So, I am going to recommend you to take a trip with Air France ...",
    },
  ];

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
            {posts.map((post, index) => (
              <BlogPost key={index} {...post} />
            ))}
          </div>
          <div className="mt-8 d-none d-md-block">
            <h2 className="text-xl font-semibold mb-4">Related Posts</h2>
            <ul className="list-disc list-inside">
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  Turkish Airlines Colombia phone 24 hours
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  How to call Jetsmart Peru Phone from my Cell Phone?
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  How to Call KLM Spain Free Phone Number?
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-500 hover:underline">
                  How do I call united airlines phone Guatemala?
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentBlog;
