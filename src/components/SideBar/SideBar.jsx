/* eslint-disable react/prop-types */
import React from 'react';
import {
  AppBar,
  Box,
  Button,
  CssBaseline, Drawer, IconButton, Toolbar, Typography,
} from '@mui/material';
import { Menu } from '@mui/icons-material';

import drawer from './drawer';
import useSideBar from './useSideBar';

const drawerWidth = 240;

function SideBar({ window, children }) {
  const {
    mobileOpen,
    handleDrawerToggle,
    container,
    pathname,
    handleLogout,
  } = useSideBar(window);

  switch (pathname) {
    case '/registration':
      return children;
    case '/login':
      return children;
    default:
      return (
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
            }}
          >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <Menu />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                Система техобслуживания
              </Typography>
              <Button
                sx={{ color: 'white' }}
                onClick={handleLogout}
              >
                Выйти
              </Button>
            </Toolbar>
          </AppBar>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
          >
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
            >
              {drawer}
            </Drawer>
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
              open
            >
              {drawer}
            </Drawer>
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, maxWidth: 1440, margin: '0 auto',
            }}
          >
            <Toolbar />
            {children}
          </Box>
        </Box>
      );
  }
}

export default SideBar;
