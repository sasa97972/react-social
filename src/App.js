import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import MainContainer from './components/MainContainer/MainContainer';
import Dialogs from './components/Dialogs/Dialogs';

import './App.scss';

const App = () => {
  return (
    <div className="root">
      <Router>
        <Header />
        <MainContainer>
          <Switch>
            <Route path="/" exact>
              <Profile />
            </Route>
            <Route path="/dialogs" exact>
              <Dialogs />
            </Route>
          </Switch>
        </MainContainer>
      </Router>
    </div>
  );
};

export default App;
