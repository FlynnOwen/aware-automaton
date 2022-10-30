import './App.css';
import ProfileCard from './components/cards/profile';
import CustomAppBar from './components/navbar/appbar';
import CustomBody from './components/body/body';
import CustomParticles from './components/body/customparticles';
import { Box, Fade, Typography } from '@mui/material';
import { Redirect, Route, Switch } from 'react-router';
import CustomBlogBody from './pages/blog/body';
import CustomProjectsBody from './pages/projects/body';

function App() {

  return (
    <div>
      <CustomParticles />
      <CustomAppBar />

      <Switch>
        <Route path="/" exact>
          <Redirect to='/home' />
        </Route>

        <Route path="/home">
          <div style={{display: "flex", flexDirection: "column", textAlign: "center", marginTop: "35vh"}}>

            <div style={{
            }}>
              <Fade in={true} timeout={{ enter: 2500 }}>
                <Typography variant='h2' color="white">&#123;Aware Automaton&#125;</Typography>
              </Fade>
            </div>
            <div style={{
            }}>
              <Fade in={true} timeout={{ enter: 5000 }}>
                <Typography variant='h6' color="grey">A scratchpad for Flynn Owen</Typography>
              </Fade>
            </div>
          </div>
        </Route>

        <Route path="/about">
          <div>
            <Box sx={{ display: 'flex' }}>
              <ProfileCard />
              <CustomBody />
            </Box>
          </div>
        </Route>

        <Route path="/blog">
          <div>
            <Box sx={{ display: 'flex' }}>
              <ProfileCard />
              <CustomBlogBody />
            </Box>
          </div>
        </Route>

        <Route path="/projects">
          <div>
            <Box sx={{ display: 'flex' }}>
              <ProfileCard />
              <CustomProjectsBody />
            </Box>
          </div>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
