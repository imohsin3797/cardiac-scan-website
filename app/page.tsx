import Hero2 from "./components/Hero2";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero2 />
      <Services />
      <WhyChooseUs />
      <ContactSection />
    </main>
  );
}
