import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import RouteReducer from './components/reducers/RouteReducer'

const store = createStore(RouteReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
const renderapp = () => root.render(
  <React.StrictMode>
    <App store = {store} />
  </React.StrictMode>
);

renderapp();
store.subscribe(renderapp)


reportWebVitals();
