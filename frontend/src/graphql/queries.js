// Updated query to fetch the new fields
import { gql } from "@apollo/client";

export const GET_BOOKINGS = gql`
  query GetBookings {
    bookings {
      id
      name
      from
      to
      travelClass
      journeyType
      departureDate
      children
      adults
    }
  }
`;
