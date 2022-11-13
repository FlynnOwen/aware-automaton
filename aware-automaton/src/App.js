import './App.css';
import ProfileCard from './components/cards/profile';
import CustomAppBar from './components/navbar/appbar';
import AboutBody from './pages/about/body';
import CustomParticles from './components/body/customparticles';
import { Fade, Grid, Typography } from '@mui/material';
import { Redirect, Route, Switch } from 'react-router';
import ProjectsBody from './pages/projects/body';
import BlogNav from './pages/blog/blognav';
import CustomBlogBody from './pages/blog/body';
import { blogPosts } from './pages/blog/blogposts';

function App() {

  return (
    <div>

      <CustomParticles />
      <CustomAppBar />
      <Grid container spacing={3}>
      <Grid xs={3}>
      <Route path={["/about", "/blog", "/projects"]}>
        <ProfileCard /> 
      </Route>
      </Grid>
      <Grid xs={6}>

      <Switch>
      <Route path="/" exact>
          <Redirect to='/home' />
      </Route>
      
      <Route path="/blog" exact>
          <Redirect to='/blog/0' />
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

      <Grid xs={3}>

      <Route path="/blog">
        <BlogNav blogPosts={blogPosts}/>
      </Route>

      </Grid>

    </Grid>

    </div>
  );
}

export default App;
