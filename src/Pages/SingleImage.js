import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const url = "https://api.unsplash.com/photos/";
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;

function SingleImage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState(null);

  const getImage = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${id}${clientID}`);
      const data = await response.json();
      setPhoto(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getImage();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!photo) {
    return <h2 className="section-title">This page is not available</h2>;
  }

  return (
    <section className="sec-center">
      <Link
        to="/"
        style={{
          marginLeft: 10,
          marginTop: 10,
          position: "absolute",
          top: -40,
          left: -65,
          color: "white",
        }}
      >
        <AiOutlineClose />
      </Link>
      <div className="img-info">
        <div style={{ display: "flex", alignItems: "center" }}>
          <a href={photo.user.portfolio_url} target="blank">
            <img
              src={photo.user.profile_image.medium}
              alt={photo.user.name}
              className="user-img"
            />
          </a>
          <p style={{ marginBottom: "0.5rem", marginLeft: 10 }}>
            {photo.user.name}
          </p>
        </div>
      </div>

      <div className="img-container">
        <img src={photo.urls.regular} alt="something" />
      </div>
    </section>
  );
}

export default SingleImage;
