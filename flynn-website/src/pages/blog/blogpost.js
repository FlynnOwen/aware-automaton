import { Box, Chip, Divider, Typography } from '@mui/material';
import * as React from 'react';
import {useLocation, useParams} from 'react-router-dom'
import {blogPosts} from './blogpage'

function BlogPost() {

  const {index} = useParams()
  const blogPost =  blogPosts[index]
  console.log(index);

  return (
    <Box>
    <Typography variant="h4" sx={{ m:3 }}> {blogPost.title} </Typography>
    <Divider sx={{ mt:4, mb:4 }}><Chip label={blogPost.date} /></Divider>
    <Typography sx={{ ml: 8, mr:8, mb:8 }}> {blogPost.description} </Typography>

    </Box>
  );
}

export default BlogPost;