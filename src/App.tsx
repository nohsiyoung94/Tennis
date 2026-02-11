import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProgramPage from './pages/ProgramPage';
import InstructorPage from './pages/InstructorPage';
import LocationPage from './pages/LocationPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/programs" element={<ProgramPage />} />
      <Route path="/instructors" element={<InstructorPage />} />
      <Route path="/location" element={<LocationPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
