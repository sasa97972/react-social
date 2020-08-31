import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import MessagesListItem from './MessagesListItem';

const messages = [
  {
    id: 1,
    type: 'question',
    text: 'Adagsh bahj agsd hjagh gashj gahjsg hasg dhjagsdhags das',
  },
  {
    id: 2,
    type: 'answer',
    text: 'Adagsh bahj agsd hjagh gashj gahjsg hasg dhjagsdhags das',
  },
  {
    id: 3,
    type: 'answer',
    text: 'Adagsh bahj agsd hjagh gashj gahjsg hasg dhjagsdhags das',
  },
  {
    id: 4,
    type: 'question',
    text: 'Adagsh bahj agsd hjagh gashj gahjsg hasg dhjagsdhags das',
  },
  {
    id: 5,
    type: 'question',
    text: 'Adagsh bahj agsd hjagh gashj gahjsg hasg dhjagsdhags das',
  },
];

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    marginTop: theme.spacing(1),
  },
}));

const MessagesList = () => {
  const classes = useStyles();

  const Messages = messages.map(({ id, ...message }) => (
    <MessagesListItem key={id} {...message} />
  ));

  return <Box className={classes.container}>{Messages}</Box>;
};

export default MessagesList;
