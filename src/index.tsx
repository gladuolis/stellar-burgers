import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './services/store';
import App from './components/app/app';
import './index.css';
=======
import App from './components/app/app';
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container!);

root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
=======
    <App />
  </React.StrictMode>
);
>>>>>>> 3d08896f12100354fae3683441e2347453f6c0bd
