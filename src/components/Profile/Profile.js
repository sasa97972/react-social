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
          image="https://www.iphones.ru/wp-content/uploads/2018/07/55BA2802-3DA6-417F-9604-EC147507B547.jpeg"
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
