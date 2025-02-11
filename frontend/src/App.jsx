import React from "react";
import { Route, Routes } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/client";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Bookings from "./pages/Bookings";

function App() {
  return (
    <ApolloProvider client={client}>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookings" element={<Bookings />} />
        </Routes>
      </>
    </ApolloProvider>
  );
}

export default App;
