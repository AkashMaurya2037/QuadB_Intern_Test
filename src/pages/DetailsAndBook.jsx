import { useState, React, useEffect } from "react";
import { MovieBookingForm, MovieDetails } from "../components";
import { useLocation, useParams } from "react-router-dom";

function DetailsAndBook(props) {
  const params = useParams();
  const { id } = params;
  
  const [datas, setDatas] = useState([]);

  const location = useLocation();
  const redirectData = location.state?.data;

  const getData = async () => {
    const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const responseJson = await response.json();
    console.log(response)
    const desiredData = await responseJson.find((obj) => obj.show.id === 42181);

    setDatas(await desiredData)
    console.log(datas, "UseState")
  };

  useEffect(() => {
    getData();

  }, []);


  console.log(redirectData, "Data");
  // console.warn(id);

  // console.log(location, "Location");



  // console.log(state)

  return (
    <>
      <MovieDetails />
      {/* <div>{datas === undefined ? <p>Go To Home Page</p> : setDatas(redirectData)}</div> */}
      {/* <div>{datas}</div> */}
      <MovieBookingForm />
    </>
  );
}

export default DetailsAndBook;
