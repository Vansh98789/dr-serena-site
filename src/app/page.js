import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Stats from "../components/Stats";
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Stats />
      <Services />
      <FAQ />
      <ContactForm />
    </main>
  );
}