import React from "react";
import { Navigation, Content, Box } from "../Nav//Navstyled";
import sakura from "../../img/Wiki-wordmark.png";
import { Link } from "react-router-dom";
import Themeboton from "../Themeboton/Themeboton";

const Nav = () => {
  return (
    <Navigation>
      <Link to="/Homecarts">
        <img src={sakura} />
      </Link>
      <Content>
        <Box>
          <Link to="/favorites" className="wavy">
            <span> My favorites</span>
          </Link>
          <Link to="/Homecarts" className="wavy">
            Cards
          </Link>
        </Box>
        <Themeboton />
      </Content>
    </Navigation>
  );
};

export default Nav;
