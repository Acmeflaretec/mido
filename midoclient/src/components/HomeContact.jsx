import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomeContact = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/products'); // Navigate to the products page
  };

  return (
    <Box sx={{ py: 8, backgroundColor: '#f8fafc', textAlign: 'center' }}>
      <Container maxWidth="md">
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom 
          sx={{ fontWeight: 'bold', mb: 4 }}
        >
          Get in Touch with Us!
        </Typography>
        <Typography 
          variant="body1" 
          component="p" 
          sx={{ mb: 4 }}
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
            color="primary" 
            size="large" 
            onClick={handleContactClick}
            sx={{
              borderRadius: '30px',
              padding: '10px 30px',
              fontWeight: 'bold',
              textTransform: 'none',
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
