import React from "react";
import { StarFill } from 'react-bootstrap-icons';

function Home() {
  return (
    <header>
      <div className="bx">
        <img src="./assets/threater.jpg" alt="asdf" />
        <div className="content">
            <h3>War</h3>
            <p>War,Histroy</p>
            <h6><span>Rating</span> <StarFill /> 8.0</h6>
        </div>
      </div>
    </header>
  );
}

export default Home;
