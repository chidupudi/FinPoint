import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button, Avatar } from '@mui/material';
import { Menu as MenuIcon, AccountCircle as AccountCircleIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import logo from './logo.png'; // Adjust the path to your logo

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function DrawerAppBar({ window }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, color: 'yellow' }}>
        FinPoint
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton component={Link} to={`/${item.toLowerCase()}`} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ backgroundColor: '#1976d2' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Avatar
            alt="Logo"
            src={logo}
            sx={{ display: { xs: 'none', sm: 'block' }, mr: 2 }}
          />
          <Typography
            variant="h6"
            component={Link}
            to="/home"
            sx={{ flexGrow: 1, color: 'white', textDecoration: 'none',fontWeight: 'bold', display: { xs: 'none', sm: 'block' } }}
          >
            FinPoint
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                component={Link}
                to={`/${item.toLowerCase()}`}
                sx={{
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: '#fff',
                    color: '#1976d2',
                    transition: 'all 0.3s ease-in-out',
                  }
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <IconButton
            component={Link}
            to="/profile"
            color="inherit"
            sx={{ ml: 2, display: { xs: 'none', sm: 'block' } }}
          >
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >
        {drawer}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {/* Main content of the page */}
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
