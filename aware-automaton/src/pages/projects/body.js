import * as React from 'react';
import { Grid } from '@mui/material';
import SwipeableTextMobileStepper from './carosel';
import CustomBody from '../../components/body/body';

function ProjectsBody() {
    
  return (
    <CustomBody title="Projects" 
    body={
    <Grid container spacing={0} alignItems="center" justifyContent="center">
    <SwipeableTextMobileStepper/>
    </Grid>
    }
    />
  );
}

export default ProjectsBody;