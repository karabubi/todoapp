// src/index.js

//import ReactDOM from "react-dom";
//import "./index.css";
import App from "../App.js"; // This should be updated to App.jsx
import reportWebVitals from "../reportWebVitals";

//ReactDOM.render(
// <React.StrictMode>
// </React.StrictMode>,
//  document.getElementById("root")
//);

//reportWebVitals();
//----------------------------

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import reportWebVitals from "./reportWebVitals";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals();
