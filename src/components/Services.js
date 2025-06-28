const services = [
  {
    title: "Anxiety & Stress Management",
    description:
      "Learn to manage overwhelming thoughts and daily pressures through cognitive-behavioral techniques, mindfulness, and tailored stress-reduction strategies.",
    image: "/imgg3.png",
  },
  {
    title: "Relationship Counseling",
    description:
      "Improve communication, build deeper connection, and resolve conflict whether you're dating, partnered, or married.",
    image: "/imgg2.png",
  },
  {
    title: "Trauma Recovery",
    description:
      "Recover from past trauma in a compassionate space using gentle and effective therapies focused on healing and emotional resilience.",
    image: "/imgg1.png",
  },
];

export default function Services() {
  return (
    <section className="py-20 px-6 bg-[#344C64] text-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">Services</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#334155] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
