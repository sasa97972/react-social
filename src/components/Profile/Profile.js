import React from 'react';
import {
  makeStyles,
  Card,
  CardContent,
  CardMedia,
  Container,
  Box,
} from '@material-ui/core';
import ProfileHeader from './ProfileHeader';
import ProfileContent from './ProfileContent';

const useStyles = makeStyles({
  media: {
    height: 500,
  },
});

const Profile = () => {
  const classes = useStyles();

  return (
    <Box>
      <Card>
        <CardMedia
          className={classes.media}
          image="https://7oom.ru/wp-content/uploads/peizaji-01.jpg"
          title="Background Image"
        />
        <CardContent>
          <Container>
            <ProfileHeader />
            <ProfileContent />
          </Container>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Profile;
