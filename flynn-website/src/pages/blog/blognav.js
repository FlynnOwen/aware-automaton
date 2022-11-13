import { Divider, Fade, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import * as React from 'react';
import { useHistory } from 'react-router-dom';

const style = {
    maxWidth: 360,
    bgcolor: 'background.paper',
  };

function BlogNav(props) {

  const history = useHistory();
  const handleIndex = (index) => {
    history.push('/blog/' + index);
  };
    
  return (
    <Fade in={true} timeout={{enter: 1000}}>
    <Paper sx={{m: 5, width: 250, padding: 5, textAlign:"center"}}>
        <Typography variant="h4" padding="30px"> Blog Posts </Typography>
    <List sx={style} component="nav" aria-label="mailbox folders">
        
    {props.blogPosts.map((step, index) => (
        <ListItem button onClick={() => { handleIndex(index); }}>
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