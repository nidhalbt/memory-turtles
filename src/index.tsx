import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './libs.scss';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <section className="section">
    <div className="container">
      <h1 className="title">
        Hello World
      </h1>
      <p className="subtitle">
        My first website with <strong>Bulma</strong>!
      </p>
    </div>
  </section>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
