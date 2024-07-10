import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Typography, Button, Card, CardMedia, CardContent, CardActions, Pagination } from '@mui/material';
import { motion } from 'framer-motion';
import { WhatsApp } from '@mui/icons-material';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/products/client`, { params: { page } });
        setProducts(response.data?.products);
        setTotalPages(response.data?.totalPages);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [page]);

  const handleEnquire = (product) => {
    const message = encodeURIComponent(`Hi, I'm interested in the ${product.name}. Can you provide more information?`);
    window.open(`https://wa.me/9995256666?text=${message}`, '_blank');
  };

  const handleChangePage = (event, value) => {
    setPage(value);
  };
  return (
    <>
      <NavBar />
      <Box sx={{ py: 8, backgroundColor: '#FFF0E5' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h1" align="center" gutterBottom sx={{ mb: 6, color: '#D2232A', fontWeight: 'bold', letterSpacing: '1px' }}>
            Our Premium Mattresses
          </Typography>
          <Grid container spacing={4}>
            {products?.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product._id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.3s ease-in-out',
                    maxWidth: '400px',
                    margin: 'auto',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    '&:hover': {
                      boxShadow: '0 12px 28px rgba(0,0,0,0.2)',
                      transform: 'translateY(-5px)',
                    }
                  }}
                >
                  <Box sx={{ position: 'relative', paddingTop: '75%', overflow: 'hidden' }}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    >
                      <CardMedia
                        component="img"
                        // image= {import.meta.env.VITE_BACKEND_URL_BASE/udates/{product.image[0]}}
                        image={ `${import.meta.env.VITE_BACKEND_URL_BASE}/uploads/${product.image[0]}`  } 
                        alt={product.name}
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'all 0.3s ease-in-out',
                          '&:hover': {
                            filter: 'brightness(1.1)',
                          }
                        }}
                      />
                    </motion.div>
                  </Box>
                  <CardContent sx={{ flexGrow: 1, padding: '24px', color: '#333333' }}>
                    <Typography gutterBottom variant="h5" component="h2" sx={{ mb: 1, fontWeight: 'bold', color: '#D2232A' }}>
                      {product?.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontStyle: 'italic' }}>
                      Category: {product?.category?.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                      {product?.description}
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 2, mb: 1, color: '#C3A15C', fontWeight: 'bold' }}>Details:</Typography>
                    <ul style={{ paddingLeft: '20px', margin: 0 }}>
                      
                        <li style={{ marginBottom: '8px', color: '#555' }}>Price:{product?.price}</li>
                        <li style={{ marginBottom: '8px', color: '#555' }}>Stock:{product?.stock}</li>
                        <li style={{ marginBottom: '8px', color: '#555' }}>Discount:{product?.discount}%</li>
                      
                    </ul>
                  </CardContent>
                  <CardActions sx={{ padding: '16px 24px 24px', backgroundColor: '#FFF0E5' }}>
                    <Button
                      fullWidth
                      size="large"
                      variant="contained"
                      onClick={() => handleEnquire(product)}
                      startIcon={<WhatsApp />}
                      sx={{
                        py: 1.5,
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        borderRadius: '8px',
                        backgroundColor: '#C3A15C',
                        color: '#FFF',
                        '&:hover': {
                          backgroundColor: '#A77E40',
                          transform: 'translateY(-3px)',
                          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                        },
                      }}
                    >
                      Enquire Now
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Pagination count={totalPages} page={page} onChange={handleChangePage} color="primary" />
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Products;