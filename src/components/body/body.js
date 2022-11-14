import * as React from 'react';
import { Divider, Fade, Paper, Typography } from '@mui/material';

function CustomBody(props) {

  return (
    <Fade in={true} timeout={{ enter: 1000 }}>
      <Paper elevation={3} sx={{ mt: 5, mb: 5, padding:2, textAlign: "center" }}>
        <Typography variant="h3" padding="30px">&#123;{props.title}&#125;</Typography>
        <Divider variant="middle" sx={{ mt: 3 }} />
        {props.body}
      </Paper>
    </Fade>
  );
}

export default CustomBody;