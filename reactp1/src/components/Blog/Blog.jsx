import React from 'react';

const Card = ({ children, className }) => (
  <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children }) => (
  <div className="p-4">{children}</div>
);

const CardHeader = ({ children }) => (
  <div className="p-4 border-b">{children}</div>
);

const BlogPost = ({ category, title, description, imageUrl }) => (
  <Card className="max-w-sm mx-auto">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <CardHeader>
      <span className="text-sm font-semibold text-green-600">{category}</span>
      <h2 className="text-xl font-bold">{title}</h2>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

const TravelBlog = () => {
  const blogPosts = [
    {
      category: "TRAVEL INSPIRATION",
      title: "Best Small Cities for a Relaxing Break",
      description: "Discover charming, stress-free city breaks in Europe and North America.",
      imageUrl: "Bestcities.jpg"
    },
    {
      category: "DESTINATIONS",
      title: "Top Scuba Diving Locations",
      description: "Explore underwater wonders at these amazing diving spots.",
      imageUrl : "scubaDriving.jpg"
    },
    {
      category: "DESTINATIONS",
      title: "Budget Guide to Toronto",
      description: "Experience Toronto's vibrant culture without breaking the bank.",
      imageUrl: "Toronto.jpg"
    },
    {
      category: "TRAVEL TIPs",
      title: "India",
      description: "Country full of culture , tradition and many more.",
      imageUrl: "India.jpg"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Travel Stories</h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogPosts.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default TravelBlog;