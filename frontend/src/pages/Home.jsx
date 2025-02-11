import React from "react";
import BookingForm from "../components/BookingForm";

const Home = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Book Your Trip</h1>
      <BookingForm />
    </div>
  );
};

export default Home;
