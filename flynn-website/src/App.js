import './App.css';
import { AppBar, IconButton, MenuItem, Toolbar, Typography } from '@material-ui/core';


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

  return (<AppBar position="static">
    <Toolbar variant="dense">
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuItem />
      </IconButton>
      <Typography variant="h6" color="inherit" component="div">
        Photos
      </Typography>
    </Toolbar>
  </AppBar>);
}

export default App;
