import * as React from 'react';
import { Typography } from '@mui/material';
import AcademicAccordion from './academicaccordian';
import WorkAccordion from './workaccordian';
import CustomBody from '../../components/body/body';

function AboutBodyInternal (){
  return (
    <div>
    <Typography sx={{ mt:5, ml: 5, mr: 5 }}>
    I'm a cross between software engineer and data scientist and love all things math and programming.
    In my spare time, I like working large variety of software and academic projects, playing squash and going hiking with my fiance. <br/><br/>
    
    This site is supposed to be a scratchpad for me to learn React, and share both my portfolio and fun side projects with you. 
    I hope there is something for you here.
    </Typography>
    <Typography sx={{ mt: 3, fontFamily: 'cursive'} }> Flynn </Typography>
  <Typography variant="h4" sx={{ mt:5 }}>Work Experience</Typography>
  <WorkAccordion ml={5} mr={5} mt={5}/>
  <Typography variant="h4" sx={{ mt:5 }}>Academic Experience</Typography>
  <AcademicAccordion ml={5} mr={5} mt={5} mb={5}/>
  </div>
  );
}


function AboutBody() {
  return (
    <CustomBody title="About" body={<AboutBodyInternal/>}/>
  );
}

export default AboutBody;