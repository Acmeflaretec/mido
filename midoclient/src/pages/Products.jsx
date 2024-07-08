import React from 'react';
import { Box, Container, Grid, Typography, Button, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { motion } from 'framer-motion';
import { WhatsApp } from '@mui/icons-material';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const allProducts = [
  {
    id: 1,
    category: "Memory Foam",
    name: "Crystel",
    image: "crystel.png",
    description: "Experience ultimate comfort with our Crystel memory foam mattress. Designed to contour to your body, providing optimal support for a restful night's sleep. The Crystel Mattress features advanced cooling technology to regulate your body temperature throughout the night, ensuring you wake up feeling refreshed and rejuvenated.",
    features: ["Memory foam", "Cooling gel", "Hypoallergenic cover"]
  },
  {
    id: 2,
    category: "Orthopedic",
    name: "Medicare",
    image: "medicare.png",
    description: "Our Medicare orthopedic mattress offers exceptional support for your back and joints. Perfect for those seeking a firmer sleep surface, the Medicare Mattress is designed to promote proper spinal alignment and reduce pressure points. Its high-density foam core provides long-lasting durability and consistent support night after night.",
    features: ["High-density foam", "Reinforced edges", "Breathable fabric"]
  },
  {
    id: 3,
    category: "Pillow Top",
    name: "Crystel Eurotop",
    image: "eurotop.png",
    description: "Indulge in luxury with our Crystel Eurotop Pillow Top Mattress. Featuring plush layers of comfort, this mattress is perfect for those who prefer a soft sleep surface without compromising support. The Crystel Eurotop Mattress is crafted with premium materials to provide the ultimate sleeping experience.",
    features: ["Pillow top design", "Plush comfort layers", "Breathable fabric"]
  },
  {
    id: 4,
    category: "Memory Foam",
    name: "Crystel Pillowtop",
    image: "pillowtop.png",
    description: "Experience ultimate comfort with our Crystel Pillowtop memory foam mattress. Designed to contour to your body, providing optimal support for a restful night's sleep. The Crystel Pillowtop Mattress features advanced cooling technology to regulate your body temperature throughout the night, ensuring you wake up feeling refreshed and rejuvenated.",
    features: ["Memory foam", "Cooling gel", "Hypoallergenic cover"]
  },
  {
    id: 5,
    category: "Orthopedic",
    name: "Medicare Platinum Eurotop",
    image: "platinum.png",
    description: "Our Medicare Platinum Eurotop orthopedic mattress offers exceptional support for your back and joints. Perfect for those seeking a firmer sleep surface, the Medicare Platinum Mattress is designed to promote proper spinal alignment and reduce pressure points. Its high-density foam core provides long-lasting durability and consistent support night after night.",
    features: ["High-density foam", "Reinforced edges", "Breathable fabric"]
  },
  {
    id: 6,
    category: "Pillow Top",
    name: "Orthocare Full Medicated",
    image: "ortho.png",
    description: "Indulge in luxury with our Orthocare Full Medicated Pillow Top Mattress. Featuring plush layers of comfort, this mattress is perfect for those who prefer a soft sleep surface without compromising support. The Orthocare Full Medicated Mattress is crafted with premium materials to provide the ultimate sleeping experience.",
    features: ["Pillow top design", "Plush comfort layers", "Breathable fabric"]
  },
];



const Products = () => {
  const handleEnquire = (product) => {
    const message = encodeURIComponent(`Hi, I'm interested in the ${product.name}. Can you provide more information?`);
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
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
            {allProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
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
                        image={product.image}
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
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontStyle: 'italic' }}>
                      Category: {product.category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                      {product.description}
                    </Typography>
                    <Typography variant="h6" sx={{ mt: 2, mb: 1, color: '#C3A15C', fontWeight: 'bold' }}>Key Features:</Typography>
                    <ul style={{ paddingLeft: '20px', margin: 0 }}>
                      {product.features.map((feature, index) => (
                        <li key={index} style={{ marginBottom: '8px', color: '#555' }}>{feature}</li>
                      ))}
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
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Products;