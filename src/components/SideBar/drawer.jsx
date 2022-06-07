import React from 'react';

import { MiscellaneousServices } from '@mui/icons-material';
import { Divider, List, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

import MenuItem from './MenuItem';
import menuSideBar from './menuSideBar';

const drawer = (
  <div>
    <Toolbar>
      <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
        <MiscellaneousServices fontSize="large" />
      </Link>
    </Toolbar>
    <Divider />
    <List>
      {menuSideBar.map((menuText) => (
        <MenuItem key={menuText.id} menuText={menuText} />
      ))}
    </List>
    <Divider />
  </div>
);

export default drawer;
