import React from "react";
import ImageList from "../Components/ImageList";
import SearchForm from "../Components/SearchForm";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <main>
      <Navbar />
      <SearchForm />
      <ImageList />
    </main>
  );
};

export default Home;
