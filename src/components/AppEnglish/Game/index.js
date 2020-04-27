/* eslint-disable max-len */
/* eslint-disable jsx-a11y/media-has-caption */
// == Import npm
import React from 'react';
import ReactPlayer from 'react-player';
// import Videojs from 'video.js';
// import { Segment } from 'semantic-ui-react';

// == Import
import GameStyled from './GameStyled';

// == Composant
const Game = () => {

  return (
    <GameStyled>
      <h1>School project, from scratch and full-remote, one month only</h1>
      <p>
        It's a website offering interactive support for a paper role-playing game oriented on the Pokémon license. <br />
        Multiplayer, coded for the "game" part with React / Redux (axios, middleware, dnd) with dedicated servers per game in Node.js.
      </p>
      <p>
        The Back-end and the “classic” front pages were produced in PHP with Symfony by the back-enders of the team.
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
