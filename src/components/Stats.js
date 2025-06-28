"use client";
import { useEffect, useState } from "react";

function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 90);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 30);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
}

export default function Stats() {
  const years = useCountUp(8);
  const clients = useCountUp(500);

  return (
    <section className="bg-[#e6e8eb] py-12 px-6 text-center text-white">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12">
        <div>
          <h3 className="text-5xl font-bold text-blue-800">{years}+</h3>
          <p className="mt-2 text-lg font-bold text-black">Years of Experience</p>
        </div>
        <div>
          <h3 className="text-5xl font-bold text-blue-800">{clients.toLocaleString()}+</h3>
          <p className="mt-2 text-lg font-bold text-black">Client Sessions Completed</p>
        </div>
      </div>
    </section>
  );
}