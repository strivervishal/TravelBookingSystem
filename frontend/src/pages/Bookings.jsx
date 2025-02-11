import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKINGS } from "../graphql/queries";

const Bookings = () => {
  const { loading, error, data } = useQuery(GET_BOOKINGS);

  if (loading) return <p>Loading bookings...</p>;
  if (error) return <p>Error fetching bookings</p>;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Your Bookings</h2>
      <ul>
        {data.bookings.map((booking) => (
          <li key={booking.id} className="p-4 border-b">
            <div>{booking.name}</div>
            <div>
              From: {booking.from} to {booking.to}
            </div>
            <div>Travel Class: {booking.travelClass}</div>
            <div>Journey Type: {booking.journeyType}</div>
            <div>Departure Date: {booking.departureDate}</div>
            <div>Children: {booking.children}</div>
            <div>Adults: {booking.adults}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bookings;
