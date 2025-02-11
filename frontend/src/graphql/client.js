import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://travel-booking-system-mct8.vercel.app/graphql", // Ensure backend is running
  cache: new InMemoryCache(),
});

export default client;
