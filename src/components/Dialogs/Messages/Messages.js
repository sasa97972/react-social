import React, { useEffect, useState } from 'react';
import { Divider, makeStyles, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import MessagesList from './MessagesList';
import { useParams } from 'react-router-dom';

const fetchedMessages = [
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
  divider: {
    marginBottom: theme.spacing(1),
  },
}));

const Messages = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);
  const { dialogId } = useParams();

  useEffect(() => {
    setLoading(true);
    downloadMessages(dialogId).then((messages) => {
      setMessages(messages);
      setLoading(false);
    });
  }, [dialogId]);

  const downloadMessages = async (dialogId) => {
    function fetchData() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(Number(dialogId) === 2 ? fetchedMessages : []);
        }, 1500);
      });
    }
    const messages = await fetchData();
    return messages;
  };

  return (
    <>
      <div>
        <Typography variant="body1" component="h2" className={classes.header}>
          Dialog with User Name {dialogId}
        </Typography>
        <Divider className={classes.divider} />
        {loading ? (
          <Skeleton variant="rect" height={250} />
        ) : (
          <MessagesList messages={messages} />
        )}
      </div>
    </>
  );
};

export default Messages;
