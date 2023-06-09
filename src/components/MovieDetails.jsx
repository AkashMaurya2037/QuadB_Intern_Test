import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { StarFill } from "react-bootstrap-icons";

function MovieDetails({ datas }) {
  return (
    <div className=" justify-content-between bg-dark flex-row MDContainer">
      <div className="MD2ndCon">
        <div className=" mx-auto">
          <img className="MDImg" src={datas.show.image.medium} alt={datas.show.name} />
        </div>
        
        <div className="flex MDBox mx-auto MDRight ">
          <h1 className="MDText">{datas.show.name}</h1>
          <h1 className="text-white h5">Language : {datas.show.language}</h1>
          <h1 className="h5 text-white">Rating : <StarFill className="starfill"/>{datas.show.rating.average ? datas.show.rating.average : "Not Rated"}</h1>
          <h1 className="MDOtherInfo">{datas.show.genres.toString()}<span className="spanDot">  •  </span>{datas.show.premiered}<span className="spanDot">  •  </span>{datas.show.type.toString()}</h1>
          <h1 className="MDOtherInfo"><div dangerouslySetInnerHTML={{__html: datas.show.summary}}></div></h1>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
