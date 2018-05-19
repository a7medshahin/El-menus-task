import React from 'react';
import ReactDOM from 'react-dom'; //rendering engine
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
const root = document.getElementById('root');

ReactDOM.render(<App />, root );
registerServiceWorker();
