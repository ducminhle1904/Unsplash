import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context";

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const url = `https://api.unsplash.com/photos/random`;

function SearchForm() {
  const { query, setQuery, handleSubmit } = useGlobalContext();
  const [randomPhoto, setRandomPhoto] = useState(null);
  const fetchRandomImages = async () => {
    try {
      const response = await fetch(`${url}${clientID}`);
      const data = await response.json();
      setRandomPhoto(data);
      console.log(randomPhoto);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchRandomImages();
  }, []);

  return (
    <section
      className="search"
      // style={{ backgroundImage: {randomPhoto.urls.regular} }}
    >
      <div className="search-center">
        <div className="intro">
          <h2 className="intro-title">Unsplash</h2>
          <p className="intro-detail">
            The internet’s source of freely-usable images. Powered by creators
            everywhere.
          </p>
        </div>
        <form className="search-form">
          <link
            rel="stylesheet"
            href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          />

          <div className="simple-search">
            <input
              type="text"
              placeholder="Search free high-resolution photos"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" onClick={handleSubmit}>
              <i className="fa fa-search"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
