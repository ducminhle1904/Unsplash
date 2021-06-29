import React from "react";
import Photo from "./Photo";
import { useGlobalContext } from "../context";

function ImageList() {
  const { loading, photos } = useGlobalContext();
  return (
    <section className="photos">
      <div className="photos-center">
        {photos.map((item, index) => {
          return <Photo key={index} {...item} />;
        })}
      </div>
      {loading && <h2 className="loading">Loading...</h2>}
    </section>
  );
}

export default ImageList;
