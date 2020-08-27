import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';

const MenuItem = ({ text }) => {
  return (
    <ListItem button>
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
};

export default MenuItem;
