import React from "react";
import Services from "./Services";
import ClinicGallery from "./ClinicGallery";
import AboutDoctor from "./AboutDoctor";
import Contact from "./Contact";
import Footer from "./Footer";
import Reviews from "./Reviews";
import img from "../assets/main-page.png"

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center p-10">
        {/* Left Side */}
        <div>
          <h2 className="text-5xl font-bold text-gray-900 leading-tight">
            Your Perfect Smile
            <br />
            Starts with
            <br />
            City Dental Clinic
          </h2>

          <p className="mt-6 text-gray-600">
            Advanced dental care with a gentle touch. Book your appointment
            today.
          </p>

          {/* Cards */}
          <div className="grid gap-6 mt-10 ">
            {/* Working Hours */}
            <div className="bg-white p-6 rounded-xl shadow w-auto">
              <h3 className="font-semibold mb-3">Working Hours</h3>

              <p className="text-sm text-gray-600">Monday – Sunday</p>

              <p className="text-sm font-medium">10AM – 8PM</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow w-auto">
              <h3 className="font-semibold mb-3">Rest Hours</h3>

              <p className="text-sm text-gray-600">Monday – Sunday</p>

              <p className="text-sm font-medium">2PM – 5PM</p>
            </div>

            {/* Appointment Button */}
            <div className="bg-cyan-200  rounded-xl flex items-center justify-center w-auto">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSeCWNklHuZHnrMw3EJaY1JwuRDItV00n66t_errthdFfIJ5dQ/viewform" target="_blank" className="font-semibold text-lg">
                Book an Appointment →
              </a>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full">
          <img
            src={img}
            alt="Dental care"
            className="w-full h-auto object-cover rounded-3xl shadow-lg"
          />
        </div>
      </section>

      <Services />
      <ClinicGallery />
      <AboutDoctor/>
      <Reviews/>
      <Contact/>
      <Footer/> 
    </div>
  );
}

export default Home;
