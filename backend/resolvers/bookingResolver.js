const Booking = require("../models/Booking");

const resolvers = {
  Query: {
    bookings: async () => await Booking.find(),
    booking: async (_, { id }) => await Booking.findById(id),
  },
  Mutation: {
    addBooking: async (_, args) => {
      const newBooking = new Booking(args);
      return await newBooking.save();
    },
    deleteBooking: async (_, { id }) => await Booking.findByIdAndDelete(id),
  },
};

module.exports = resolvers;
