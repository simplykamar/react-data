import './App.css';
import styled from 'styled-components';
import Hero from './components/Hero';
import Who from './components/Who';
import Works from './components/Works';
import Contact from './components/Contact';
import Test from './components/Test';



const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color:blueviolet;
  color:white;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y:auto;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  };
  background-image: url("/img/bg1.jpg");
  background-size:cover;
  background-position:center

`

function App() {

  return (
    <Container>
      <Hero/>
      <Who/>
      <Works/>
      <Contact/>
      <Test/>
    </Container>

  )
}

export default App
