import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import AboutDoctor from "./components/AboutDoctor";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ClinicGallery from "./components/ClinicGallery";
import Reviews from "./components/Reviews";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor" element={<AboutDoctor />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutDoctor />} />
        <Route path="/gallery" element={<ClinicGallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;
