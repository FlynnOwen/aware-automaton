import * as React from 'react';
import { Box, Divider, Fade, Paper, Typography } from '@mui/material';
import BlogPost from './blogpost';

function CustomBlogBody() {

  return (
    <Fade in={true} timeout={{ enter: 1000 }}>
      <Paper elevation={3} sx={{ mt: 5, mb: 5, textAlign: "center" }}>
        <Typography variant="h3" padding="30px">&#123;Blog&#125;</Typography>
        <Divider variant="middle" sx={{ mt: 3 }} />
        <BlogPost ></BlogPost>
      </Paper>
    </Fade>
  );
}

export default CustomBlogBody;