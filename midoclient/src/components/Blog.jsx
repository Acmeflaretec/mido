import { Box, Card, CardContent, CardMedia, Chip, Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#f8e9e8', // Light gold background
  padding: theme.spacing(10, 0),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease-in-out',
  backgroundColor: '#FFFFFF', // White background for cards
  '&:hover': {
    boxShadow: '0 12px 24px rgba(0,0,0,0.2)',
    transform: 'translateY(-5px)',
  },
}));

const StyledCardMedia = styled(CardMedia)({
  height: 240,
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(237,28,36,0.6) 100%)',
  },
});

const blogs = [
  {
    id: 1,
    title: 'Discovering the Art of Sleep',
    image: 'latest1.png',
    content:
      'Sleep is a crucial part of our daily lives, yet many of us struggle to achieve quality rest. Discovering the art of sleep involves understanding the science behind sleep cycles, the impact of a good mattress, and the role of a calming bedtime routine. By optimizing these factors, you can enhance your sleep quality and wake up feeling refreshed.',
    author: 'John Doe',
    date: 'May 15, 2023',
    readTime: '5 min read',
    tags: ['Sleep', 'Health'],
  },
  {
    id: 2,
    title: 'Benefits of Orthopedic Mattresses',
    image: 'latest2.png',
    content:
      'Orthopedic mattresses are designed to support your body and alleviate pressure points, making them ideal for those with back pain or joint issues. These mattresses distribute weight evenly, promote proper spinal alignment, and enhance overall sleep quality. Investing in an orthopedic mattress can lead to a healthier, more restful sleep experience.',
    author: 'Jane Smith',
    date: 'May 20, 2023',
    readTime: '7 min read',
    tags: ['Orthopedic', 'Mattress'],
  },
];


const Blog = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <StyledBox>
      <Container maxWidth="lg">
        <Typography variant={isMobile ? 'h4' : 'h3'} component="h1" align="center" gutterBottom sx={{ mb: 6, fontWeight: 'bold', color: '#ED1C24' }}>
          Latest Insights
        </Typography>
        <Grid container spacing={4}>
          {blogs.map((blog) => (
            <Grid item xs={12} md={6} key={blog.id}>
              <StyledCard>
                <StyledCardMedia
                  image={blog.image}
                  title={blog.title}
                />
                <CardContent sx={{ flexGrow: 1, position: 'relative' }}>
                  <Box sx={{ position: 'absolute', top: -30, left: 16, display: 'flex', alignItems: 'center', color: 'white' }}>
                    {/* <Avatar sx={{ bgcolor: '#C9A45C', mr: 1 }}><PersonIcon /></Avatar> */}
                    {/* <Typography variant="subtitle2">{blog.author}</Typography> */}
                  </Box>
                  <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 2, fontWeight: 'bold', color: '#333333' }}>
                    {blog.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {blog.content}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                    {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <AccessTimeIcon sx={{ fontSize: 16, mr: 0.5, color: '#C9A45C' }} />
                      <Typography variant="caption" color="text.secondary">{blog.readTime}</Typography>
                    </Box> */}
                    {/* <Typography variant="caption" color="text.secondary">{blog.date}</Typography> */}
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    {blog.tags.map((tag, index) => (
                      <Chip key={index} label={tag} size="small" sx={{ mr: 1, mb: 1, bgcolor: '#ED1C24', color: '#FFFFFF' }} />
                    ))}
                  </Box>
                </CardContent>
                {/* <Button variant="text" sx={{ alignSelf: 'flex-start', ml: 2, mb: 2, color: '#ED1C24' }}>
                  Read More
                </Button> */}
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledBox>
  );
};

export default Blog;