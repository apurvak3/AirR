import React from "react";
import { Search } from "lucide-react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const BlogPost = ({ title, date, author, excerpt, readMoreLink }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-2">{title}</h2>
    <p className="text-sm text-gray-600 mb-2">
      {date} by {author}
    </p>
    <p className="mb-2">{excerpt}</p>
    <a href={readMoreLink} className="text-blue-500 hover:underline italic">
      Read more
    </a>
  </div>
);

const AllBlogs = () => {
  const posts = [
    {
      title: "How do I contact Air France Colombia by phone?",
      date: "30 August, 2024",
      author: "Article",
      excerpt:
        "Are you thinking of taking a trip? But you don't have any knowledge about Airlines. Now, don't worry because I am here to suggest you a better Airline so that you can take a relaxed trip. Apart from that, no one wants to face any kind of inconvenience during their trip. So, I am going to recommend you to take a trip with Air France ...",
      readMoreLink: `/currentBlog`,
    },
    {
      title: "Turkish Airlines Colombia phone 24 hours",
      date: "28 August, 2024",
      author: "Article",
      excerpt:
        "You are a passenger and you have Turkish Airlines tickets. But suddenly Turkish Airlines canceled all the flights that operate from Colombia and you have no idea how you can have the next flight with Turkish Airlines. In this case I am going to provide you here the very convenient ways to establish the connection with Turkish Airlines by phone...",
      readMoreLink: "/currentBlog",
    },
    {
      title: "Turkish Airlines Colombia phone 24 hours",
      date: "28 August, 2024",
      author: "Article",
      excerpt:
        "You are a passenger and you have Turkish Airlines tickets. But suddenly Turkish Airlines canceled all the flights that operate from Colombia and you have no idea how you can have the next flight with Turkish Airlines. In this case I am going to provide you here the very convenient ways to establish the connection with Turkish Airlines by phone...",
      readMoreLink: "/currentBlog",
    },
    {
      title: "Turkish Airlines Colombia phone 24 hours",
      date: "28 August, 2024",
      author: "Article",
      excerpt:
        "You are a passenger and you have Turkish Airlines tickets. But suddenly Turkish Airlines canceled all the flights that operate from Colombia and you have no idea how you can have the next flight with Turkish Airlines. In this case I am going to provide you here the very convenient ways to establish the connection with Turkish Airlines by phone...",
      readMoreLink: "/currentBlog",
    },
    {
      title: "Turkish Airlines Colombia phone 24 hours",
      date: "28 August, 2024",
      author: "Article",
      excerpt:
        "You are a passenger and you have Turkish Airlines tickets. But suddenly Turkish Airlines canceled all the flights that operate from Colombia and you have no idea how you can have the next flight with Turkish Airlines. In this case I am going to provide you here the very convenient ways to establish the connection with Turkish Airlines by phone...",
      readMoreLink: "/currentBlog",
    },
    {
      title: "Turkish Airlines Colombia phone 24 hours",
      date: "28 August, 2024",
      author: "Article",
      excerpt:
        "You are a passenger and you have Turkish Airlines tickets. But suddenly Turkish Airlines canceled all the flights that operate from Colombia and you have no idea how you can have the next flight with Turkish Airlines. In this case I am going to provide you here the very convenient ways to establish the connection with Turkish Airlines by phone...",
      readMoreLink: "/currentBlog",
    },
  ];

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
        {posts.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default AllBlogs;
