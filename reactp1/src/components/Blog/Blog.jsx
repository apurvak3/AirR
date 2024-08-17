import React from "react";
import Navbar from "../navbar/Navbar";

const Card = ({ children, className }) => (
  <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children }) => <div className="p-4">{children}</div>;

const CardHeader = ({ children }) => (
  <div className="p-4 border-b">{children}</div>
);

const BlogPost = ({ category, title, description, imageUrl, link }) => (
  <Card className="max-w-sm mx-auto flex flex-col h-full">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <CardHeader>
      <span className="text-sm font-semibold text-green-600">{category}</span>
      <h2 className="text-xl font-bold">{title}</h2>
    </CardHeader>
    <CardContent className="flex-grow">
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={link}
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Read More
      </a>
    </CardContent>
  </Card>
);

const TravelBlog = () => {
  const blogPosts = [
    {
      category: "TRAVEL INSPIRATION",
      title: "Best Small Cities for a Relaxing Break",
      description:
        "Discover charming, stress-free city breaks in Europe and North America.",
      imageUrl: "Bestcities.jpg",
      link: "https://www.forbes.com/sites/laurabegleybloom/2022/07/27/ranked-the-worlds-20-best-cities-in-2022-according-to-time-out/",
    },
    {
      category: "DESTINATIONS",
      title: "Top Scuba Diving Locations",
      description: "Explore underwater wonders at these amazing diving spots.",
      imageUrl: "scubaDriving.jpg",
      link: "https://blog.padi.com/best-scuba-diving-destinations-in-the-world/",
    },
    {
      category: "DESTINATIONS",
      title: "Budget Guide to Toronto",
      description:
        "Experience Toronto's vibrant culture without breaking the bank.",
      imageUrl: "Toronto.jpg",
      link: "https://www.planetware.com/tourist-attractions-/toronto-cdn-on-ont.htm",
    },
    {
      category: "Beautiful",
      title: "India",
      description: "A place full of culture , tradition and peace",
      imageUrl: "India.jpg",
      link: "https://www.tourmyindia.com/blog/top-places-in-india-that-every-tourist-must-visit/",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mt-4">Travel Stories</h1>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TravelBlog;
