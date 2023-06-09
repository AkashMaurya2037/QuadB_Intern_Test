import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";

function MovieDetails({ datas }) {
  return (
    <div className=" justify-content-between bg-dark flex-row MDContainer">
      <div className="MD2ndCon">
        <div className=" mx-auto">
          <img className="MDImg" src={datas.show.image.medium} alt="" />
        </div>
        
        <div className="flex MDBox mx-auto MDRight ">
          <h1 className="MDText">{datas.show.name}</h1>
          <h1 className="text-white h5">Language : {datas.show.language}</h1>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
