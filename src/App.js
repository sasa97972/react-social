import React from 'react';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';

import './App.scss';
import MainContainer from './components/MainContainer/MainContainer';

const App = () => {
  return (
    <div className="root">
      <Header />
      <MainContainer>
        <Profile />
      </MainContainer>
    </div>
  );
};

export default App;
