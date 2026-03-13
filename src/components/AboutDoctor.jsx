import React from "react";
import doctor from "../assets/owner.webp";

function AboutDoctor() {
  return (
    <section className="bg-gray-100 py-16">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Doctor Image */}
        <div className="flex justify-center">
          <img
            src={doctor}
            alt="City Dental Clinic Doctor"
            className="rounded-3xl shadow-xl w-full max-w-md object-cover"
          />
        </div>

        {/* Doctor Details */}
        <div>

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Doctor
          </h2>

          <h3 className="text-xl font-semibold text-blue-600 mb-4">
            Dr. Naveen
          </h3>

          <p className="text-gray-600 mb-4">
            Dr. Naveen is an experienced dental professional dedicated to
            providing high-quality dental care to patients in Palwal and
            surrounding areas. With a patient-focused approach, he ensures
            comfortable and effective treatment for every visitor.
          </p>

          <p className="text-gray-600 mb-6">
            At City Dental Clinic, Dr. Naveen offers a wide range of dental
            services including root canal treatment, dental implants,
            tooth extraction, braces, scaling, and cosmetic dentistry.
            His goal is to help every patient achieve a healthy and
            confident smile.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4">

            <div className="bg-white p-4 rounded-xl shadow">
              <h4 className="font-semibold">Experience</h4>
              <p className="text-gray-600 text-sm">
                10+ Years
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow">
              <h4 className="font-semibold">Patients Treated</h4>
              <p className="text-gray-600 text-sm">
                5000+
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow">
              <h4 className="font-semibold">Specialization</h4>
              <p className="text-gray-600 text-sm">
                Dental Surgery
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow">
              <h4 className="font-semibold">Location</h4>
              <p className="text-gray-600 text-sm">
                Palwal, Haryana
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutDoctor;