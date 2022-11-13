import * as React from 'react';
import { Container, Divider, Fade, Grid, Paper, Typography } from '@mui/material';
import SwipeableTextMobileStepper from './carosel';

function CustomProjectsBody() {
    
  return (
    <Fade in={true} timeout={{enter: 1000}}>
    <Paper elevation={3} sx={{ mt: 5, mb: 5, textAlign: "center"}}>
        <Typography variant="h3" padding="30px">&#123;Projects&#125;</Typography>
        <Divider variant="middle" sx={{ mt: 3 }} />
        <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="center">
        <SwipeableTextMobileStepper/>
        </Grid>
    </Paper>
    </Fade>
  );
}

export default CustomProjectsBody;