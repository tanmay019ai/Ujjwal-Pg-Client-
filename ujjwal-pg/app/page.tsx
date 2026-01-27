"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(t);
  }, []);

  /* Loader */
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <div className="flex gap-2">
          <span className="w-2.5 h-2.5 bg-slate-900 rounded-full animate-bounce"></span>
          <span className="w-2.5 h-2.5 bg-slate-900 rounded-full animate-bounce [animation-delay:0.15s]"></span>
          <span className="w-2.5 h-2.5 bg-slate-900 rounded-full animate-bounce [animation-delay:0.3s]"></span>
        </div>
      </div>
    );
  }

  return (
    <main className="w-full">

      {/* WhatsApp Floating */}
      <a
        href="https://wa.me/918969485514"
        className="fixed bottom-5 right-5 z-50 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg text-xl"
      >
        💬
      </a>

      {/* HERO */}
      <section
        className="min-h-screen flex items-center justify-center px-6 relative"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1560448204-e02f11c3d0e2)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center text-white max-w-xl">
          <h1 className="text-4xl font-bold mb-4">Ujwal Boys PG</h1>
          <p className="text-base mb-2">
            Comfortable • Affordable • Student-Friendly
          </p>
          <p className="mb-8 text-sm">📍 Greater Noida</p>

          <div className="flex gap-3 justify-center">
            <a
              href="tel:8969485514"
              className="bg-white text-slate-900 px-5 py-3 rounded-lg font-semibold"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/918969485514"
              className="border border-white px-5 py-3 rounded-lg font-semibold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">
          About Ujwal Boys PG
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Ujwal Boys PG provides a safe, clean and disciplined living
          environment for students. Located near major colleges in
          Greater Noida, ensuring comfort, hygiene and peace of mind
          for both students and parents.
        </p>
      </section>

      {/* ROOMS */}
      <section className="py-16 px-6 bg-slate-50">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Rooms & Pricing
        </h2>

        <div className="grid gap-6 max-w-5xl mx-auto md:grid-cols-3">
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
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <img
                src={room.img}
                className="h-44 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-semibold text-lg">
                  {room.title}
                </h3>
                <p className="text-slate-700 font-medium mt-1">
                  {room.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOD */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Food Facility
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Breakfast",
              items: ["Poha / Upma", "Paratha", "Bread Butter", "Tea / Milk"],
            },
            {
              title: "Lunch",
              items: ["Dal / Rajma", "Rice & Roti", "Seasonal Sabzi", "Salad"],
            },
            {
              title: "Dinner",
              items: ["Paneer / Chicken", "Roti & Sabzi", "Light Meals"],
            },
          ].map((meal, i) => (
            <div key={i} className="bg-slate-50 p-5 rounded-xl">
              <h3 className="font-semibold mb-3">{meal.title}</h3>
              <ul className="text-slate-600 space-y-1 text-sm">
                {meal.items.map((item, j) => (
                  <li key={j}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">
          Contact & Location
        </h2>

        <p className="mb-1">📞 Phone: <strong>8969485514</strong></p>
        <p className="mb-6">
          💬 WhatsApp:{" "}
          <a
            href="https://wa.me/918969485514"
            className="text-blue-600 underline"
          >
            Chat Now
          </a>
        </p>

        <iframe
          src="https://www.google.com/maps?q=Ujwal%20PG%20Greater%20Noida&output=embed"
          className="w-full h-64 rounded-lg border"
          loading="lazy"
        ></iframe>
      </section>

      <footer className="text-center py-6 text-sm text-slate-500">
        © 2026 Ujwal Boys PG • Greater Noida
      </footer>

    </main>
  );
}
