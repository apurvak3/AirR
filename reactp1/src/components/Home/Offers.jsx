import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const OfferCard = ({ title, description, validTill, imgUrl }) => (
  <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
    <div className="relative w-full pb-[100%] mb-4">
      <img 
        src={imgUrl} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover rounded-lg"
      />
    </div>
    <h3 className="text-lg font-bold">{title}</h3>
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

const Offers = () => {
  const offers = [
    { title: "Last Minute Booking", description: "Flat 25% OFF with Last Minute Booking", validTill: "25th Aug 2024", imgUrl:"/public/offer1.jpg" },
    { title: "First Flight", description: "Register and Get Discount on Booking First Flight with us*", validTill: "18th Aug 2024", imgUrl:"/public/offer2.jpg" },
    { title: "ITA Airways", description: "Enjoy Special Fares on Flights to All ITA Airways Networks", validTill: "31st Dec 2024", imgUrl:"/public/offer3.jpg" },
  ];

  return (
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
          <option>Mumbai (MUB)</option>
          <option>Agra(AGR)</option>
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
  );
};

export default Offers;