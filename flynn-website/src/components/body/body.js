import * as React from 'react';
import { Paper } from '@mui/material';
import SimpleAccordion from './dropdown';

function CustomBody() {
    
  return (
    <Paper elevation={3} sx={{ mt: 5, width: '50%'}}>
        <SimpleAccordion ml={5} mr={5} mt={5}/>
        <SimpleAccordion ml={5} mr={5} mt={5}/>
    </Paper>
  );
}

export default CustomBody;