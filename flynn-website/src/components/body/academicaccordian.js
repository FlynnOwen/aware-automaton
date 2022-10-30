import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BookIcon from '@mui/icons-material/Book';
import { Button } from '@mui/material';

export default function AcademicAccordion(props) {
    return (
      <div>
        <Accordion sx={{ml: props.ml, mr: props.mr, mt: props.mt}} disableGutters={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
          <Typography sx={{ width: '33%', color: 'text.secondary' }}>Victoria University of Wellington</Typography>
          <Typography sx={{ width: '66%'}}>Masters of Science (Statistics)</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Button variant="outlined" href="https://openaccess.wgtn.ac.nz/articles/thesis/Finite_Mixture_Models_-_A_Divide_and_Conquer_Approach/21300270/1" startIcon={<BookIcon/>} sx={{mb: 3}}>
            Thesis
            </Button>
          <Typography sx={{color: 'text.secondary'}}>
              Grade: Distinction
            </Typography>
            <Typography sx={{ mt: 2, mb: 2 }}>
            Finite Mixture Models - A Divide and Conquer Approach. Funded by a Marsden scholarship, and Supervised by 
            Prof. Richard Arnold and Dr. Louise McMillan, my thesis investigated a novel, computationally efficient
            approach to applying model-based clustering to datasets with unknown numbers of mixture components.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ml: props.ml, mr: props.mr}} disableGutters={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={{ width: '33%', color: 'text.secondary' }}>Victoria University of Wellington</Typography>
            <Typography sx={{ width: '66%'}}>Masters of Applied Statistics</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography sx={{color: 'text.secondary'}}>
              Grade: Distinction
            </Typography>
            <Typography sx={{ mt: 2, mb: 2 }}>
              A course-based post graduate degree. My courses focussed heavily on computational statistics, machine learning and data science.
              An outstanding result in the research component of this degree awarded me a scholarship to complete the Masters of Science degree.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ml: props.ml, mr: props.mr, mb: props.mb}} disableGutters={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={{ width: '33%', color: 'text.secondary' }}>Victoria University of Wellington</Typography>
            <Typography sx={{ width: '66%'}}>Bachelors (Mathematics, Economics)</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ mt: 2, mb: 2 }}>
              My majors were mathematics and economics for my undergraduate, bachelors degree. Math courses were heavily focussed in both
              discrete and pure mathematics, while my economics courses were a combination of both macro and micro, but having heavy math influence.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }