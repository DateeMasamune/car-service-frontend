/* eslint-disable react/prop-types */
import React, { useCallback } from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

function MenuItem({ menuText }) {
  const location = useLocation();
  // const select = location.pathname === menuText.link;
  const select = useCallback((url) => (url === menuText.link), [location.pathname]);
  return (
    <Link style={{ textDecoration: 'none', color: 'black' }} to={menuText.link}>
      <ListItem
        button
        key={menuText.name}
        style={{ background: select(location.pathname) ? 'rgba(0, 0, 0, 0.04)' : '' }}
      >
        <ListItemIcon>
          {menuText.icon}
        </ListItemIcon>
        <ListItemText primary={menuText.name} />
      </ListItem>
    </Link>

  );
}

export default MenuItem;
