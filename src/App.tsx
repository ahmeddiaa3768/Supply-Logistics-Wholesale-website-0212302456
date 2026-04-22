import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Technology from './components/Technology';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <Services />
      <Features />
      <Stats />
      <Testimonials />
      <Technology />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
