import React from 'react';
import { Box } from '@material-ui/core';
import Post from './Post';

const posts = [
  {
    id: 1,
    name: 'Oleksandr Dulia',
    date: 'August 27, 2020',
    text:
      'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    likesCount: 5,
  },
  {
    id: 2,
    name: 'Oleksandr Dulia',
    date: 'April 26, 2020',
    text: 'My Birthday!! =)',
    likesCount: 27,
  },
  {
    id: 3,
    name: 'Oleksandr Dulia',
    date: 'December 31, 2019',
    text: 'Happy New Year!',
    likesCount: 10,
  },
];

const PostList = () => {
  const Posts = posts.map(({ id, ...params }) => <Post key={id} {...params} />);

  return <Box>{Posts}</Box>;
};

export default PostList;
