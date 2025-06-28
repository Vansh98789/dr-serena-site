"use client";
import { useEffect, useState } from "react";

const images = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-center text-white px-6 transition-all duration-1000"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        transition: "background-image 1s ease-in-out",
      }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-3xl leading-tight drop-shadow">
        A safe space to explore, heal, and grow.
      </h1>
      <h2 className="text-lg md:text-xl mb-8 max-w-2xl drop-shadow">
        Compassionate, evidence-based therapy for individuals seeking clarity, connection, and calm — available in-person or online.
      </h2>
      <a
        href="#contact"
        className="bg-white text-black font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-200 transition"
      >
        Book a Free Consult
      </a>
    </section>
  );
}
