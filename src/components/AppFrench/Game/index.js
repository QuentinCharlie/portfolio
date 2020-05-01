/* eslint-disable max-len */
/* eslint-disable jsx-a11y/media-has-caption */
// == Import npm
import React from 'react';
import ReactPlayer from 'react-player';
// import Videojs from 'video.js';
// import { Segment } from 'semantic-ui-react';

// == Import
import GameStyled from 'src/components/AppEnglish/Game/GameStyled';

// == Composant
const Game = () => {

  return (
    <GameStyled>
      <h1>Projet de fin de formation, from scratch et full-remote, avec une durée impartie d'un mois</h1>
      <p>
        C'est un site proposant un support interactif pour un Jeu De Rôle papier orienté sur la licence Pokémon. <br />
        Multi-joueur, codé pour la partie «jeu» avec React/Redux (axios, middlewares, dnd) avec des serveurs dédiés par parties en Node.js.
      </p>
      <p>
        Le Back et les pages front « classiques » ont été réalisées en PHP avec Symfony par les backeux de l'équipe.
      </p>
      <ReactPlayer
        light="https://i.imgur.com/Z0W8q02.png"
        className="player"
        playing
        controls
        url="https://youtu.be/Yfm2-PH8iTU?t=2760"
      />
    </GameStyled>
  );
};

// == Export
export default Game;
