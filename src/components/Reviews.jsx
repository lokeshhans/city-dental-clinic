import React from "react";

function Reviews() {

  const reviews = [
    {
      name: "Rahul Sharma",
      rating: "⭐⭐⭐⭐⭐",
      date: "12 May 2025",
      time: "10:45 AM",
      review:
        "Very good dental clinic in Palwal. The doctor explained everything clearly and the treatment was painless."
    },
    {
      name: "Neha Verma",
      rating: "⭐⭐⭐⭐⭐",
      date: "8 May 2025",
      time: "6:20 PM",
      review:
        "Clean clinic and friendly staff. The dentist is very professional."
    },
    {
      name: "Amit Kumar",
      rating: "⭐⭐⭐⭐⭐",
      date: "4 May 2025",
      time: "11:10 AM",
      review:
        "Best dental clinic in the area. I had my root canal treatment here."
    },
    {
      name: "Pooja Singh",
      rating: "⭐⭐⭐⭐⭐",
      date: "30 April 2025",
      time: "4:35 PM",
      review:
        "Very good experience. The doctor handled the treatment carefully."
    },
    {
      name: "Sandeep Yadav",
      rating: "⭐⭐⭐⭐⭐",
      date: "26 April 2025",
      time: "12:05 PM",
      review:
        "Great service and hygienic clinic environment."
    },
    {
      name: "Ritika Sharma",
      rating: "⭐⭐⭐⭐⭐",
      date: "22 April 2025",
      time: "5:50 PM",
      review:
        "Teeth cleaning treatment was done very well."
    },
    {
      name: "Ankit Gupta",
      rating: "⭐⭐⭐⭐⭐",
      date: "18 April 2025",
      time: "10:20 AM",
      review:
        "Highly recommended dental clinic in Palwal."
    },
    {
      name: "Priya Chaudhary",
      rating: "⭐⭐⭐⭐⭐",
      date: "14 April 2025",
      time: "3:30 PM",
      review:
        "Doctor explained everything clearly before treatment."
    },
    {
      name: "Vikas Kumar",
      rating: "⭐⭐⭐⭐⭐",
      date: "10 April 2025",
      time: "11:40 AM",
      review:
        "Very professional and clean dental clinic."
    },
    {
      name: "Suman Devi",
      rating: "⭐⭐⭐⭐⭐",
      date: "6 April 2025",
      time: "1:10 PM",
      review:
        "Satisfied with treatment and staff behavior."
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Header */}
      <section className="text-center py-16">

        <h1 className="text-4xl font-bold">
          Patient Reviews
        </h1>

        <p className="text-gray-600 mt-3">
          City Dental Clinic • ⭐ 4.9 Rating • 419+ Reviews
        </p>

      </section>


      {/* Reviews Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg"
            >

              <h3 className="font-semibold text-lg">
                {item.name}
              </h3>

              <p className="text-yellow-500">
                {item.rating}
              </p>

              <p className="text-sm text-gray-500 mt-1">
                {item.date} • {item.time}
              </p>

              <p className="text-gray-600 mt-3">
                {item.review}
              </p>

            </div>
          ))}

        </div>

      </section>


      {/* Google Review Button */}
      <div className="text-center pb-16">

        <a
          href="https://www.google.com/search?q=city+dental+clinic&rlz=1C1GCEA_enIN1191IN1191&oq=city+&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg5Mg0IAhAAGJECGIAEGIoFMgwIAxAAGEMYgAQYigUyDQgEEAAYkQIYgAQYigUyDAgFEAAYQxiABBiKBTIGCAYQRRg8MgYIBxBFGD3SAQgxODA1ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8&lqi=ChJjaXR5IGRlbnRhbCBjbGluaWNI5_20nau2gIAIWiAQABABEAIYABgBGAIiEmNpdHkgZGVudGFsIGNsaW5pY5IBDWRlbnRhbF9jbGluaWM#lkt=LocalPoiReviews&rlimm=3734261821571728080&lrd=0x390cd39148663bdd:0x33d2c3577d1602d0,3,,,,"
          className="bg-green-600 text-white px-6 py-3 rounded-lg"
        >
          Write a Google Review
        </a>

      </div>

    </div>
  );
}

export default Reviews;