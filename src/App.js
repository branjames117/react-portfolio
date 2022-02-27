import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [activeComponent, setActiveComponent] = useState('About');

  useEffect(() => {
    document.title = `Bran James | ${
      activeComponent === 'About' ? 'Full-Stack Web Developer' : activeComponent
    }`;
  }, [activeComponent]);

  return (
    <>
      <Nav
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
      />
      {activeComponent === 'About' && (
        <About activeComponent={activeComponent} />
      )}
      {activeComponent === 'Projects' && (
        <Projects activeComponent={activeComponent} />
      )}
      {activeComponent === 'Contact' && (
        <Contact activeComponent={activeComponent} />
      )}
      {activeComponent === 'Resume' && (
        <Resume activeComponent={activeComponent} />
      )}
      <Footer />
    </>
  );
}

export default App;
