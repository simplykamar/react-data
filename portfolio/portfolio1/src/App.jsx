import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import {useSelector} from 'react-redux';
import Particle from './components/Particles/Particles';
import Experience from './components/Experience/Experience';

import './App.css';
function App() {
  const darkmode = useSelector((state)=>state)

  return (
    <div className="app"
      style={{
        backgroundColor: darkmode ? 'black' : '',
        color: darkmode ? 'white' : '',
      }}
    >
    <Particle/>
     <Navbar/>
      <Intro/>
      <Services/>
      <Portfolio/>
      <Form/>
      <Footer/>
    {/* <Experience/> */}
    </div>
  )
}

export default App
