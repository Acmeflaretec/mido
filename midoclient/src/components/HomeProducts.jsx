import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const allProducts = [
  { id: 1, name: "Crystel", image: "crystel.png" },
  { id: 2, name: "Crystel Eurotop", image: "eurotop.png" },
  { id: 3, name: "Crystel pillow top", image: "pillowtop.png" },
  { id: 4, name: "Eco-Friendly Latex Mattress", image: "/images/mattress4.jpg" },
  { id: 5, name: "Memory Foam Deluxe", image: "/images/mattress5.jpg" },
  { id: 6, name: "Hybrid Cooling Mattress", image: "/images/mattress6.jpg" },
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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Box sx={{ py: 8, backgroundColor: '#F9F9F9' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" align="center" gutterBottom sx={{ mb: 6, fontWeight: 'bold', color: '#D2232A' }}>
          Discover Our Featured Products
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
                      borderRadius: 8,
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                      transition: '0.3s',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
                      }
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="300"
                      image={product.image}
                      alt={product.name}
                      sx={{ objectFit: 'cover', borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
                    />
                    <CardContent sx={{ flexGrow: 1, textAlign: 'center', py: 2 }}>
                      <Typography gutterBottom variant="h6" component="h3" sx={{ color: '#333333', fontWeight: 'bold', mb: 1 }}>
                        {product.name}
                      </Typography>
                      <Button 
                        variant="outlined" 
                        sx={{ borderRadius: '999px', textTransform: 'none', fontWeight: 'bold', borderColor: '#C3A15C', color: '#C3A15C', '&:hover': { backgroundColor: '#C3A15C', color: '#FFFFFF' } }}
                      >
                        View Details
                      </Button>
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
              size="large" 
              onClick={handleLoadMore}
              sx={{
                borderRadius: '30px',
                padding: '12px 36px',
                fontWeight: 'bold',
                textTransform: 'none',
                backgroundColor: '#D2232A',
                color: '#FFFFFF',
                '&:hover': {
                  backgroundColor: '#A60F1A',
                },
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
