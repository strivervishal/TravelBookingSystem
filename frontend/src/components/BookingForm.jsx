import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_BOOKING } from "../graphql/mutations";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    from: "",
    to: "",
    journeyType: "", // Added
    departureDate: "", // Added
    travelClass: "", // Added
    children: 0, // Added
    adults: 1, // Added
  });

  const [addBooking, { data }] = useMutation(ADD_BOOKING);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure children and adults are integers
    const formDataWithIntegers = {
      ...formData,
      children: parseInt(formData.children, 10), // Convert children to integer
      adults: parseInt(formData.adults, 10), // Convert adults to integer
    };

    // Call mutation with updated form data
    await addBooking({ variables: formDataWithIntegers });
    alert("🎉 Booking successful!");
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 bg-white bg-opacity-90 shadow-lg rounded-lg backdrop-blur-md"
      >
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
          📌 Book Your Trip
        </h2>

        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Full Name"
              className="border p-3 w-full rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
            <span className="absolute right-3 top-3 text-gray-400">👤</span>
          </div>

          <div className="relative">
            <input
              type="email"
              placeholder="Email Address"
              className="border p-3 w-full rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <span className="absolute right-3 top-3 text-gray-400">📧</span>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="From (City)"
              className="border p-3 w-full rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={(e) =>
                setFormData({ ...formData, from: e.target.value })
              }
              required
            />
            <span className="absolute right-3 top-3 text-gray-400">✈️</span>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="To (City)"
              className="border p-3 w-full rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={(e) => setFormData({ ...formData, to: e.target.value })}
              required
            />
            <span className="absolute right-3 top-3 text-gray-400">🛬</span>
          </div>

          <div className="relative">
            <select
              value={formData.journeyType}
              onChange={(e) =>
                setFormData({ ...formData, journeyType: e.target.value })
              }
              className="border p-3 w-full rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="">Select Journey Type</option>
              <option value="one-way">One-way</option>
              <option value="round-trip">Round-trip</option>
            </select>
          </div>

          <div className="relative">
            <input
              type="date"
              placeholder="Departure Date"
              className="border p-3 w-full rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={(e) =>
                setFormData({ ...formData, departureDate: e.target.value })
              }
              required
            />
          </div>

          <div className="relative">
            <select
              value={formData.travelClass}
              onChange={(e) =>
                setFormData({ ...formData, travelClass: e.target.value })
              }
              className="border p-3 w-full rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            >
              <option value="">Select Travel Class</option>
              <option value="economy">Economy</option>
              <option value="business">Business</option>
              <option value="first-class">First Class</option>
            </select>
          </div>

          <div className="relative">
            <input
              type="number"
              placeholder="Number of Children"
              className="border p-3 w-full rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={(e) =>
                setFormData({ ...formData, children: e.target.value })
              }
              required
            />
          </div>

          <div className="relative">
            <input
              type="number"
              placeholder="Number of Adults"
              className="border p-3 w-full rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={(e) =>
                setFormData({ ...formData, adults: e.target.value })
              }
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white p-3 w-full rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md"
          >
            🚀 Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
