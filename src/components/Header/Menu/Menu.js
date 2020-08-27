import React from 'react';
import { Divider, Drawer, List, makeStyles } from '@material-ui/core';
import MenuItem from './MenuItem';

const useStyles = makeStyles((theme) => ({
  list: {
    minWidth: 250,
    paddingTop: 0,
  },
  toolbar: theme.mixins.toolbar,
}));

const Menu = ({ open, onClose }) => {
  const classes = useStyles();

  const MenuItems = [
    'Inbox',
    'Starred',
    'Send email',
    'Drafts',
  ].map((text, index) => <MenuItem text={text} key={text} />);

  return (
    <Drawer open={open} onClose={onClose}>
      <List className={classes.list}>
        <div className={classes.toolbar} />
        <Divider />
        {MenuItems}
      </List>
    </Drawer>
  );
};

export default Menu;
