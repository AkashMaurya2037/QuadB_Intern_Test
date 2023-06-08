import { useState, React, useEffect } from "react";
import { MovieBookingForm, MovieDetails } from "../components";
import { useLocation, useParams } from "react-router-dom";

function DetailsAndBook(props) {
  const [datas, setDatas] = useState([]);
  const [idParam, setIdParam] = useState(null);

  const params = useParams();
  const location = useLocation();
  // redirectDataStoring()

  const getData = async () => {
    // console.log("getData Runned");

    const redirectData = location.state?.data;

    const { id } = params;

    const convertId = Number(id);

    setIdParam(convertId);

    if (!id) {
      console.log("Data not exist");
      // console.log("Go to Home Page");
    } else if(!redirectData && id){
      try {
        const response = await fetch(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        const responseJson = await response.json();
        console.log(response);
        const desiredData = await responseJson.find(
          (obj) => obj.show.id == idParam
        );
        setDatas(desiredData);
        console.log(datas, "UseState");
      } catch (error) {
        console.log(err);
      }
    }
     else if (convertId == redirectData.show.id) {
      console.log(
        "convertId == redirectData.show.id",
        convertId == redirectData.show.id
      );
      setDatas(redirectData);
      console.log(datas, "Set Redirected Data");
    } else {
      console.log(redirectData.show.id, "data does not match");

      
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <MovieDetails />

      {/* <div>{datas === [] ? <p>Go To Home Page</p> : setDatas(redirectData)}</div> */}
      {/* <div>{datas == [] ? "Empty" : datas.show.name}</div> */}
      <MovieBookingForm />
    </>
  );
}

export default DetailsAndBook;
