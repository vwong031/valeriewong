// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About'
import Education from './components/Education'
import Extracurricular from './components/Extracurricular';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Education />
      <Experience />
      <Extracurricular />
      <Footer />
    </div>
  );
}

export default App;
