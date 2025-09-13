import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json'; // ← one level up from src/
Amplify.configure(outputs);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@aws-amplify/ui-react/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
