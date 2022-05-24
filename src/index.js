import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { PersistGate } from 'redux-persist/integration/react'
import store from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
    {/* </PersistGate> */}
  </Provider>
);

