import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AModal from "./component/modal"

const root = createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AModal />
  </React.StrictMode>
);