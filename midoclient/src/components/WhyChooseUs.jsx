import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { keyframes } from '@mui/system';

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

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Premium Quality Mattresses",
      description: "We specialize in crafting premium mattresses using high-quality materials for superior comfort and support."
    },
    {
      title: "Innovative Designs",
      description: "Our mattresses feature innovative designs that cater to various sleep preferences and ensure restful nights."
    },
    {
      title: "Diverse Product Range",
      description: "Beyond mattresses, we offer confectionery and furniture products under various brands, providing comprehensive solutions."
    },
    {
      title: "Commitment to Customer Satisfaction",
      description: "We are dedicated to ensuring customer satisfaction through exceptional products and responsive service."
    }
  ];

  return (
    <Box
      sx={{
        background: '#FFF0E5', // Lightened red for background
        color: '#2c3e50',
        padding: '6rem 0',
        position: 'relative',
        animation: `${fadeIn} 1s ease-out`,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, marginBottom: '3rem', textAlign: 'center' }}>
          Why Choose Us?
        </Typography>
        <Box sx={{ position: 'relative' }}>
          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              backgroundColor: '#e0e0e0',
              transform: 'translateX(-50%)',
            }}
          />
          <Grid container spacing={6}>
            {reasons.map((reason, index) => (
              <Grid item xs={12} key={index}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                    alignItems: 'center',
                    animation: `${slideIn} 0.8s ease-out ${index * 0.2}s both`,
                  }}
                >
                  <Box
                    sx={{
                      width: '50%',
                      padding: '2rem',
                      backgroundColor: '#ffffff',
                      borderRadius: '8px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                      [index % 2 === 0 ? 'marginRight' : 'marginLeft']: '2rem',
                      position: 'relative',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 6px 25px rgba(0,0,0,0.1)',
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '50%',
                        [index % 2 === 0 ? 'right' : 'left']: '-10px',
                        width: '20px',
                        height: '20px',
                        backgroundColor: '#D2232A', // Primary red
                        borderRadius: '50%',
                        transform: 'translateY(-50%)',
                      },
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: '1rem', color: '#D2232A' }}>
                      {reason.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#34495e' }}>
                      {reason.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
