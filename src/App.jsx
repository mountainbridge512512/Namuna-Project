import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurProduct from './pages/OurProduct';
import ContactUs from './pages/ContactUs';
import WorkWithUs from './pages/WorkWithUs';
import MediaAndArticle from'./pages/MediaAndArticle';




const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/ourproducts" element={<OurProduct />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/workwithus" element={<WorkWithUs />} />
        <Route path="/mediaandarticle" element={<MediaAndArticle />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
