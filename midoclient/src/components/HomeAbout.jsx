import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { keyframes } from '@mui/system';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HomeAbout = () => {
  return (
    <Box
      sx={{
        padding: { xs: '3rem 1rem', md: '5rem 2rem' },
        backgroundColor: '#f8fafc',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                borderRadius: '1rem',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                animation: `${fadeIn} 1s ease-out`,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.02)',
                },
              }}
            >
              <img
                src="homebanner.png"
                alt="Company Image"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: '-20%',
                  left: '-20%',
                  width: '140%',
                  height: '140%',
                  borderRadius: '50%',
                  backgroundColor: '#3498db',
                  opacity: 0.1,
                  zIndex: -1,
                  transform: 'rotate(-30deg)',
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ animation: `${fadeIn} 1s ease-out 0.3s both` }}>
              <Typography variant="h3" gutterBottom sx={{ color: '#2c3e50', fontWeight: 700, mb: 3 }}>
                Who Are We?
              </Typography>
              <Typography variant="body1" sx={{ color: '#34495e', mb: 3, lineHeight: 1.8 }}>
                Mido Tech Mattress, founded in 2016, is on a mission to revolutionize sleep. We are dedicated to crafting premium mattresses and sleep products that enhance comfort and elevate quality of life.
              </Typography>
              <Typography variant="body1" sx={{ color: '#34495e', mb: 3, lineHeight: 1.8 }}>
                Our passion for innovation extends beyond mattresses, encompassing confectionery and furniture products under various brands. We proudly serve both local and international markets, constantly pushing the boundaries of comfort and design.
              </Typography>
              <Button
                component={Link}
                to="/about"
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: '30px',
                  padding: '0.75rem 2rem',
                  fontSize: '1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  transition: 'all 0.3s ease-out',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                  },
                }}
              >
                Discover Our Story
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeAbout;