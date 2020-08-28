import React from 'react';
import { Button, makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
  },
  field: {
    width: 300,
    marginBottom: theme.spacing(2),
  },
}));

const ProfileForm = () => {
  const classes = useStyles();

  return (
    <form action="/" className={classes.form}>
      <TextField
        className={classes.field}
        label="New Post"
        multiline
        rows={4}
        variant="outlined"
      />
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default ProfileForm;
