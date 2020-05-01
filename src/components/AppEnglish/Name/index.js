// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import opquastBadge from 'src/assets/opquast.svg';
import githubLogo from 'src/assets/github.png';
import { content } from './content';
import NameStyled from './NameStyled';

// == Composant
console.log(content);
const Name = ({ lang }) => (
  <NameStyled>
    <h1>{content.name}</h1>
    <h2>{content[lang].description}</h2>
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


Name.propTypes = {
  lang: PropTypes.string.isRequired,
};

// == Export
export default Name;
