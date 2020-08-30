import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import MainContainer from './components/MainContainer/MainContainer';
import Routing from './components/Routing/Routing';

import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <MainContainer>
          <Routing />
        </MainContainer>
      </Router>
    </div>
  );
};

export default App;
