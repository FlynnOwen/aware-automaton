import { Fade, Grid, Typography } from '@mui/material';
import { Redirect, Route, Switch } from 'react-router';

import ProfileCard from './components/cards/profile';
import CustomAppBar from './components/navbar/appbar';
import CustomParticles from './components/body/customparticles';
import BlogNav from './pages/blog/blognav';
import { blogPosts } from './pages/blog/blogposts';
import CustomBlogBody from './pages/blog/blogbody';
import AboutBody from './pages/about/aboutbody';
import ProjectsBody from './pages/projects/projectsbody';

function App() {

  return (
    <div>

      <CustomParticles />
      <CustomAppBar />
      <Grid container align = "center" direction = {{xs: "column", sm: "column", md: "row"}}>
      <Grid xs = {12} md={3} order = {{xs: 3, sm: 3, md: 1}}>
      <Route path={["/about", "/blog", "/projects"]}>
        <ProfileCard /> 
      </Route>
      </Grid>
      <Grid xs={12} md={6} order = {{xs: 2, sm: 2, md: 2}} alignItems="center">

      <Switch>
      <Route path="/" exact>
          <Redirect to='/home' />
      </Route>
      
      <Route path="/blog" exact>
          <Redirect to='/blog/0' />
      </Route>

      <Route path="/home">
          <div style={{textAlign: "center", marginTop: "35vh"}}>

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
          <AboutBody />
        </Route>

        <Route path="/blog/:index">
          <CustomBlogBody/>
        </Route>

        <Route path="/projects">
          <ProjectsBody />
        </Route>

      </Switch>
      </Grid>

      <Grid xs = {12} md={3} order = {{xs: 1, sm: 1, md: 3}}>

      <Route path="/blog">
        <BlogNav blogPosts={blogPosts}/>
      </Route>

      </Grid>

    </Grid>

    </div>
  );
}

export default App;
