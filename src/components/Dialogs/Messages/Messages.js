import React from 'react';
import { Divider, makeStyles, Typography } from '@material-ui/core';
import MessagesList from './MessagesList';
import { useParams } from 'react-router-dom';

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
  wrapper: {
    paddingTop: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
  },
  header: {
    marginBottom: theme.spacing(1),
  },
}));

const Messages = () => {
  const classes = useStyles();
  const { dialogId } = useParams();

  return (
    <>
      <Typography variant="body1" component="h2" className={classes.header}>
        Dialog with {dialogId}
      </Typography>
      <Divider />
      <MessagesList messages={Number(dialogId) === 1 ? messages : []} />
    </>
  );
};

export default Messages;
