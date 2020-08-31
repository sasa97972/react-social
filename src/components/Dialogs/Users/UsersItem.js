import React from 'react';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';

const UsersItem = ({ name, avatar, selected }) => {
  return (
    <ListItem button selected={selected}>
      <ListItemAvatar>
        <Avatar alt={name} src={avatar} />
      </ListItemAvatar>
      <ListItemText primary={name} />
    </ListItem>
  );
};

export default UsersItem;
