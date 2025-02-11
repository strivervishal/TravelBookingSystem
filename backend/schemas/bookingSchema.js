const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = require("graphql");
const Booking = require("../models/Booking");

const BookingType = new GraphQLObjectType({
  name: "Booking",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    from: { type: GraphQLString },
    to: { type: GraphQLString },
    adults: { type: GraphQLInt },
    children: { type: GraphQLInt },
    travelClass: { type: GraphQLString },
    departureDate: { type: GraphQLString },
    journeyType: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "Query",
  fields: {
    bookings: {
      type: new GraphQLList(BookingType),
      resolve: async () => await Booking.find(),
    },
    booking: {
      type: BookingType,
      args: { id: { type: GraphQLString } },
      resolve: async (_, { id }) => await Booking.findById(id),
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addBooking: {
      type: BookingType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        from: { type: GraphQLString },
        to: { type: GraphQLString },
        adults: { type: GraphQLInt },
        children: { type: GraphQLInt },
        travelClass: { type: GraphQLString },
        departureDate: { type: GraphQLString },
        journeyType: { type: GraphQLString },
      },
      resolve: async (_, args) => {
        const newBooking = new Booking(args);
        return await newBooking.save();
      },
    },
    deleteBooking: {
      type: BookingType,
      args: { id: { type: GraphQLString } },
      resolve: async (_, { id }) => await Booking.findByIdAndDelete(id),
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
