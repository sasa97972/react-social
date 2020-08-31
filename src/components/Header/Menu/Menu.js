import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Drawer, List, makeStyles, IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { useLocation } from 'react-router-dom';
import { menuWidth } from '../config';
import { routes } from '../../../config/routes';
import MenuItem from './MenuItem';

const useStyles = makeStyles((theme) => ({
  list: {
    minWidth: 250,
    paddingTop: 0,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  drawerOpen: {
    width: menuWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
}));

const Menu = ({ open, onClose }) => {
  const classes = useStyles();
  const { pathname } = useLocation();

  const MenuItems = routes.map(({ path: href, name, Icon }, index) => (
    <MenuItem
      key={index}
      selected={href === pathname}
      href={href}
      name={name}
      Icon={Icon}
    />
  ));

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={onClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <List className={classes.list}>{MenuItems}</List>
    </Drawer>
  );
};

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Menu;
