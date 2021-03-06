import React,{useContext} from "react";
import Switch from 'react-switch';
import {shade} from 'polished';

import {ThemeContext} from 'styled-components';
import { Container } from "./styles";

interface Props{
  toggleTheme():void;
}
const Header: React.FC<Props>= ({toggleTheme}) => {
  const {colors,title} = useContext(ThemeContext);
  return (
    <Container>
      Hello World

      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        onColor={shade(0.3,colors.secundary)}
        offColor={shade(0.3,colors.primary)}

      />
    </Container>
  );
};

export default Header;
