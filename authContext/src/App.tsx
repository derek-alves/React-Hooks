import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "../src/routes";

import { AuthProvider } from "./contexts/auth";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
