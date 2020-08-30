import React from 'react';
import PropTypes from 'prop-types';
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
    <Card className={classes.card} variant="outlined">
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

Post.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};

export default Post;
