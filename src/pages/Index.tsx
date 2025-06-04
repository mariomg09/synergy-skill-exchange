
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import QuickStart from "@/components/QuickStart";
import HowItWorks from "@/components/HowItWorks";
import Founder from "@/components/Founder";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white">
      <Navbar />
      <Hero />
      <QuickStart />
      <Features />
      <HowItWorks />
      <Founder />
      <Footer />
    </div>
  );
};

export default Index;
