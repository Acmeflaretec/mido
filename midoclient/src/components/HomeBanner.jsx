import React from 'react';
import { Box, Typography, Container, useMediaQuery, useTheme } from '@mui/material';
import { keyframes } from '@mui/system';
import { Link } from 'react-router-dom';

// Refined animations
const float = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(1deg); }
`;

const fadeInSlideUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0% { background-position: -500px 0; }
  100% { background-position: 500px 0; }
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
          top: '-20%',
          left: '-20%',
          width: '140%',
          height: '140%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #f8e9e8 0%, #FFF0E5 70%)',
          zIndex: 1,
          opacity: 0.8,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '80%',
          height: '80%',
          backgroundImage: 'linear-gradient(45deg, #D2232A11 25%, transparent 25%, transparent 75%, #D2232A11 75%, #D2232A11)',
          backgroundSize: '40px 40px',
          zIndex: 0,
          opacity: 0.05,
          animation: `${shimmer} 60s linear infinite`,
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
            filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))',
          }}
        />
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #FFF0E5 0%, #FFF8E1 100%)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        py: { xs: 4, md: 0 },
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(#D2232A08 1px, transparent 1px), radial-gradient(#C3A15C08 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0, 15px 15px',
          opacity: 0.3,
        },
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
              variant={isMobile ? 'h3' : 'h1'}
              sx={{
                color: '#D2232A',
                fontWeight: 900,
                mb: 2,
                animation: `${fadeInSlideUp} 1s ease-out`,
                textShadow: '1px 1px 2px rgba(0,0,0,0.05)',
                letterSpacing: '-1px',
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-10px',
                  left: 0,
                  width: '100%',
                  height: '3px',
                  background: 'linear-gradient(90deg, #D2232A, #C3A15C)',
                  transformOrigin: 'left',
                  transform: 'scaleX(0)',
                  animation: 'expandWidth 1s ease-out 0.5s forwards',
                },
                '@keyframes expandWidth': {
                  to: { transform: 'scaleX(1)' },
                },
              }}
            >
              Dream in Comfort
            </Typography>
            <Typography
              variant={isMobile ? 'body1' : 'h5'}
              sx={{
                color: '#333333',
                mb: 4,
                animation: `${fadeInSlideUp} 1s ease-out 0.3s both`,
                fontWeight: 500,
                lineHeight: 1.6,
              }}
            >
              Experience the luxury of perfect sleep with our premium mattresses
            </Typography>
            <Box
              component={Link}
              to="/about"
              sx={{
                display: 'inline-block',
                backgroundColor: '#C3A15C',
                color: '#FFFFFF',
                padding: '15px 30px',
                fontSize: { xs: '1rem', md: '1.1rem' },
                fontWeight: 'bold',
                borderRadius: '50px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  backgroundColor: '#A77E40',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '-50%',
                  left: '-50%',
                  width: '200%',
                  height: '200%',
                  background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
                  transition: 'all 0.5s ease',
                  opacity: 0,
                },
                '&:hover::before': {
                  opacity: 1,
                  transform: 'scale(1.2)',
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