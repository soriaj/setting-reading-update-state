import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Stuff from './javiers-tests/Stuff';
// import App from './App';
import App from './paltrows-power-toes/App';
import { BrowserRouter} from 'react-router-dom';
// import HelloWorld from './state-drills/HelloWorld';
// import Bomb from './state-drills/Bomb';
// import RouletteGun from './state-drills/RouletteGun';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
   <BrowserRouter>
      <App />
   </BrowserRouter>,
   document.getElementById('root')
   );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
