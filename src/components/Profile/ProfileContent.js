import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import ProfileForm from './ProfileForm';
import PostList from './Posts/PostList';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
}));

const ProfileContent = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Typography variant="h4" component="p" className={classes.title}>
        My Posts
      </Typography>
      <ProfileForm />
      <PostList />
    </Box>
  );
};

export default ProfileContent;
