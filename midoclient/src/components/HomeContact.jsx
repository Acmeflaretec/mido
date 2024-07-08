import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomeContact = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact'); // Navigate to the products page
  };

  return (
    <Box sx={{ py: 8, backgroundColor: '#FFF0E5', textAlign: 'center' }}>
      <Container maxWidth="md">
        <Typography 
          variant="h2" 
          component="h2" 
          gutterBottom 
          sx={{ color: '#D2232A', fontWeight: 700, mb: 3 }}
        >
          Get in Touch with Us!
        </Typography>
        <Typography 
          variant="body1" 
          component="p" 
          sx={{ mb: 4, color: '#2c3e50' }}
        >
          We're here to help you find the perfect mattress for a good night's sleep. 
          Reach out to us for any inquiries or assistance.
        </Typography>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            variant="contained" 
            size="large" 
            onClick={handleContactClick}
            sx={{
              borderRadius: '30px',
              padding: '10px 30px',
              fontWeight: 'bold',
              textTransform: 'none',
              backgroundColor: '#D2232A', // Primary red
              color: '#FFFFFF', // White text
              '&:hover': {
                backgroundColor: '#A11A22', // Darker red on hover
              },
            }}
          >
            Contact Us
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HomeContact;
