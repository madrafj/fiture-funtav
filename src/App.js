import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import NavBar from './components/navbar';
import About from './pages/about';
import CustomPlan from './pages/custom-plan';
import Home from './pages/home';
import PreScreening from './pages/pre-screening';
import SmartPlans from './pages/smart-plan';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<PreScreening />} />
        <Route path="custom-plan" element={<CustomPlan />} />
        <Route path="smart-plan" element={<SmartPlans />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
