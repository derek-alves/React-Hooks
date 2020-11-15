import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const Form = styled.div`
    background:#333;
    width:50vw;
    height:50vh;
    min-width:400px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:1rem;

    @media(min-width:700px){
     max-width:700px;
    }
`;


export const Button = styled.button`
  height:30px;
  width:40%;
  max-width:300px;
  border-radius:1rem;
  text-decoration:none;
`;
