import React from "react";
import { StarFill } from "react-bootstrap-icons";
// import DetailsAndBook from "../pages"
import { Link } from "react-router-dom";

function MovieCard(props) {
  console.log(props.id);

  const bookingPage = () => {
    console.log(props.cardData);
  };
  const redirectLink = `movie-details/${props.id.toString()}`;

  return (
    <>
      <Link
        to={redirectLink}
        state={{ data: props.cardData, redirectedFromLink: true }}
      >
        <div className="bx">
          <img src={props.image.medium} alt={props.name} />
          <div className="content">
            <h3>{props.name}</h3>
            <p>{props.genres.toString()}</p>
            <h6>
              <span>Rating</span> <StarFill />{" "}
              {props.rating ? props.rating : "Not Rated"}
            </h6>
          </div>
        </div>
      </Link>
    </>
  );
}

export default MovieCard;
