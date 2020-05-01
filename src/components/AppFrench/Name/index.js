// == Import npm
import React from 'react';

// == Import
import opquastBadge from 'src/assets/opquast.svg';
import githubLogo from 'src/assets/github.png';
import NameStyled from 'src/components/AppEnglish/Name/NameStyled';

// == Composant
const Name = () => (
  <NameStyled>
    <h1>Quentin CHARLIE</h1>
    <h2>Developpeur Web spécialisé React.js Redux</h2>
    <div className="images">
      <a href="https://github.com/QuentinCharlie" target="_blank" rel="noopener noreferrer">
        <img className="github" src={githubLogo} alt="Log github" />
      </a>
      <a href="https://directory.opquast.com/fr/certificat/Z4PTYH/" target="_blank" rel="noopener noreferrer">
        <img className="opquast" src={opquastBadge} alt="badge expert opquast" />
      </a>
    </div>
  </NameStyled>
);

// == Export
export default Name;
