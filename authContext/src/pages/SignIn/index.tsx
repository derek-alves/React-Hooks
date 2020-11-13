import React,{useContext} from "react";

import { Container, Form, Button } from "./styles";

import AuthContext from '../../contexts/auth';

const SignIn: React.FC = () => {
  
  const { signed,signIn } = useContext(AuthContext);

  console.log(signed);

  function handleSignIn() {
    signIn();
  }

  return (
    <Container>
      <Form>
        <Button onClick={handleSignIn}>Logar</Button>
      </Form>
    </Container>
  );
};

export default SignIn;
