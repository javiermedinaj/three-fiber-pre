import Hero from './components/Hero';
import Who from './components/Who';
import Works from './components/Works';
import Contact from './components/Contact';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Cube from './components/Cube';


const Container = styled.div`
  background-color: #f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;  
  justify-content: center;
  min-height: 100vh;
`;
function App() {
  return (
    <Container>
      <Navbar/>
      <Hero/>
      
      <Who/>
      <Works/>
      <Contact/>
    </Container>
  );
}

export default App;
