import React from 'react';
import { makeStyles, Typography, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  wrapper: {},
}));

const Dialogs = () => {
  const classes = useStyles();

  return (
    <Container className={classes.wrapper}>
      <Typography variant="h2" component="h1">
        Dialogs
      </Typography>
    </Container>
  );
};

export default Dialogs;
