import React from 'react';
import { Box, Container, Grid, Typography, Button, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { motion } from 'framer-motion';
import { WhatsApp } from '@mui/icons-material'; // Import WhatsApp icon
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const allProducts = [
  {
    id: 1,
    category: "Memory Foam",
    name: "Comfort Plus Mattress",
    image: "aboutbanner.png",
    description: "Experience ultimate comfort with our premium memory foam mattress. Designed to contour to your body, providing optimal support for a restful night's sleep. The Comfort Plus Mattress features advanced cooling technology to regulate your body temperature throughout the night, ensuring you wake up feeling refreshed and rejuvenated.",
    features: ["Memory foam", "Cooling gel", "Hypoallergenic cover"]
  },
  {
    id: 2,
    category: "Orthopedic",
    name: "Ortho Support Mattress",
    image: "aboutbanner.png",
    description: "Our orthopedic mattress offers exceptional support for your back and joints. Perfect for those seeking a firmer sleep surface, the Ortho Support Mattress is designed to promote proper spinal alignment and reduce pressure points. Its high-density foam core provides long-lasting durability and consistent support night after night.",
    features: ["High-density foam", "Reinforced edges", "Breathable fabric"]
  },
  {
    id: 1,
    category: "Memory Foam",
    name: "Comfort Plus Mattress",
    image: "aboutbanner.png",
    description: "Experience ultimate comfort with our premium memory foam mattress. Designed to contour to your body, providing optimal support for a restful night's sleep. The Comfort Plus Mattress features advanced cooling technology to regulate your body temperature throughout the night, ensuring you wake up feeling refreshed and rejuvenated.",
    features: ["Memory foam", "Cooling gel", "Hypoallergenic cover"]
  },

  // Add more products as needed
];

const Products = () => {
  const handleEnquire = (product) => {
    const message = encodeURIComponent(`Hi, I'm interested in the ${product.name}. Can you provide more information?`);
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <>
      <NavBar />
      <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h1" align="center" gutterBottom sx={{ mb: 6, fontWeight: 'bold' }}>
            Our Premium Mattresses
          </Typography>
          <Grid container spacing={4}>
            {allProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: '0.3s',
                    maxWidth: '400px',
                    margin: 'auto',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    '&:hover': {
                      boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                    }
                  }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={product.image}
                      alt={product.name}
                      sx={{
                        transition: '0.3s',
                        '&:hover': {
                          filter: 'brightness(1.1)',
                        }
                      }}
                    />
                  </motion.div>
                  <CardContent sx={{ flexGrow: 1, padding: '24px' }}>
                    <Typography gutterBottom variant="h5" component="h2" sx={{ mb: 1 }}>
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      <strong>Category:</strong> {product.category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {product.description}
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>Key Features:</Typography>
                    <ul style={{ paddingLeft: '20px', margin: 0 }}>
                      {product.features.map((feature, index) => (
                        <li key={index} style={{ marginBottom: '8px' }}>{feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions sx={{ padding: '16px 24px 24px' }}>
                    <Button
                      fullWidth
                      size="large"
                      variant="contained"
                      color="primary"
                      onClick={() => handleEnquire(product)}
                      startIcon={<WhatsApp />} // WhatsApp icon added here
                      sx={{
                        py: 1.5,
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        borderRadius: '8px',
                      }}
                    >
                      Enquire Now
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Products;
