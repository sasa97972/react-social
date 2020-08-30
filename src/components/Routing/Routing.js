import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Profile from '../Profile/Profile';
import Dialogs from '../Dialogs/Dialogs';
import classes from './Routing.module.scss';

const Routing = () => {
  const location = useLocation();

  return (
    <Switch location={location}>
      <Route path="/" exact>
        {(match) => {
          return (
            <CSSTransition
              classNames={{
                enter: classes['fade-enter'],
                enterActive: classes['fade-enter-active'],
                exit: classes['fade-exit'],
                exitActive: classes['fade-exit-active'],
              }}
              timeout={{ enter: 5000, exit: 0 }}
              in
              unmountOnExit
            >
              <div>
                <Profile />
              </div>
            </CSSTransition>
          );
        }}
      </Route>
      <Route path="/dialogs" exact>
        {(match) => {
          return (
            <CSSTransition
              classNames={{
                enter: classes['fade-enter'],
                enterActive: classes['fade-enter-active'],
                exit: classes['fade-exit'],
                exitActive: classes['fade-exit-active'],
              }}
              timeout={{ enter: 5000, exit: 0 }}
              in
              unmountOnExit
            >
              <div>
                <Dialogs />
              </div>
            </CSSTransition>
          );
        }}
      </Route>
    </Switch>
  );
};

export default Routing;
