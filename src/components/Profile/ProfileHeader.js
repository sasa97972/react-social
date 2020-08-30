import React from 'react';
import { makeStyles, Box, Avatar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
  },
  title: {
    marginLeft: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const ProfileHeader = () => {
  const classes = useStyles();

  return (
    <Box className={classes.header}>
      <Avatar
        className={classes.avatar}
        alt="Oleksandr Dulia"
        src="https://material-ui.com/static/images/avatar/1.jpg"
      />
      <Typography variant="h5" component="h1" className={classes.title}>
        Oleksandr Dulia
      </Typography>
    </Box>
  );
};

export default ProfileHeader;
