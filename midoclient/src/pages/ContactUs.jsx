import React, { useState } from 'react';
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

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const whatsappNumber = "9995256666";
    const whatsappMessage = `Name: ${name},\n Email: ${email},\n Message: ${message}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=91${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

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
                <Typography variant="h5" component="h2" gutterBottom style={{ borderBottom: '3px solid #D2232A', paddingBottom: '10px', marginBottom: '20px' }}>
                  Get in Touch
                </Typography>
                <FormBox component="form" onSubmit={handleSubmit}>
                  <TextField 
                    label="Name" 
                    variant="outlined" 
                    fullWidth 
                    style={{ marginBottom: '15px' }} 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange}
                  />
                  <TextField 
                    label="Email" 
                    variant="outlined" 
                    fullWidth 
                    style={{ marginBottom: '15px' }} 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                  />
                  <TextField 
                    label="Message" 
                    variant="outlined" 
                    multiline 
                    rows={4} 
                    fullWidth 
                    style={{ marginBottom: '15px' }} 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange}
                  />
                  <CustomButton variant="contained" fullWidth type="submit">
                    Send Message
                  </CustomButton>
                </FormBox>
              </CardContent>
            </StyledCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledCard>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom style={{ borderBottom: '3px solid #D2232A', paddingBottom: '10px', marginBottom: '20px' }}>
                  Contact Information
                </Typography>
                <ContactInfoBox>
                  <Typography variant="body1" paragraph>
                    <strong>Address:</strong> Jaihind General Trading Company <br /> Malappuram, Kerala, India - 679582
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>Phone:</strong> +91 9048256666
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>Email:</strong> Jaihindcompany@gmail.com
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
