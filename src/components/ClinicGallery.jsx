import React from "react";

function ClinicGallery() {

  const images = [
     "/public/images/img1.webp",
    "/images/img2.webp",
    "/images/img3.webp",
    "/images/img4.webp",
    "/images/img5.webp",
    "/images/inner.avif"
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