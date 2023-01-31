import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
import App from "./App";
// import { AuthContextProvider } from "./context/AuthContext";
// import { DarkModeContextProvider } from "./context/darkModeContext";
import { TestAuthContextProvider } from "./context/testAuthContext";
import { Provider } from "react-redux";
import store, { persistor } from "redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { GlobalStyles, theme } from "styles";
import { Global, ThemeProvider } from "@emotion/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  // <AuthContextProvider>
  <ThemeProvider theme={theme}>
    <Global styles={GlobalStyles} />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TestAuthContextProvider>
          <App />
        </TestAuthContextProvider>
      </PersistGate>
    </Provider>
  </ThemeProvider>
  // </AuthContextProvider>
  // </React.StrictMode>
);
