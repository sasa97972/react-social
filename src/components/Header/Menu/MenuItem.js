import React, { useMemo, forwardRef } from 'react';
import PropTypes from 'prop-types';
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

MenuItem.propTypes = {
  name: PropTypes.string,
  Icon: PropTypes.object,
  href: PropTypes.string,
  selected: PropTypes.bool,
};

export default MenuItem;
