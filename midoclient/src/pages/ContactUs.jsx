import React from 'react';
import { Box, Button, Card, CardContent, Container, Grid, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(8, 2),
  backgroundColor: '#f9f9f9',
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
    margin: theme.spacing(5), 
  },
}));

const ContactInfoBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: '#ffffff',
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}));

function ContactUs() {
  return (
    <div>
      <NavBar />
      <StyledContainer maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Contact Us
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <StyledCard>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Get in Touch
                </Typography>
                <FormBox>
                  <TextField label="Name" variant="outlined" style={{marginBottom:'15px'}}  fullWidth />
                  <TextField label="Email" variant="outlined" style={{marginBottom:'15px'}}  fullWidth />
                  <TextField label="Message" variant="outlined" style={{marginBottom:'15px'}}  fullWidth multiline rows={4} />
                  <Button variant="contained" color="primary">Send Message</Button>
                </FormBox>
              </CardContent>
            </StyledCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledCard>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
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
