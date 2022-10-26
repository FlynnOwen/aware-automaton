import './App.css';
import ProfileCard from './components/cards/profile';
import CustomAppBar from './components/navbar/appbar';
import CustomBody from './components/body/body';
import { Box } from '@mui/material';
import { Redirect, Route } from 'react-router';
import NotFound from './pages/notfound';


function App() {

  return (
    <div>

      <Route path="/">
      <CustomAppBar/>
      </Route>

      <Route path="/" exact>
        <Redirect to='/home' />
      </Route>

      <Route path="/home">
      <div>
      <Box sx={{display: 'flex'}}>
        <ProfileCard/>
      </Box>
      </div>
    </Route>

      <Route path="/about">
        <div>
        <Box sx={{display: 'flex'}}>
          <ProfileCard/>
          <CustomBody/>
        </Box>
        </div>
      </Route>

    <Route path="/blog">
      <div>
      <Box sx={{display: 'flex'}}>
        <ProfileCard/>
      </Box>
      </div>
    </Route>

    <Route path="/projects">
      <div>
      <Box sx={{display: 'flex'}}>
        <ProfileCard/>
      </Box>
      </div>
    </Route>

  </div>
  );
}

export default App;
