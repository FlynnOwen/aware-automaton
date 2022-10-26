import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function WorkAccordion(props) {
  return (
    <div>
      <Accordion sx={{ml: props.ml, mr: props.mr, mt: props.mt}} disableGutters={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ width: '33%', color: 'text.secondary'}}>DOT Loves Data</Typography>
          <Typography sx={{ width: '33%'}}>Data Engineer</Typography>
          <Typography sx={{ width: '33%', color: 'text.secondary' }}>04/21 - Present</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ml: props.ml, mr: props.mr}} disableGutters={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ width: '33%', color: 'text.secondary'}}>Spotlight Reporting</Typography>
          <Typography sx={{ width: '33%'}}>Data Scientist</Typography>
          <Typography sx={{ width: '33%', color: 'text.secondary' }}>01/20 - 04/21</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ml: props.ml, mr: props.mr, mb: props.mb}} disableGutters={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ width: '33%', color: 'text.secondary'}}>Harmonic Analytics</Typography>
          <Typography sx={{ width: '33%'}}>Intern</Typography>
          <Typography sx={{ width: '33%', color: 'text.secondary' }}>11/19 - 12/19</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ml: props.ml, mr: props.mr, mb: props.mb}} disableGutters={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ width: '33%', color: 'text.secondary' }}>Sealord Ltd</Typography>
          <Typography sx={{ width: '33%'}}>Data Analyst Intern</Typography>
          <Typography sx={{ width: '33%', color: 'text.secondary' }}>11/18 - 02/19</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}