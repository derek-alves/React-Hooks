import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Dashboard from "../pages/Dashboard";

const dashBoardRoutes: React.FC = () => {
  return (
      <Switch>
        <Route path="/" exact component={Dashboard} />
      </Switch>
  );
};

export default dashBoardRoutes;
