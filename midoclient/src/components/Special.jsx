import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, useTheme ,useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#f8f9fa',
  padding: theme.spacing ? theme.spacing(10, 0) : '80px 0',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows ? theme.shadows[4] : '0 4px 20px 0 rgba(0,0,0,0.12)',
  },
}));

const StyledCardMedia = styled(CardMedia)({
  paddingTop: '56.25%', // 16:9 aspect ratio
});

const Special = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const features = [
    {
      title: 'Innovative Design',
      description: 'Our mattresses feature cutting-edge technology for optimal comfort.',
      image: 'special.png',
    },
    {
      title: 'Premium Quality',
      description: 'We use only the finest materials to ensure durability and luxury.',
      image: 'special1.png',
    },
    {
      title: 'Customized Support',
      description: 'Choose from various options to find your perfect level of support.',
      image: 'special2.png',
    },
  ];

  return (
    <StyledBox>
      <Container maxWidth="lg">
        <Typography variant={isMobile ? 'h4' : 'h3'} component="h1" align="center" gutterBottom sx={{ mb: 6, fontWeight: 'bold', color: '#D2232A' }}>
          What Makes Us Special
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <StyledCard>
                <StyledCardMedia
                  image={feature.image}
                  title={feature.title}
                />
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#34495e' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
        <Box mt={8}>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            At Mido Tech Mattress, we are committed to revolutionizing sleep comfort with innovative designs and premium quality. Our mattresses are meticulously crafted to ensure optimal support, breathability, and durability.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            Whether you prefer the plush comfort of our Comfort Plus Mattress or the orthopedic support of our Ortho Support Mattress, each product is designed to enhance your sleep experience. Our commitment to your restful nights drives us to excellence.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, fontWeight: 'bold', color: '#2980b9' }}>
            Visit us today to discover how Mido Tech Mattress can transform your sleep quality and elevate your lifestyle.
          </Typography>
        </Box>
      </Container>
    </StyledBox>
  );
};

export default Special;