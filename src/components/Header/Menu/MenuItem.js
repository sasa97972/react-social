import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

const MenuItem = ({ text, Icon, selected }) => {
  return (
    <ListItem button selected={selected}>
      {Icon && (
        <ListItemIcon>
          <Icon color={selected ? 'primary' : 'inherit'} />
        </ListItemIcon>
      )}
      <ListItemText primary={text} />
    </ListItem>
  );
};

export default MenuItem;
