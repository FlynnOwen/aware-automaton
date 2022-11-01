import { Box, Chip, Divider, Typography } from '@mui/material';
import * as React from 'react';

function BlogPost(props) {
    
  return (
    <Box>
    <Typography variant="h4" sx={{ m:3 }}> {props.title} </Typography>
    <Divider sx={{ mt:4, mb:4 }}><Chip label={props.date} /></Divider>
    <Typography sx={{ ml: 8, mr:8, mb:8 }}> {props.description} </Typography>
    </Box>
  );
}

export default BlogPost;