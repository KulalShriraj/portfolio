import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/NavBar';
import {Banner} from './components/Banner';
import {Skills} from './components/Skill';
import {Projects} from './components/Projects';
import {Contact} from './components/Contact';
import {Link, Route, Routes} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>

     
      
    </div>
    


   
  );
}

export default App;
