import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { ModalLink } from "react-router-modal-gallery";

function Photo({
  id,
  urls: { regular },
  alt_description,
  likes,
  user: {
    name,
    portfolio_url,
    profile_image: { medium },
  },
}) {
  return (
    <article className="photo">
      <ModalLink to={{ pathname: `/photos/${id}` }}>
        <img
          src={regular}
          alt={alt_description}
          className="photo-img"
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            objectFit: "cover",
          }}
        />
      </ModalLink>

      <div className="photo-info">
        <div>
          <h4>{name}</h4>
          <p>Likes: {likes}</p>
        </div>
        {/* <Link to={`/photos/${id}`} className="custombtn">
          <AiOutlineDownload />
        </Link> */}
        <a href={portfolio_url} target="blank">
          <img src={medium} alt={name} className="user-img" />
        </a>
      </div>
    </article>
  );
}

export default Photo;
