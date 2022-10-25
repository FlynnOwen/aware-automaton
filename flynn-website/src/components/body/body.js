import * as React from 'react';
import { Paper, Typography } from '@mui/material';
import AcademicAccordion from './academicaccordian';
import WorkAccordion from './workaccordian';

function CustomBody() {
    
  return (
    <Paper elevation={3} sx={{ mt: 5, mb: 5, width: '50%', textAlign: "center"}}>
        <Typography variant="h3" sx={{ mt:5 }}>Kia Ora!</Typography>
        <Typography sx={{ mt:5, ml: 5, mr: 5 }}>
          My name is Flynn Owen. <br/>
          I'm a cross between data engineer and data scientist. 
          I love all things math and programming, and work on a large variety of projects in my free time. 
          Some are hosted on this site, others on my Github page. 
          </Typography>
        <Typography variant="h4" sx={{ mt:5 }}>Work Experience</Typography>
        <WorkAccordion ml={5} mr={5} mt={5}/>
        <Typography variant="h4" sx={{ mt:5 }}>Academic Experience</Typography>
        <AcademicAccordion ml={5} mr={5} mt={5} mb={5}/>
    </Paper>
  );
}

export default CustomBody;