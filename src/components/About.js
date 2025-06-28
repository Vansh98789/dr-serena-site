export default function About() {
  return (
    <section className="py-20 px-6 bg-[#344C64] text-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <img
          src="/dr-blake.jpg"
          alt="Dr. Serena Blake"
          className="w-64 h-64 object-cover rounded-full shadow-md border-4 border-white"
        />
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-4">Meet Dr. Serena Blake</h2>
          <p className="mb-4 leading-relaxed text-lg">
            With over eight years of experience and more than 500 client sessions, Dr. Serena Blake has helped individuals navigate life’s most challenging moments. Her approach blends science-backed methods like CBT and mindfulness with deep empathy and a down-to-earth style.
          </p>
          <p className="leading-relaxed text-lg">
            Whether you're working through anxiety, relationship struggles, or past trauma, Dr. Blake creates a safe, judgment-free space—online or in-person—where healing and growth are truly possible.
          </p>
        </div>
      </div>
    </section>
  );
}