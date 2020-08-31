import React from 'react';
import { useLocation } from 'react-router-dom';
import { List } from '@material-ui/core';
import UsersItem from './UsersItem';

const UsersList = () => {
  const usersCount = 6;
  const dialogId = useLocation().state?.dialogId;

  const Users = new Array(usersCount)
    .fill('')
    .map((_, i) => (
      <UsersItem
        key={i}
        id={i + 1}
        name={`User Name ${i + 1}`}
        avatar={`https://material-ui.com/static/images/avatar/${i + 1}.jpg`}
        selected={i + 1 === Number(dialogId)}
      />
    ));

  return <List>{Users}</List>;
};

export default UsersList;
