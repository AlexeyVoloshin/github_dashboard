import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { routes } from './core/routes';
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={routes.static.mainPage} component={MainPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
