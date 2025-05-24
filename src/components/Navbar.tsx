
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-white/95 py-4"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className={`text-2xl font-bold ${scrolled ? "text-riizo-blue" : "text-riizo-blue"}`}>
              Riizo<span className="text-gray-800">Laundry</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-riizo-blue font-medium transition-colors">Home</Link>
            <a href="#services" className="text-gray-700 hover:text-riizo-blue font-medium transition-colors">Services</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-riizo-blue font-medium transition-colors">How It Works</a>
            <a href="#pricing" className="text-gray-700 hover:text-riizo-blue font-medium transition-colors">Pricing</a>
            <a href="#contact" className="text-gray-700 hover:text-riizo-blue font-medium transition-colors">Contact</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              className="bg-white border border-riizo-blue text-riizo-blue hover:bg-riizo-blue hover:text-white transition-all duration-300 rounded-md"
            >
              Login
            </Button>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                className="bg-riizo-blue hover:bg-riizo-blue-dark text-white rounded-md flex items-center gap-2 shadow-md"
              >
                <ShoppingBag className="w-4 h-4" />
                Order Pickup
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-500 hover:text-riizo-blue focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-riizo-blue font-medium py-2 transition-colors"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
              <a 
                href="#services" 
                className="text-gray-700 hover:text-riizo-blue font-medium py-2 transition-colors"
                onClick={toggleMobileMenu}
              >
                Services
              </a>
              <a 
                href="#how-it-works" 
                className="text-gray-700 hover:text-riizo-blue font-medium py-2 transition-colors"
                onClick={toggleMobileMenu}
              >
                How It Works
              </a>
              <a 
                href="#pricing" 
                className="text-gray-700 hover:text-riizo-blue font-medium py-2 transition-colors"
                onClick={toggleMobileMenu}
              >
                Pricing
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-riizo-blue font-medium py-2 transition-colors"
                onClick={toggleMobileMenu}
              >
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-2">
                <Button 
                  className="bg-white border border-riizo-blue text-riizo-blue hover:bg-riizo-blue hover:text-white transition-all duration-300 rounded-md"
                >
                  Login
                </Button>
                <Button 
                  className="bg-riizo-blue hover:bg-riizo-blue-dark text-white rounded-md flex items-center justify-center gap-2 shadow-md"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Order Pickup
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
