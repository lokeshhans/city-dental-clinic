import React from "react";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.webp";
import img4 from "../assets/4.webp";
import img6 from "../assets/6.webp";
import img7 from "../assets/7.webp";
import inner from "../assets/inner.avif";
function ClinicGallery() {

  const images = [
    img2,img3,img4,img6,img7,inner
  ];

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Header */}
      <section className="text-center py-16">

        <h1 className="text-4xl font-bold">
          City Dental Clinic Gallery
        </h1>

        <p className="text-gray-600 mt-3">
          Take a look inside our modern dental clinic in Palwal
        </p>

      </section>


      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-3 gap-6">

          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow hover:shadow-lg"
            >

              <img
                src={img}
                alt="City Dental Clinic"
                className="w-full h-72 object-cover hover:scale-105 transition duration-300"
              />

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}

export default ClinicGallery;