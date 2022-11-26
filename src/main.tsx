import React from 'react';
import { Global } from '@emotion/react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import GlobalStyle from '@/styles/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Global styles={GlobalStyle} />
    <App />
  </React.StrictMode>,
);
