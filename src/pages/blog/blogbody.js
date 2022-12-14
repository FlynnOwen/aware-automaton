import * as React from 'react';
import { Box, Chip, Typography } from '@mui/material';
import CustomBody from '../../components/body/body';
import { useParams} from 'react-router-dom'
import {blogPosts} from './blogposts'

function BlogPost() {

  const {index} = useParams()
  const blogPost =  blogPosts[index]
  console.log(index);

  return (
    <Box>
    <Typography variant="h4" sx={{ m:3 }}> {blogPost.title} </Typography>
    <Chip sx={{ mt:1, mb:4 }} label={blogPost.date} />
    <Typography sx={{ ml: 8, mr:8, mb:8 }}> {blogPost.description} </Typography>

    </Box>
  );
}

function BlogBody() {

  return (
    <CustomBody title="Blog" body={<BlogPost/>}/>
  );
}

export default BlogBody;