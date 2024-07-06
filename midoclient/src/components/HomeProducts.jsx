import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Assume this comes from an API or database
const allProducts = [
  { id: 1, name: "Comfort Plus Mattress", image: "homebanner.png" },
  { id: 2, name: "Ortho Support Mattress", image: "aboutbanner.png" },
  { id: 3, name: "Cloud Nine Pillow Top", image: "homebanner.png" },
  { id: 4, name: "Eco-Friendly Latex Mattress", image: "/images/mattress4.jpg" },
  { id: 5, name: "Memory Foam Deluxe", image: "/images/mattress5.jpg" },
  { id: 6, name: "Hybrid Cooling Mattress", image: "/images/mattress6.jpg" },
  // Add more products as needed
];

const HomeProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(3);
  const navigate = useNavigate();

  const handleLoadMore = () => {
    navigate('/products');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ mb: 6, fontWeight: 'bold' }}>
          Our Featured Products
        </Typography>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4}>
            {allProducts.slice(0, visibleProducts).map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <motion.div variants={itemVariants}>
                  <Card 
                    sx={{ 
                      height: '100%', 
                      display: 'flex', 
                      flexDirection: 'column',
                      transition: '0.3s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                      }
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={product.image}
                      alt={product.name}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h6" component="h3" align="center">
                        {product.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="contained" 
              color="primary" 
              size="large" 
              onClick={handleLoadMore}
              sx={{
                borderRadius: '30px',
                padding: '10px 30px',
                fontWeight: 'bold',
                textTransform: 'none',
              }}
            >
              View All Products
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeProducts;