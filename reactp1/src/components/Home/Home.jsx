React from "react";
import Navbar from "../navbar/Navbar";
import hero1 from "../../assets/imgs/aero.png";
import hero2 from "../../assets/imgs/hero4.jpg";
import hero3 from "../../assets/imgs/hero5.jpg";
import Footer from "../footer/Footer";
import { ChevronLeft, ChevronRight } from "react-feather";

const OfferCard = ({ title, description, validTill, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
    <img src={imageUrl} alt={title} className="w-full h-32 object-cover rounded-t-lg" />
    <h3 className="text-lg font-bold mt-2">{title}</h3>
    <p className="text-sm mt-1">{description}</p>
    <p className="text-xs text-gray-500 mt-auto">Valid till: {validTill}</p>
  </div>
);

const FlightDeal = ({ destination, date, airline, price }) => (
  <div className="flex justify-between items-center border-b py-2">
    <div>
      <h4 className="font-semibold">To {destination}</h4>
      <p className="text-sm text-gray-600">{date} | {airline}</p>
    </div>
    <div className="text-right">
      <p className="text-sm">One way as low as</p>
      <p className="text-xl font-bold text-orange-500">₹{price}</p>
      <button className="bg-blue-500 text-white px-4 py-1 rounded text-sm">BOOK NOW</button>
    </div>
  </div>
);

const HomePage = () => {
  const offers = [
    { title: "Last Minute Booking", description: "Flat 25% OFF with Last Minute Booking", validTill: "25th Aug 2024", imageUrl: "/api/placeholder/300/200" },
    { title: "Akasa Air", description: "Book Akasa Air One-Way Domestic Flights at a Starting Fare of INR 1,515*", validTill: "18th Aug 2024", imageUrl: "/api/placeholder/300/200" },
    { title: "ITA Airways", description: "Enjoy Special Fares on Flights to All ITA Airways Networks", validTill: "31st Dec 2024", imageUrl: "/api/placeholder/300/200" },
  ];

  return (
    <>
      <Navbar />
      <div className="hero">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner h-75">
            <div className="carousel-item active">
              <img
                src={hero1}
                className="d-block w-100 object-fit-cover slider-img"
                alt="Hero 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src={hero2}
                className="d-block w-100 object-fit-cover slider-img"
                alt="Hero 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src={hero3}
                className="d-block w-100 object-fit-cover slider-img"
                alt="Hero 3"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Best Offers</h2>
          <div>
            <button className="p-2 bg-gray-200 rounded-full mr-2"><ChevronLeft size={20} /></button>
            <button className="p-2 bg-gray-200 rounded-full"><ChevronRight size={20} /></button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {offers.map((offer, index) => (
            <OfferCard key={index} {...offer} />
          ))}
        </div>

        <button className="bg-blue-500 text-white px-6 py-2 rounded mx-auto block mb-8">
          View All Offers
        </button>

        <h2 className="text-2xl font-bold mb-4">Best Deals on Flight Tickets</h2>

        <div className="mb-4">
          <select className="border p-2 rounded">
            <option>Delhi (DEL)</option>
          </select>

          <div className="mt-2">
            <button className="bg-black text-white px-4 py-2 rounded-l">Aug</button>
            <button className="bg-white text-black px-4 py-2 border">Sep</button>
            <button className="bg-white text-black px-4 py-2 border rounded-r">Oct</button>
          </div>
        </div>

        <div>
          <FlightDeal destination="Bangalore" date="Sunday 18 Aug 2024" airline="Indigo" price="5115" />
          <FlightDeal destination="GOA" date="Monday 19 Aug 2024" airline="Indigo" price="3916" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;