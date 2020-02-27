// Import npm
import React from 'react';
import PropTypes from 'prop-types';

import AppFrench from 'src/components/AppFrench';
import AppEnglish from 'src/components/AppEnglish';

// Composant
const App = ({ lang }) => (
  <>
    {lang === 'fr' && <AppFrench />}
    {lang === 'gb' && <AppEnglish />}
  </>
);

App.propTypes = {
  lang: PropTypes.string.isRequired,
};

// Export
export default App;
