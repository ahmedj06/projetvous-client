import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/reactbase/App';
import registerServiceWorker from './components/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
