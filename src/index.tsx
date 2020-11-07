import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Website from "./Website/Website";

ReactDOM.render(
  <React.StrictMode>
      <Website></Website>
      {/*<App website = {<Website/>}/>*/}
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
