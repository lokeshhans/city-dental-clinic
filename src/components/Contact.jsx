import React from "react";

function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Header */}
      <section className="text-center py-16">

        <h1 className="text-4xl font-bold">
          Contact City Dental Clinic
        </h1>

        <p className="text-gray-600 mt-3">
          Visit our clinic in Palwal for professional dental care
        </p>

      </section>


      {/* Contact Section */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 pb-20">

        {/* Left Info */}
        <div className="bg-white p-8 rounded-xl shadow">

          <h2 className="text-2xl font-bold mb-6">
            Clinic Information
          </h2>

          <p className="text-gray-700 mb-4">
            📍 <strong>Address:</strong><br />
            Railway Rd, Shiv Colony,<br />
            Palwal, Haryana 121102
          </p>

          <p className="text-gray-700 mb-4">
            📞 <strong>Phone:</strong><br />
            098969 30128
          </p>

          <a
            href="tel:9896930128"
            className="inline-block mt-4 bg-green-600 text-white px-6 py-3 rounded-lg"
          >
            Call Now
          </a>

        </div>


        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow">

          <h2 className="text-2xl font-bold mb-6">
            Send Message
          </h2>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border p-3 rounded"
            />

            <textarea
              placeholder="Message"
              rows="4"
              className="w-full border p-3 rounded"
            ></textarea>

            <button
              className="bg-blue-600 text-white px-6 py-3 rounded w-full"
            >
              Send Message
            </button>

          </form>

        </div>

      </section>


      {/* Google Map */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <iframe
          title="City Dental Clinic Location"
          src="https://maps.google.com/maps?q=City%20Dental%20Clinic%20Palwal&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-96 rounded-xl shadow"
        ></iframe>

      </section>

    </div>
  );
}

export default Contact;