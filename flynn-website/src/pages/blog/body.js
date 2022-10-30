import * as React from 'react';
import { Box, Divider, Fade, Pagination, Paper, Typography } from '@mui/material';

function CustomBlogBody() {
    
  return (
    <Fade in={true} timeout={{enter: 1000}}>
    <Paper elevation={3} sx={{ mt: 5, mb: 5, width: '50%', textAlign: "center"}}>
        <Typography variant="h3" sx={{ mt:3 }}>&#123;Blog&#125;</Typography>
        <Divider variant="middle" sx={{ mt: 3 }} />
        <Box display='flex' justifyContent='center' marginTop='40%'>
          <Pagination count={4} variant="outlined" shape="rounded" />
        </Box>
        
    </Paper>
    </Fade>
  );
}

export default CustomBlogBody;