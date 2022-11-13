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
    <Paper sx={{mt: 5, ml: 2, mr: 2, width: 250, padding: 5, textAlign:"center"}}>
        <Typography variant="h4" padding="30px" sx={{mb: 3}}> Blog Posts </Typography>
    <List sx={style} component="nav" aria-label="mailbox folders">
    <Divider component="li" />
    {props.blogPosts.map((step, index) => (
      <div>
        <ListItem button onClick={() => { handleIndex(index); }}>
        <ListItemText primary={<div>
          <div>{step.title}</div>
          <div>{step.date}</div>
          </div>} sx={{textAlign: "center"}}/>
      </ListItem>
      <Divider component="li" />
      </div>
    ))}

    </List>
    </Paper>
    </Fade>
  );
}

export default BlogNav;