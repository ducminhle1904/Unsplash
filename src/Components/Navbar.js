import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { query, setQuery, handleSubmit } = useGlobalContext();
  return (
    <nav className="navbar">
      <form>
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Unsplash_wordmark_logo.svg/2560px-Unsplash_wordmark_logo.svg.png"
            alt="logo"
            style={{ width: 100, marginLeft: 50, marginRight: 15 }}
          />
        </Link>

        <input
          type="text"
          placeholder="Search free high-resolution photos"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          onClick={handleSubmit}
          style={{ background: "transparent" }}
        >
          <i className="fa fa-search"></i>
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
