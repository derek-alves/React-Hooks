import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
  font-size: 60%;
}
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  body{
    background:#F5f5f5;
    font-size:14px;
    color:#333;
    font-family:sans-serif;
  }

  html,body,#root{
  height: 100vh;
}

#root{
  display: flex;
  align-items: center;
  justify-content: center;
}

`;
