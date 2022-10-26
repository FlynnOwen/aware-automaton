import './App.css';
import ProfileCard from './components/cards/profile';
import CustomAppBar from './components/navbar/appbar';
import CustomBody from './components/body/body';
import CustomParticles from './components/body/customparticles';
import { Box, Fade, Typography } from '@mui/material';
import { Redirect, Route } from 'react-router';

function App() {

  return (
    <div>
      <Route path="/">
        <CustomAppBar/>
        <CustomParticles/>
      </Route>

      <Route path="/" exact>
        <Redirect to='/home' />
      </Route>

      <Route path="/home">
      <div style={{
           position: 'absolute', left: '50%', top: '50%',
           transform: 'translate(-50%, -50%)'}}>
        <Fade in={true} timeout={{enter: 2500}}>
        <Typography variant='h2' color="white">&#123;Aware Automaton&#125;</Typography>
        </Fade>
      </div>
      <div style={{
           position: 'absolute', left: '50%', top: '60%',
           transform: 'translate(-50%, -50%)'}}>
        <Fade in={true} timeout={{enter: 5000}}>
        <Typography variant='h6' color="grey">A scratchpad for Flynn Owen</Typography>
        </Fade>
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
