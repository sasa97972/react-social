import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';
import MessagesListItem from './MessagesListItem';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    marginTop: theme.spacing(1),
  },
}));

const MessagesList = ({ messages }) => {
  const classes = useStyles();

  const Messages =
    messages && messages.length ? (
      messages.map(({ id, ...message }) => (
        <MessagesListItem key={id} {...message} />
      ))
    ) : (
      <Typography variant="body1" component="p">
        There are no messages
      </Typography>
    );

  return <Box className={classes.container}>{Messages}</Box>;
};

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
};

export default MessagesList;
