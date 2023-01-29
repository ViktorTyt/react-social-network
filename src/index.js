import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
import App from "./App";
// import { AuthContextProvider } from "./context/AuthContext";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { TestAuthContextProvider } from "./context/testAuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  // <AuthContextProvider>
  <DarkModeContextProvider>
    <TestAuthContextProvider>
      <App />
    </TestAuthContextProvider>
  </DarkModeContextProvider>
  // </AuthContextProvider>
  // </React.StrictMode>
);
