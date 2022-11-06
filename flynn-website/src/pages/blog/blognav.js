import { Divider, Fade, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import * as React from 'react';
import BlogPost from './blogpost';

const style = {
    maxWidth: 360,
    bgcolor: 'background.paper',
  };

function BlogNav(props) {
    
  return (
    <Fade in={true} timeout={{enter: 1000}}>
    <Paper sx={{m: 5, height:500, width: 250, textAlign:"center"}}>
        <Typography variant="h4" sx={{ m:3 }}> Blog Posts </Typography>
    <List sx={style} component="nav" aria-label="mailbox folders">
        
    {props.blogPosts.map((step, index) => (
        <ListItem button onClick={() => { props.handleIndex(index); }}>
        <ListItemText primary={<div>
          <div>{step.title}</div>
          <div>{step.date}</div>
          </div>} sx={{textAlign: "center"}}/>
      </ListItem>
    ))}

    </List>
    </Paper>
    </Fade>
  );
}

export default BlogNav;