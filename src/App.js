
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer/index';

function App() {
  return (
    <>
      <Particles 
      className="particles-canvas"
      params={{
        particles: {
  
          number: {
            value: 30,
            density:{
              enable: true,
              value_area: 900
            }
          },
          shape: {
            type: "star",
            stroke: {
              width: 6,
              color: "#1F6566"
            }
          }
        }
      }}/>
    <Navbar />
    
    <Header />
      <About />
      <Portfolio />
    <Footer />
    </>
  );
}

export default App;
