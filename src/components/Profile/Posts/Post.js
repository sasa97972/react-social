import React from 'react';
import {
  Typography,
  Avatar,
  Card,
  CardContent,
  CardHeader,
  makeStyles,
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: red[500],
  },
  card: {
    marginBottom: theme.spacing(3),
  },
}));

const Post = ({ name, text, date }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Avatar className={classes.avatar}>OD</Avatar>}
        title={name}
        subheader={date}
      />
      <CardContent>
        <Typography variant="body2" color="textPrimary" component="p">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Post;