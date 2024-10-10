import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import KnivatContextProvider from "./context/KnivatContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <KnivatContextProvider>
        <App />
      </KnivatContextProvider>
    </BrowserRouter>
  </StrictMode>
);
