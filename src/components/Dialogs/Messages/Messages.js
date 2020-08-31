import React from 'react';
import PropTypes from 'prop-types';
import { Divider, makeStyles, Typography } from '@material-ui/core';
import MessagesList from './MessagesList';

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

const Messages = ({ userName }) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="body1" component="h2" className={classes.header}>
        Dialog with {userName}
      </Typography>
      <Divider />
      <MessagesList />
    </>
  );
};

Messages.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Messages;
