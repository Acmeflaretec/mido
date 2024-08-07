import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { styled } from '@mui/system';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(8, 2),
  backgroundColor: '#FFF0E5', // Lightened red for page background
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: '100%',
  margin: 'auto',
  transition: '0.3s',
  '&:hover': {
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
  },
}));

const ImageContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  padding: theme.spacing(4),
  overflow: 'hidden',
  '& img': {
    maxWidth: '100%',
    height: 'auto',
    transition: 'transform 0.5s ease-in-out',
  },
  '&:hover img': {
    transform: 'scale(1.05)',
  },
}));

const StyledCardMedia = styled(CardMedia)({
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

function About() {
  return (
    <div>
      <NavBar />
      <StyledContainer maxWidth="lg" style={{marginBottom:'30px'}}>
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ color: '#D2232A', fontWeight:'bold'}}>
          About Us {/* Primary red for headline */}
        </Typography>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <ImageContainer>
              <CardMedia
                component="img"
                alt="About Us"
                image="medicare.png"
                title="About Us"
              />
            </ImageContainer>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledCard>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom sx={{ color: '#D2232A' }} style={{ padding: '10px 0', fontWeight:'bold' }}                >
                  Welcome to Mido Tech Mattress {/* Primary red for subheading */}
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: '#333333' }}>
                  Mido Tech Mattress was founded in 2016 with a mission to revolutionize the way people sleep. As a leading manufacturer of premium mattresses, we are dedicated to providing customers with the ultimate sleep experience.
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: '#333333' }}>
                  Our innovative technology and high-quality materials ensure that every mattress is designed for maximum comfort and support. We offer a range of mattress types, including Euro top, Pillow top, Memory Foam, Medicated, Bamboo Fabrics, and Latex mattresses.
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: '#333333' }}>
                  In addition to mattresses, we also provide confectionery and furniture products under the brands Mido Eclairs, Mido Toffees, Mido Furniture, Mido Sofa, and more for local and international markets.
                </Typography>
                <Typography variant="body1" paragraph sx={{ color: '#333333' }}>
                  Our team at Mido Tech Mattress is made up of passionate and dedicated individuals who are committed to creating the best mattresses on the market. From our designers and engineers to our customer service representatives, every member of our team plays a vital role in ensuring that our customers receive the highest quality products and service.
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>
      </StyledContainer>
      <Footer />
    </div>
  );
}

export default About;
