import React from 'react';
import {
  makeStyles,
  Typography,
  Container,
  Grid,
  Paper,
  Divider,
} from '@material-ui/core';
import UsersList from './Users/UsersList';
import Messages from './Messages/Messages';

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

const Dialogs = () => {
  const classes = useStyles();
  const currentUser = 'User Name 1';

  return (
    <Container className={classes.wrapper}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography variant="h4" component="h1" className={classes.header}>
              Dialogs
            </Typography>
            <Divider />
            <UsersList />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Messages userName={currentUser} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dialogs;
