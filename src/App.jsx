import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { MovieDetails, Home } from "./pages";


function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/movie-details" element={< MovieDetails/>} />
            <Route path="/" element={<Home />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
