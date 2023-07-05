import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './components/section/About';
import Contact from './components/section/Contact';
import Home from './components/section/Home';
import Projects from './components/section/Projects';

function App() {
  return (
    <body>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </body>
  );
}

export default App;
