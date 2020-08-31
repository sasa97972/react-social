import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  message: {
    display: 'inline-flex',
    padding: theme.spacing(2),

    '&:not(:first-child)': {
      marginTop: theme.spacing(3),
    },
  },
  messageAnswer: {
    alignSelf: 'flex-end',
    backgroundColor: theme.palette.info.light,
    borderRadius: '10px 10px 0 10px',

    '& + &': {
      marginTop: theme.spacing(1),
    },
  },
  messageQuestion: {
    alignSelf: 'flex-start',
    backgroundColor: grey[100],
    borderRadius: '10px 10px 10px 0',

    '& + &': {
      marginTop: theme.spacing(1),
    },
  },
}));

const MessagesListItem = ({ type, text }) => {
  const classes = useStyles();

  return (
    <Box
      className={clsx({
        [classes.message]: true,
        [classes.messageAnswer]: type === 'answer',
        [classes.messageQuestion]: type === 'question',
      })}
    >
      <Typography variant="body1" component="p">
        {text}
      </Typography>
    </Box>
  );
};

MessagesListItem.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default MessagesListItem;
