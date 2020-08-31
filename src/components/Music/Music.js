import React from 'react';
import { makeStyles, Typography, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  wrapper: {},
}));

const Music = () => {
  const classes = useStyles();

  return (
    <Container className={classes.wrapper}>
      <Typography variant="h2" component="h1">
        Music
      </Typography>
    </Container>
  );
};

export default Music;
