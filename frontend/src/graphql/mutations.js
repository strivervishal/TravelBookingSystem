// Updated mutation to include all required fields
import { gql } from "@apollo/client";

export const ADD_BOOKING = gql`
  mutation AddBooking(
    $name: String!
    $email: String!
    $from: String!
    $to: String!
    $journeyType: String!
    $departureDate: String!
    $travelClass: String!
    $children: Int!
    $adults: Int!
  ) {
    addBooking(
      name: $name
      email: $email
      from: $from
      to: $to
      journeyType: $journeyType
      departureDate: $departureDate
      travelClass: $travelClass
      children: $children
      adults: $adults
    ) {
      id
      name
      from
      to
      journeyType
      departureDate
      travelClass
      children
      adults
    }
  }
`;
