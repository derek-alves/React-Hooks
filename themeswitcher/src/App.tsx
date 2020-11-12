import React from "react";
import Header from "./components/Header";
import { ThemeProvider,DefaultTheme } from "styled-components";
import usePersistedState from './utils/usePersistedState';

import dark from './styles/themes/dark';
import light from "./styles/themes/light";
import GlobalStyle from "./styles/global";

function App() {
  const [theme,setTheme] = usePersistedState<DefaultTheme>('theme',light);

  const toggleTheme = () =>{
    setTheme(theme.title ==="light" ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header toggleTheme={toggleTheme}/>
        <GlobalStyle/>
      </div>
    </ThemeProvider>
  );
}

export default App;
