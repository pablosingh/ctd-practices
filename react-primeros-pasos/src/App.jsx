import React from 'react';
import PropTypes from 'prop-types';

const App = ({ titulo, subtitulo }) => {
  return (
    <>
      <h1>Props obligatorias y por Default</h1>
      <h3>{titulo}</h3>
      <h3>{subtitulo}</h3>
    </>
  );
};

App.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired,
};

App.defaultProps = {
  titulo: 'Este es un titulo por defecto',
  subtitulo: 'Este es un subtitulo por defecto',
};

export default App;
