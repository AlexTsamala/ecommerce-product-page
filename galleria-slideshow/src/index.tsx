import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux/es/exports';
import store from './store'

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
  
);

