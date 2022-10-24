import './App.css';
import ProfileCard from './components/cards/profile';
import CustomAppBar from './components/navbar/appbar';


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
    <ProfileCard/>
    </>
  );
}

export default App;
