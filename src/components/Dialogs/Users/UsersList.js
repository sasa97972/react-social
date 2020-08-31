import React from 'react';
import { List } from '@material-ui/core';
import UsersItem from './UsersItem';

const UsersList = () => {
  const usersCount = 6;

  const Users = new Array(usersCount)
    .fill('')
    .map((_, i) => (
      <UsersItem
        key={i}
        name={`User Name ${i + 1}`}
        avatar={`https://material-ui.com/static/images/avatar/${i + 1}.jpg`}
        selected={i === 0}
      />
    ));

  return <List>{Users}</List>;
};

export default UsersList;
