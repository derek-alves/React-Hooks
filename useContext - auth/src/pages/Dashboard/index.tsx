import React, { useContext } from "react";

import AuthContext from "../../contexts/auth";
import { Container, Button } from "./styles";

const Dashboard: React.FC = () => {
  const { signOut } = useContext(AuthContext);

  function handleSignOut() {
    signOut();
  }
  return (
    <Container>
      <Button onClick={handleSignOut}>Logout</Button>
    </Container>
  );
};

export default Dashboard;
