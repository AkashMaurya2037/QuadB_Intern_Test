import React, { useState } from "react";

import { MovieCard } from "../components";
import { useEffect } from "react";

function Home() {
  const [datas, setDatas] = useState([]);

  const getData = async () => {
    const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
    setDatas(await response.json());
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <header>
        <div className="bx-manage">
          {datas.map((curElem) => {
            const { id, name, rating, genres, image } = curElem.show;
            // console.log(id,name,rating.average,genres,image.medium)

            return (
              <MovieCard
                key={id}
                name={name}
                rating={rating.average}
                genres={genres}
                id={id}
                image={image}
                cardData={curElem}
              />
            );
          })}
        </div>
      </header>
    </>
  );
}

export default Home;
