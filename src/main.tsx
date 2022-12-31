import React from 'react';
import ReactDOM from 'react-dom/client';

import { Global } from '@emotion/react';

import App from '@/App';
import globalStyle from '@/styles/globalStyle';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Global styles={globalStyle} />
    <App />
  </React.StrictMode>,
);
