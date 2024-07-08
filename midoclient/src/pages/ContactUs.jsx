import React from 'react';
import { Box, Button, Card, CardContent, Container, Grid, TextField, Typography } from '@mui/material';
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

const FormBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  '& > *': {
    margin: theme.spacing(3), // Adjusted margin for form elements
  },
}));

const ContactInfoBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#ffffff',
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}));

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#D2232A', // Primary red for button background
  color: '#FFFFFF', // Accent white for button text
  '&:hover': {
    backgroundColor: '#A77E40', // Darker gold on hover
  },
}));

function ContactUs() {
  return (
    <div>
      <NavBar />
      <StyledContainer maxWidth="lg" style={{ marginBottom: '30px' }}>
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ color: '#D2232A', fontWeight: 'bold', marginBottom: '60px' }}>
          Contact Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <StyledCard>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom style={{ borderBottom: '3px solid #D2232A', paddingBottom: '10px', marginBottom:'20px' }}>
                  Get in Touch
                </Typography>
                <FormBox>
                  <TextField label="Name" variant="outlined" fullWidth style={{ marginBottom: '15px' }} />
                  <TextField label="Email" variant="outlined" fullWidth style={{ marginBottom: '15px' }} />
                  <TextField label="Message" variant="outlined" multiline rows={4} fullWidth style={{ marginBottom: '15px' }} />
                  <CustomButton variant="contained" fullWidth>
                    Send Message
                  </CustomButton>
                </FormBox>
              </CardContent>
            </StyledCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledCard>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom style={{ borderBottom: '3px solid #D2232A', paddingBottom: '10px', marginBottom:'20px' }}>
                  Contact Information
                </Typography>
                <ContactInfoBox>
                  <Typography variant="body1" paragraph>
                    <strong>Address:</strong> 123 Street Name, City, Country
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>Phone:</strong> +1 234 567 890
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>Email:</strong> info@example.com
                  </Typography>
                </ContactInfoBox>
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>
      </StyledContainer>
      <Footer />
    </div>
  );
}

export default ContactUs;
