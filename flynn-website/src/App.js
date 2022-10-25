import './App.css';
import ProfileCard from './components/cards/profile';
import CustomAppBar from './components/navbar/appbar';
import CustomBody from './components/body/body';
import { Box } from '@mui/material';
import { Route } from 'react-router';


function App() {

  return (
    <div>
      <Route path="/about">
        <div>
        <CustomAppBar/>
        <Box sx={{display: 'flex'}}>
          <ProfileCard/>
          <CustomBody/>
        </Box>
        </div>
      </Route>
      <Route path="/home">
      <div>
      <CustomAppBar/>
      <Box sx={{display: 'flex'}}>
        <ProfileCard/>
      </Box>
      </div>
    </Route>
  </div>
  );
}

export default App;
