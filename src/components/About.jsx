import React from "react";

function About() {
  const features = [
    {
      title: "Modern Dental Equipment",
      desc: "We use advanced dental technology and modern tools to ensure accurate diagnosis and effective treatment for every patient."
    },
    {
      title: "Experienced Dental Professionals",
      desc: "Our skilled dental team provides quality care with years of experience in dental treatments and patient care."
    },
    {
      title: "Pain-Free Comfortable Treatment",
      desc: "We focus on gentle and stress-free dental procedures so that every visit is comfortable for our patients."
    },
    {
      title: "Personalized Patient Care",
      desc: "Every smile is unique. We create customized treatment plans according to each patient's dental needs."
    }
  ];

  return (
    <section className="bg-gray-100 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-12">

          <span className="text-sm bg-gray-200 px-4 py-1 rounded-full">
            WHY CHOOSE US
          </span>

          <h2 className="text-4xl font-bold mt-4">
            About City Dental Clinic
          </h2>

          <div className="grid md:grid-cols-2 gap-10 mt-6 text-gray-600">

            <p>
              City Dental Clinic, located on Railway Road in Shiv Colony,
              Palwal, Haryana, provides professional dental care for patients
              in Palwal rural and nearby areas. Our goal is to help every
              patient achieve a healthy and confident smile.
            </p>

            <p>
              We offer a wide range of dental services including teeth
              cleaning, fillings, root canal treatments, tooth extractions,
              dental implants and orthodontic treatments. Our clinic focuses
              on maintaining high hygiene standards and patient comfort.
            </p>

          </div>

        </div>


        {/* Feature Cards */}
        <div className="grid md:grid-cols-4 gap-6">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default About;