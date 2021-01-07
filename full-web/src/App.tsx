import React from "react";
import GlobalStyles from "./styles/global";
import Login from "./pages/SignIn";

const App: React.FC = () => {
  return (
    <>
      <Login />
      <GlobalStyles/>
    </>
  );
};

export default App;
