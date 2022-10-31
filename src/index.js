import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {registerLicense} from "@syncfusion/ej2-base"
import {ContextProvider} from "./contexts/ContextProvider"

 registerLicense(
   "ORg4AjUWIQA/Gnt2VVhjQlFac11JXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0VgWX5fcXZVT2BdVEQ="
 );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
     <App />
    </ContextProvider>
  </React.StrictMode>
);


