
import React, { useEffect, useRef } from "react";
import ServiceIcon from "./ServiceIcon";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import UserAvatar from "./UserAvatar";
import { motion } from "framer-motion";
import ThreeDBackground from "./ThreeDBackground";
import gsap from "@/lib/gsap";
import { useGSAP } from "@/lib/gsap";

const HeroSection: React.FC = () => {
  const heroRef = useRef(null);
  
  useGSAP(() => {
    const tl = gsap.timeline();
    
    // Simplified animations for better performance
    tl.from(".hero-title span", {
      y: 30,
      opacity: 0,
      stagger: 0.15,
      duration: 0.6,
      ease: "power3.out"
    })
    .from(".hero-description", {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out"
    }, "-=0.2")
    .from(".hero-stats, .services-row, .hero-cta", {
      y: 20,
      opacity: 0,
      stagger: 0.1, 
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.1");
  
  }, { scope: heroRef });

  return (
    <section ref={heroRef} className="relative min-h-screen pt-20 pb-10 md:pt-28 md:pb-16 overflow-hidden bg-gradient-to-br from-riizo-blue-light/5 via-white to-white">
      <ThreeDBackground />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          {/* Left column with text content */}
          <div className="w-full md:w-1/2 space-y-6 md:space-y-8 py-4 md:py-0">
            <div className="space-y-4">
              <motion.span 
                className="text-riizo-blue font-medium px-4 py-1 rounded-full bg-riizo-blue/10 inline-block mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Premium Laundry Service
              </motion.span>
              <h1 className="hero-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                <span className="block text-2xl sm:text-3xl font-medium text-gray-700">Welcome to</span>
                <span className="block mt-2">Riizo Laundry.</span>
                <span className="block mt-3 text-riizo-blue">Effortless Cleaning,</span>
                <span className="block mt-3 text-gray-800 font-semibold">Right at Your Doorstep.</span>
              </h1>
            </div>
            
            <p className="hero-description text-base sm:text-lg md:text-xl text-gray-600 max-w-lg font-light">
              Ahmedabad's most trusted eco-clean laundry & dry cleaning service with doorstep pickup and delivery.
            </p>
            
            {/* User count with avatars - better mobile display */}
            <div className="hero-stats flex items-center gap-3 bg-white p-2 sm:p-3 rounded-lg shadow-md border border-gray-100 w-fit backdrop-blur-sm bg-opacity-80">
              <div className="flex -space-x-2 sm:-space-x-3">
                <UserAvatar 
                  imageUrl="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=150&h=150" 
                  name="Rajesh Kumar"
                  className="h-8 w-8 sm:h-10 sm:w-10 border-2 border-white shadow-sm"
                />
                <UserAvatar 
                  imageUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150" 
                  name="Priya Sharma"
                  className="h-8 w-8 sm:h-10 sm:w-10 border-2 border-white shadow-sm"
                />
                <UserAvatar 
                  imageUrl="https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=150&h=150" 
                  name="Amit Patel"
                  className="h-8 w-8 sm:h-10 sm:w-10 border-2 border-white shadow-sm"
                />
                <UserAvatar 
                  imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150" 
                  name="Neha Singh"
                  className="h-8 w-8 sm:h-10 sm:w-10 border-2 border-white shadow-sm"
                />
              </div>
              <div>
                <span className="font-semibold text-base sm:text-lg block text-riizo-blue">
                  <AnimatedCounter end={25000} suffix="+" /> 
                </span>
                <span className="text-gray-500 text-xs sm:text-sm">Happy Customers</span>
              </div>
            </div>
            
            {/* Services in one line - improved mobile display */}
            <div className="services-row flex flex-row gap-3 sm:gap-5 flex-wrap py-2">
              <ServiceIcon type="laundry" title="Laundry" />
              <ServiceIcon type="dry-cleaning" title="Dry Cleaning" />
              <ServiceIcon type="shoe-care" title="Shoe Care" />
            </div>
            
            <div className="hero-cta">
              <Button 
                className="bg-riizo-blue hover:bg-riizo-blue-dark text-white rounded-md px-5 sm:px-8 py-6 sm:py-7 text-base sm:text-lg shadow-lg transition-all duration-300 flex items-center gap-2 sm:gap-3 relative overflow-hidden group"
              >
                <span className="relative z-10 font-semibold">Request Pickup Now</span>
                <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-riizo-blue to-riizo-blue-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>
          </div>
          
          {/* Right column with image - improved mobile responsiveness */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <div className="relative mx-auto max-w-md md:max-w-none">
              <div className="absolute -inset-1 bg-gradient-to-br from-riizo-blue to-riizo-blue-light rounded-lg blur-sm opacity-20"></div>
              <motion.div 
                className="relative overflow-hidden rounded-xl shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="/lovable-uploads/ee1fb7f6-554c-4f44-b2f6-f000075437f2.png"
                  alt="Laundry Service"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </motion.div>
              
              {/* Floating badge - better positioned for mobile */}
              <motion.div 
                className="absolute -right-3 sm:-right-4 top-6 sm:top-10 bg-white p-2 sm:p-3 rounded-lg shadow-lg z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-gray-900">Eco-friendly</p>
                    <p className="text-xs text-gray-500">Service</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
