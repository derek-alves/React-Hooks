import React from "react";
import { Switch, Route } from "react-router-dom";

import SignIn from '../pages/SignIn';
import Dashboard from "../pages/Dashboard";

const authRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
    </Switch>
  );
};

export default authRoutes;
