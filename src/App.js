import './App.css';
import About from './components/About';
import Assist from './components/Assist';
import Banner from './components/Banner/Banner';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Assist/>
      <Banner/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
