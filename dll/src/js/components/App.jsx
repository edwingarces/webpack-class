import React, { useState } from 'react';
import Element from './Eelement';
import data from '../data.json';
import logo from '../../images/platzi.png';
import video from '../../video/que-es-core.mp4';
import '../../sass/sass.scss';
import '../../less/less.less';
import '../../stylus/stylus.styl';

const App = () => {
  const [loadersData, setData] = useState([]);
  const handleClick = () => {
    setData(data.loaders);
  }
  return (
    <>
      <p className="sass">
        Esto es sass
      </p>
      <p className="less">
        Esto es less
      </p>
      <p className="stylus">
        Esto es stylus
      </p>
      <p className="post-css">
        Esto es postcss
      </p>
      App utilizando React.js y JSX
      <div>
        <video src={video} width="360" controls poster={logo} ></video>
      </div>
      <div>
        <img src={logo} alt="logo" width="45px" />
      </div>
      <ul>
        {loadersData.map((loader) => <Element key={loader.id} name={loader.name} /> )}
      </ul>
      <button onClick={handleClick}>Mostrar lo aprendido hasta el momento</button>
    </>
  );
};

export default App;