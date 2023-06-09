import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { DetailsAndBook, Home } from "./pages";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';


function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/movie-details/:id" element={< DetailsAndBook/>} />
            <Route path="/" element={<Home />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
