import React from 'react';
import ReactDOM from 'react-dom';
import '../src/client/styles/index.css';
import App from './client/containers/app/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
