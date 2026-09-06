import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsCounter from "./components/StatsCounter";
import Features from "./components/Features";
import Process from "./components/Process";
import Reviews from "./components/Reviews";
import CTABanner from "./components/CTABanner";
import ContactLocation from "./components/ContactLocation";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsCounter />
        <Features />
        <Process />
        <Reviews />
        <CTABanner />
        <ContactLocation />
      </main>
      <Footer />
    </>
  );
}
