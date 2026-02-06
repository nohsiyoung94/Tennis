import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Programs />
      {/* We could add more sections here like Gallery, Coaches, Location map */}
      <Footer />
    </div>
  );
}

export default App;
