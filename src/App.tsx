import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { routes } from "./core/routes";
import "./App.css";
import { CardDetails } from "./pages/CardDetails";
import { NotFoundPage } from "./pages/NotFoundPage";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={routes.static.mainPage} component={MainPage} />
          <Route path={routes.dynamic.CardDetails} component={CardDetails} />
          <Route path={"*"} component={NotFoundPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
