import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FitloContextProvider from "./context/FitloContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <FitloContextProvider>
        <App />
      </FitloContextProvider>
    </BrowserRouter>
  </StrictMode>
);
