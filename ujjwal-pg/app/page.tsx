"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  /* PREMIUM LOADER */
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#0f172a]">
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-white rounded-full animate-bounce"></span>
          <span className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:0.15s]"></span>
          <span className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:0.3s]"></span>
        </div>
      </div>
    );
  }

  return (
    <main className="w-full text-gray-800">

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/918969485514"
        target="_blank"
        className="fixed bottom-5 right-5 z-50 bg-[#25D366] text-white text-2xl px-4 py-3 rounded-full shadow-lg"
      >
        💬
      </a>

      {/* HERO WITH IMAGE */}
      <section
        className="min-h-screen flex items-center justify-center text-center px-6 relative"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1560448204-e02f11c3d0e2)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-white max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Ujwal Boys PG
          </h1>
          <p className="text-lg mb-2">
            Comfortable • Affordable • Student-Friendly
          </p>
          <p className="mb-8">📍 Greater Noida</p>

          <div className="flex justify-center gap-4">
            <a
              href="tel:8969485514"
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/918969485514"
              target="_blank"
              className="border border-white px-6 py-3 rounded-lg font-semibold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Ujwal Boys PG</h2>
        <p className="text-gray-600">
          Ujwal Boys PG provides a safe, clean and disciplined environment
          for students. Located near major colleges in Greater Noida,
          ensuring comfort, hygiene and peace of mind for parents.
        </p>
      </section>

      {/* ROOMS & PRICING */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Rooms & Pricing</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Four Seater",
              price: "₹7,500 / month",
              img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
            },
            {
              title: "Three Seater",
              price: "₹8,000 / month",
              img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
            },
            {
              title: "Two Seater",
              price: "₹8,500 / month",
              img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
            },
          ].map((room, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img src={room.img} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{room.title}</h3>
                <p className="mt-2 font-bold text-blue-600">{room.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOD FACILITY */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Food Facility</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Breakfast",
              items: ["Poha / Upma", "Paratha + Sabzi", "Bread Butter", "Tea / Milk"],
            },
            {
              title: "Lunch",
              items: ["Dal / Rajma", "Rice & Roti", "Seasonal Sabzi", "Salad"],
            },
            {
              title: "Dinner",
              items: ["Paneer / Chicken (weekly)", "Roti & Sabzi", "Light Meals"],
            },
          ].map((meal, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">{meal.title}</h3>
              <ul className="text-gray-600 space-y-2">
                {meal.items.map((item, j) => (
                  <li key={j}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          * Menu may change weekly as per student preference
        </p>
      </section>

      {/* CONTACT */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Contact & Location</h2>
        <p className="mb-2">📞 Phone: <strong>8969485514</strong></p>
        <p className="mb-6">
          💬 WhatsApp:{" "}
          <a href="https://wa.me/918969485514" className="text-blue-600 underline">
            Chat Now
          </a>
        </p>

        <iframe
          src="https://www.google.com/maps?q=Ujwal%20PG%20Greater%20Noida&output=embed"
          className="w-full h-72 rounded-xl border"
          loading="lazy"
        ></iframe>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 bg-[#0f172a] text-white">
        © 2026 Ujwal Boys PG • Greater Noida
      </footer>

    </main>
  );
}
