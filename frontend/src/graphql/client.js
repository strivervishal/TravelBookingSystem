import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql", // Ensure backend is running
  cache: new InMemoryCache(),
});

export default client;
