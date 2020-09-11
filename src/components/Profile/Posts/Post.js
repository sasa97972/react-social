import React from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  makeStyles,
  Badge,
  IconButton,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: red[500],
  },
  card: {
    marginBottom: theme.spacing(3),
  },
  toolbar: {
    textAlign: 'right',
  },
}));

const Post = ({ name, text, date, likesCount }) => {
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
      <CardActions disableSpacing>
        <IconButton aria-label="like this post">
          <Badge badgeContent={likesCount} color="secondary">
            <FavoriteIcon />
          </Badge>
        </IconButton>
      </CardActions>
    </Card>
  );
};

Post.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  likesCount: PropTypes.number,
};

export default Post;
