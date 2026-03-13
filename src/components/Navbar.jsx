import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-white shadow sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-blue-600">City Dental Clinic</h1>

        <nav className="hidden md:flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact /Appointment</Link>
          <Link to="/reviews">Reviews</Link>
        </nav>

        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeCWNklHuZHnrMw3EJaY1JwuRDItV00n66t_errthdFfIJ5dQ/viewform" target="_blank" className="bg-green-900 text-white px-5 py-2 rounded-full">
          Book Appointment
        </a>
      </div>
    </header>
  );
}

export default Navbar;
