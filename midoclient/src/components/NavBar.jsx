import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from 'react-bootstrap';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250, bgcolor: '#f8f8f8' }}>
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.name} component={Link} to={item.path} onClick={handleDrawerToggle}>
            <ListItemText primary={item.name} sx={{ color: '#333' }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Container>
        <AppBar position="static" elevation={0} sx={{ bgcolor: '#ffffff' }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" component="div" sx={{ color: '#333', fontWeight: 600 }}>
              Mido Mattress
            </Typography>
            {isMobile ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ color: '#333' }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {menuItems.map((item) => (
                    <Button
                      key={item.name}
                      component={Link}
                      to={item.path}
                      sx={{
                        color: '#333',
                        '&:hover': {
                          bgcolor: '#f0f0f0',
                        },
                        textTransform: 'none',
                        fontSize: '1rem',
                      }}
                    >
                      {item.name}
                    </Button>
                  ))}
                </Box>
              </Box>
            )}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton sx={{ color: '#333' }} component="a" href="https://facebook.com" target="_blank">
                  <FacebookIcon />
                </IconButton>
                <IconButton sx={{ color: '#333' }} component="a" href="https://instagram.com" target="_blank">
                  <InstagramIcon />
                </IconButton>
                <IconButton sx={{ color: '#333' }} component="a" href="https://twitter.com" target="_blank">
                  <TwitterIcon />
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </AppBar>
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: 250, bgcolor: '#f8f8f8' },
          }}
        >
          {drawer}
        </Drawer>
      </Container>
    </>
  );
};

export default NavBar;
