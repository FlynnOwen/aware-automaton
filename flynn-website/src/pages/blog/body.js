import * as React from 'react';
import { Box, Divider, Fade, Pagination, Paper, Typography } from '@mui/material';
import BlogPost from './blogpost';

const blogPosts = [
  {
    date: '31/10/2022',
    title: 'Finite Mixture Models - A Divide and Conquer Approach (My MSc Thesis)',
    description: 
    <Typography>
      On 09/09/2022 I was finally able to hand in my long awaited MSc thesis after two years of work on it part-time.
      It was a huge undertaking - supervised by Prof Richard Arnold and Dr Louise McMillan and funded by a Marsden scholarship.
      <br/> <br/>
      It was titled 'Finite Mixture Models - A Divide and Conquer Approach', and investigated a novel, computationally efficient way
      to find the optimal number of mixture components - a very common problem in clustering.
    </Typography>
  }
]

function CustomBlogBody() {
  const [page, setPage] = React.useState(1);
  const handlePaginate = (event, value) => {
    setPage(value);
  };
    
  return (
    <Fade in={true} timeout={{enter: 1000}}>
    <Paper elevation={3} sx={{ mt: 5, mb: 5, width: '50%', textAlign: "center"}}>
        <Typography variant="h3" sx={{ mt:3 }}>&#123;Blog&#125;</Typography>
        <Divider variant="middle" sx={{ mt: 3 }} />

          <BlogPost { ...(blogPosts[page - 1]) }></BlogPost>
        
        <Box display='flex' justifyContent='center' sx={{ mt: 5, mb: 5 }}>
          <Pagination count={blogPosts.length} page={page} onChange={handlePaginate} variant="outlined" shape="rounded" />
        </Box>
    </Paper>
    </Fade>
  );
}

export default CustomBlogBody;