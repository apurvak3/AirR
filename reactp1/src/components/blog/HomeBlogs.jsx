import React from "react";
import Blogdata from "./BlogData";
import { Link } from "react-router-dom";

const BlogPost = ({id, title, date, author, excerpt, readMoreLink }) => (
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

function HomeBlogs() {

  return (
    <>
      <div
        className="max-w-7xl mx-auto p-4 my-5 bg-light shadow-md"
        data-aos="fade-up"
        dataAosEasing="ease-out-cubic"
        dataAosDuration="3000"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Blog Posts</h1>
        </div>
        {Blogdata.slice(0, 2).map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </div>
    </>
  );
}

export default HomeBlogs;
