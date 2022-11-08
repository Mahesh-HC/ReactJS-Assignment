
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Problem02/Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>
);




