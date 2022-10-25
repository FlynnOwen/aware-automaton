import './App.css';
import ProfileCard from './components/cards/profile';
import CustomAppBar from './components/navbar/appbar';
import CustomBody from './components/body/body';
import { Box } from '@mui/material';
import SimpleAccordion from './components/body/dropdown';


function App() {
  // <Navbar/>
  // <div>
  // <profile img/>
  // <Contact card/>
  // </div>
  // <div>
  // <experience-list>
  // <experience/>
  // <experience/>
  // </experience-list>
  // </div>
  // <div>
  // <education-list>
  // <education/>
  // <education/>
  // </education-list>
  // </div>
  // <div>
  // <project-grid>
  // <project-card>
  // <project-card>
  // <project-card>
  // </project-grid>
  // </div>

  return (
    <>
    <CustomAppBar/>
    <Box sx={{display: 'flex'}}>
      <ProfileCard/>
      <CustomBody/>
    </Box>
    </>
  );
}

export default App;
