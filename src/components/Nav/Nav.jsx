import React, { useState } from "react";

import sakura from "../../img/Wiki-wordmark.png";
import { Link } from "react-router-dom";
import Themeboton from "../Themeboton/Themeboton";
import "./Nav.css";

const Nav = () => {
  const [isOpen, setopen] = useState(false);

  const handleclick = () => {
    setopen(!isOpen);
  };
  return (
    <header>
      <div className="navegation">
        <Link to="/Homecarts">
          <img src={sakura} />
        </Link>
        <div className="menu" onClick={handleclick}>
          <div>&#9776;</div>
        </div>
        <div className={isOpen ? "circleopen" : "circle"}>
          <div className="content">
            <Link to="/Homecarts" className="wavy">
              Cards
            </Link>
            <Link to="/Favorites" className="wavy">
              My favorites
            </Link>

            <Link to="/Personajes" className="wavy">
              Characters
            </Link>

            <Themeboton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
