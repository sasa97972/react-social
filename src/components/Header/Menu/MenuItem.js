import React, { useMemo, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

const MenuItem = ({ name, Icon, href, selected }) => {
  const RouterLink = useMemo(
    () =>
      forwardRef((itemProps, ref) => (
        <Link to={href || '#'} ref={ref} {...itemProps} />
      )),
    [href]
  );

  return (
    <ListItem button selected={selected} component={RouterLink}>
      {Icon && (
        <ListItemIcon>
          <Icon color={selected ? 'primary' : 'inherit'} />
        </ListItemIcon>
      )}
      <ListItemText primary={name} />
    </ListItem>
  );
};

export default MenuItem;
