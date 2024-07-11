import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Container, Grid, Typography, Button, Card, CardMedia, CardContent, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HomeProducts = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [visibleProducts, setVisibleProducts] = useState(3);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/category`);
        setCategories(response.data.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

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
        <Typography variant={isMobile ? 'h4' : 'h3'} component="h2" align="center" gutterBottom sx={{ mb: 6, fontWeight: 'bold', color: '#D2232A' }}>
          Discover Our Featured Products
        </Typography>
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <Grid container spacing={4}>
            {categories?.slice(0, visibleProducts).map((category) => (
              <Grid item xs={12} sm={6} md={4} key={category._id}>
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
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="300"
                      image={category?.image && `${import.meta.env.VITE_BACKEND_URL_BASE}/uploads/${category?.image}`} 
                      alt={category.name}
                      sx={{ objectFit: 'cover', borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
                    />
                    <CardContent sx={{ flexGrow: 1, textAlign: 'center', py: 2 }}>
                      <Typography gutterBottom variant="h6" component="h3" sx={{ color: '#333333', fontWeight: 'bold', mb: 1 }}>
                        {category?.name}
                      </Typography>
                      <Button
                        variant="outlined"
                        onClick={handleLoadMore}
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
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
