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
          <Typography sx={{ mt: 2, mb: 2 }}>
            Ingenuitive and tight knit team doing cool things with data. Some of my work has included working the DDI - an index
            measuring deprivation around NZ. The DCT - an index measuring carbon emissions at a daily frequency around NZ. And
            a large amount of ETL jobs using Jenkins, Python, Selenium and PostgreSQL.
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
          <Typography sx={{ mt: 2, mb: 2 }}>
            Built the foundations of Spotlight Reportings data infrastructure in AWS, including a data lake and data warehouse.
            Deployed a productionised churn and conversion model for the sales and customer success teams to use, with dashboards 
            visualising relevant data. Created a proof concept time series prediction product analogous to a 'three way forecast'
            traditionally used by accountants. All written in Python, SQL and Docker.
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
          <Typography sx={{ mt: 2, mb: 2 }}>
            A small internship were I worked on creating a dashboard for a large NZ sports streaming service. 
            All written in R Shiny.
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
          <Typography sx={{ mt: 2, mb: 2 }}>
            An internship within the IT department of Sealord, where I did reporting in Excel and SQL to provide insights to the sales team.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}