import React from 'react';
import { Box, Typography, Container, useMediaQuery, useTheme } from '@mui/material';
import { keyframes } from '@mui/system';

// Define animations
const float = keyframes`
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-10px) scale(1.01); }
`;

const fadeInSlideUp = keyframes`
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HomeBanner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const ImageComponent = () => (
    <Box
      sx={{
        width: '100%',
        maxWidth: { xs: '400px', md: '600px' },
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          borderRadius: '50%',
          backgroundColor: '#e8f4fc',
          zIndex: 1,
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          animation: `${float} 6s ease-in-out infinite`,
          transformOrigin: 'center center',
        }}
      >
        <img
          src="homebanner.png"
          alt="Luxurious Mattress"
          style={{
            width: '100%',
            height: 'auto',
            transition: 'transform 0.3s ease-out',
          }}
        />
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f0f4f8',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        py: { xs: 4, md: 0 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: 4, md: 0 },
          }}
        >
          {isMobile && <ImageComponent />}
          <Box sx={{ width: { xs: '100%', md: '50%' }, zIndex: 2, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant={isMobile ? 'h3' : 'h2'}
              sx={{
                color: '#2c3e50',
                fontWeight: 'bold',
                mb: 2,
                animation: `${fadeInSlideUp} 1s ease-out`,
              }}
            >
              Dream in Comfort
            </Typography>
            <Typography
              variant={isMobile ? 'body1' : 'h5'}
              sx={{
                color: '#34495e',
                mb: 4,
                animation: `${fadeInSlideUp} 1s ease-out 0.3s both`,
              }}
            >
              Experience the luxury of perfect sleep with our premium mattresses
            </Typography>
            <Box
              component="button"
              sx={{
                backgroundColor: '#3498db',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                fontSize: { xs: '1rem', md: '1.1rem' },
                fontWeight: 'bold',
                borderRadius: '30px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#2980b9',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                },
                animation: `${fadeInSlideUp} 1s ease-out 0.6s both`,
              }}
            >
              Discover More
            </Box>
          </Box>
          {!isMobile && <ImageComponent />}
        </Box>
      </Container>
    </Box>
  );
};

export default HomeBanner;