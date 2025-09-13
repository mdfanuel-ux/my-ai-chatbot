/*import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json'; // ← one level up from src/
Amplify.configure(outputs);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@aws-amplify/ui-react/styles.css';

console.log('Amplify outputs:', outputs);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
*/
// src/main.tsx (TEMP)
import { Amplify } from 'aws-amplify';
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'us-XXXX-XXXXXXXXX',
      userPoolClientId: 'XXXXXXXXXXXXXXXXXXXX',
    },
    region: 'us-XXXX-1',
    loginWith: { email: true },
  },
});
