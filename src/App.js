import './App.css';
import About from './components/About';
import Assist from './components/Assist';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Assist/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
