import React, { useContext } from "react";
import Cardss from "../../components/Cards/Cardss";
import Nav from "../../components/Nav/Nav";
/// context

import { SakuraApicontext } from "../../Context/SakuraContext";

import Grid from "../../components/Grid/Grid";
import Botones from "../../components/Botones/Botones";
import { Themecontextt } from "../../Context/Themecontext";
import "./Homecarts.css";
import { useState } from "react/cjs/react.development";

const Homecarts = () => {
  const { cards } = useContext(SakuraApicontext);
  const { Theme } = useContext(Themecontextt);

  return (
    <>
      <div className={Theme === "dark" ? "light" : "dark"}>
        <Nav />
        <Grid header="Clow Cards">
          {cards.map((card, index) => (
            <Cardss
              key={index}
              spanishName={card.spanishName}
              englishName={card.englishName}
              kanji={card.kanji}
              Rōmaji={card.Rōmaji}
              appeardManga={card.appeardManga}
              appeardAnime={card.appeardAnime}
              clowCard={card.clowCard}
              meaning={card.meaning}
              cardNumber={card.cardNumber}
              sakuraCard={card.sakuraCard}
              cardsReverse={card.cardsReverse.clowReverse}
            />
          ))}
        </Grid>
        <Botones />
      </div>
    </>
  );
};

export default Homecarts;
