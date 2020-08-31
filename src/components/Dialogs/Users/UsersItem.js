import React, { forwardRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';

const UsersItem = ({ id, name, avatar, selected }) => {
  const RouterLink = useMemo(
    () =>
      forwardRef((itemProps, ref) => (
        <Link
          to={{
            pathname: `/dialogs/${id}`,
            state: { dialogId: id },
          }}
          ref={ref}
          {...itemProps}
        />
      )),
    [id]
  );

  return (
    <ListItem button selected={selected} component={RouterLink}>
      <ListItemAvatar>
        <Avatar alt={name} src={avatar} />
      </ListItemAvatar>
      <ListItemText primary={name} />
    </ListItem>
  );
};

export default UsersItem;
