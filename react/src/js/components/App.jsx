import React, { useState } from 'react';
import Element from './Eelement';
import data from '../data.json';

const App = () => {
  const [loadersData, setData] = useState([]);
  const handleClick = () => {
    setData(data.loaders);
  }
  return (
    <>
      App utilizando React.js y JSX
      <ul>
        {loadersData.map((loader) => <Element key={loader.id} name={loader.name} /> )}
      </ul>
      <button onClick={handleClick}>Mostrar lo aprendido hasta el momento</button>
    </>
  );
};

export default App;