
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorks from "@/components/HowItWorks";
import PricingSection from "@/components/PricingSection";
import AppMockupSection from "@/components/AppMockupSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import gsap from "@/lib/gsap";
import { useGSAP } from "@/lib/gsap";

// Register GSAP plugins
gsap.registerPlugin(useGSAP);

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // Reduced loading time
    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    if (!loading) {
      // Create a timeline for the page entrance
      const tl = gsap.timeline();
      tl.to(".page-content", {
        opacity: 1,
        duration: 0.6,
        ease: "power2.inOut"
      });
    }
  }, [loading]);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center"
        >
          <svg className="w-16 h-16 md:w-20 md:h-20 text-riizo-blue" viewBox="0 0 24 24">
            <motion.path
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
              strokeLinecap="round"
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            />
          </svg>
          <h3 className="mt-4 text-riizo-blue text-lg md:text-xl font-medium">Loading...</h3>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div 
      className="relative min-h-screen overflow-x-hidden page-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="fixed w-full top-0 z-50">
        <Navbar />
      </div>
      <HeroSection />
      <ServicesSection />
      <HowItWorks />
      <PricingSection />
      <AppMockupSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </motion.div>
  );
};

export default Index;
