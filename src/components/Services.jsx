function Services() {

  const services = [
    { title: "Bonding", desc: "Repair chipped or cracked teeth with tooth-colored bonding material." },
    { title: "Check-ups", desc: "Regular dental examinations to maintain healthy teeth and gums." },
    { title: "Cosmetic Procedures", desc: "Enhance the appearance of your smile with modern cosmetic treatments." },
    { title: "Dental Implants", desc: "Permanent replacement for missing teeth with natural-looking implants." },
    { title: "Dentures & Bridges", desc: "Restore missing teeth and improve chewing with custom dentures and bridges." },
    { title: "Extractions", desc: "Safe removal of damaged or infected teeth using modern techniques." },
    { title: "Fillings & Sealants", desc: "Treat cavities and protect teeth with high-quality dental fillings and sealants." },
    { title: "Laser Dentistry", desc: "Advanced dental procedures using precise and comfortable laser technology." },
    { title: "Mouth Guards", desc: "Custom mouth guards to protect teeth during sports or teeth grinding." },
    { title: "Oral Surgery", desc: "Specialized surgical treatments for complex dental conditions." },
    { title: "Paediatric Dentistry", desc: "Gentle dental care designed specifically for children." },
    { title: "Root Canals", desc: "Painless root canal treatment to save infected teeth." },
    { title: "Teeth Cleaning", desc: "Professional cleaning to remove plaque and maintain healthy gums." },
    { title: "Teeth Reshaping", desc: "Improve tooth shape and alignment for a better smile." },
    { title: "Veneers & Crowns", desc: "Restore damaged teeth and improve appearance with veneers and crowns." },
    { title: "Dental X-ray", desc: "Digital X-ray technology for accurate diagnosis of dental problems." }
  ];

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Our Dental Services
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 shadow rounded-xl hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold">
                {service.title}
              </h3>

              <p className="text-gray-600 mt-2 text-sm">
                {service.desc}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;