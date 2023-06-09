import { useState, React, useEffect } from "react";
import { MovieBookingForm, MovieDetails } from "../components";
import { useLocation, useParams } from "react-router-dom";

function DetailsAndBook(props) {
  const [datas, setDatas] = useState("");
  const [idParam, setIdParam] = useState(null);

  const params = useParams();
  const location = useLocation();
  // redirectDataStoring()

  // const getData = async () => {
  //   // console.log("getData Runned");

  //   const redirectData = location.state?.data;

  //   const { id } = params;

  //   const convertId = Number(id);

  //   setIdParam(convertId);

  //   if (!id) {
  //     console.log("Data not exist");
  //     // console.log("Go to Home Page");
  //   } else if (!redirectData && id) {
  //     try {
  //       const response = await fetch(
  //         "https://api.tvmaze.com/search/shows?q=all"
  //       );
  //       const responseJson = await response.json();
  //       console.log(response);
  //       const desiredData = await responseJson.find(
  //         (obj) => obj.show.id == idParam
  //       );
  //       setDatas(desiredData);
  //       console.log(datas, "UseState");
  //     } catch (error) {
  //       console.log(err);
  //     }
  //   } else if (convertId == redirectData.show.id) {
  //     console.log(
  //       "convertId == redirectData.show.id",
  //       convertId == redirectData.show.id
  //     );
  //     setDatas(redirectData);
  //     console.log(datas, "Set Redirected Data");
  //   } else {
  //     console.log(redirectData.show.id, "data does not match");
  //   }
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { id } = params;

        const convertId = Number(id);
        const response = await fetch(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        const jsonData = await response.json();
        const desiredData = jsonData.find((obj) => obj.show.id === convertId);
        setDatas(desiredData);
        console.log(datas);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (location.state && location.state.redirectedFromLink) {
      console.log(location.state.redirectedFromLink);

      const redirectData = location.state?.data;

      const { id } = params;

      const convertId = Number(id);

      console.log(convertId);

      setIdParam(convertId);
      setDatas(redirectData);
      console.log(datas);
      console.log(redirectData);
      console.log("Function code executed after redirect");
    }
  }, [location]);

  setTimeout(() => {
    console.log(datas);
  }, 3000);

  return (
    <>
      {datas && datas.show && datas.show.id && <MovieDetails datas={datas} />}
      {datas && datas.show && datas.show.id && (
        <MovieBookingForm datas={datas} />
      )}
    </>
  );
}

export default DetailsAndBook;
