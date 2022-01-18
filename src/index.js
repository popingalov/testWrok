import ReactDOM from 'react-dom';
import App from './App';
import react from 'react';

import 'modern-normalize/modern-normalize.css';
import 'index.css';
const root = document.querySelector('#root');

ReactDOM.render(
  <react.StrictMode>
    <App />
  </react.StrictMode>,
  root,
);
