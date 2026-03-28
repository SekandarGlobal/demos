import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import Properties from "@/components/Properties";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Agents from "@/components/Agents";
import ParallaxCTA from "@/components/ParallaxCTA";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-950 overflow-x-hidden">
      <Navbar />
      <Hero />
      <MarqueeBanner />
      <Properties />
      <Stats />
      <About />
      <Agents />
      <ParallaxCTA />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
