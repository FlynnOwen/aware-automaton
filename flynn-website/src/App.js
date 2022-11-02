import './App.css';
import ProfileCard from './components/cards/profile';
import CustomAppBar from './components/navbar/appbar';
import CustomBody from './components/body/body';
import CustomParticles from './components/body/customparticles';
import { Box, Fade, Typography } from '@mui/material';
import { Redirect, Route, Switch } from 'react-router';
import CustomBlogBody from './pages/blog/body';
import CustomProjectsBody from './pages/projects/body';
import BlogNav from './pages/blog/blognav';
import CustomBlogPage from './pages/blog/blogpage';

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
            <Box sx={{ display: 'flex' }}>
              <ProfileCard />
              <CustomBody />
            </Box>
        </Route>

        <Route path="/blog">
            <Box>
              <CustomBlogPage/>
            </Box>
        </Route>

        <Route path="/projects">
            <Box sx={{ display: 'flex' }}>
              <ProfileCard />
              <CustomProjectsBody />
            </Box>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
