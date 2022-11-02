import * as React from 'react';
import { Divider, Fade, Paper, Typography } from '@mui/material';
import BlogPost from './blogpost';

function CustomBlogBody(props) {
    
  return (
    <Fade in={true} timeout={{enter: 1000}}>
    <Paper elevation={3} sx={{ mt: 5, mb: 5, width: '50%', textAlign: "center"}}>
        <Typography variant="h3" sx={{ mt:3 }}>&#123;Blog&#125;</Typography>
        <Divider variant="middle" sx={{ mt: 3 }} />
         
          <BlogPost { ...(props.blogPost) }></BlogPost>
    
    </Paper>
    </Fade>
  );
}

export default CustomBlogBody;