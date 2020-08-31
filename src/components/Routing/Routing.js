import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../../config/routes';
import { CSSTransition } from 'react-transition-group';
import classes from './Routing.module.scss';

const Routing = () => {
  const ref = React.createRef();
  const Routes = routes.map(({ path, Component }) => (
    <Route key={path} path={path} exact>
      <CSSTransition
        in
        appear
        timeout={500}
        classNames={{
          appearActive: classes['fade-appear-active'],
          appearDone: classes['fade-enter-done'],
        }}
        nodeRef={ref}
        unmountOnExit
      >
        <div ref={ref} className={classes.fade}>
          {Component && <Component />}
        </div>
      </CSSTransition>
    </Route>
  ));

  return <Switch>{Routes}</Switch>;
};

export default Routing;
