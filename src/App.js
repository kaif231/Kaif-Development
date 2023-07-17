import './App.css';
import About from './components/About'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Techstack from './components/Techstack'
import Projects from './components/Projects';
import Contact from './components/Contact'
import{Routes,Route, Link} from 'react-router-dom'
function App() {
  return (
    <>
    <Link to='/'></Link>
    <Link to='/About'></Link>
    <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}/>
      <Route path='/Techstack' element={<Techstack/>}/>
      <Route path='/Projects' element={<Projects/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
