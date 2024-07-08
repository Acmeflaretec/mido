import React from 'react';
import { Box, Container, Grid, Typography, Link, Divider } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#D2232A', // Dark red background
        color: '#FFFFFF', // White text color for better contrast
        py: 6,
        borderTop: '1px solid #2d3748', // Darkened border top for contrast
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Mido Tech Mattress
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Revolutionizing sleep comfort with innovative designs and premium quality since 2016. Our commitment to your restful nights drives us to excellence.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" underline="none" sx={{ display: 'block', mb: 1, '&:hover': { color: '#FF6B6B' } }}>
              Home
            </Link>
            <Link href="/products" color="inherit" underline="none" sx={{ display: 'block', mb: 1, '&:hover': { color: '#FF6B6B' } }}>
              Our Products
            </Link>
            <Link href="/about" color="inherit" underline="none" sx={{ display: 'block', mb: 1, '&:hover': { color: '#FF6B6B' } }}>
              About Us
            </Link>
            <Link href="/contact" color="inherit" underline="none" sx={{ display: 'block', '&:hover': { color: '#FF6B6B' } }}>
              Contact Us
            </Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Information
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              123 Sleep Street, Comfort City, 12345
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Phone: (123) 456-7890
            </Typography>
            <Typography variant="body2">
              Email: info@midotechmattress.com
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4, backgroundColor: '#FFFFFF' }} /> {/* White divider for contrast */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          <Typography variant="body2" align="center" sx={{ mb: { xs: 2, md: 0 } }}>
            © {new Date().getFullYear()} Mido Tech Mattress. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
