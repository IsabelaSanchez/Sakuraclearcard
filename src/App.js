import React from "react";
import { GlobalStyle } from "./GlobalStyled";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homefirst from "./pages/Homefirst/Homefirst";
import Homecarts from "./pages/Homecarts/Homecarts";
import SakuraProvider from "./Context/SakuraContext";
import ThemeProvider from "./Context/Themecontext";
import FavoritesProvider from "./Context/Favoritescontext";
import Favorites from "./pages/Favorites";

const App = () => (
  <Router>
    <FavoritesProvider>
      <ThemeProvider>
        <SakuraProvider>
          <Routes>
            <Route path="/" element={<Homefirst />} />
            <Route path="/homecarts" element={<Homecarts />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
          <GlobalStyle />
        </SakuraProvider>
      </ThemeProvider>
    </FavoritesProvider>
  </Router>
);

export default App;
