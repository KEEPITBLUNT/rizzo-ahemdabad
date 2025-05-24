
import React from "react";
import { WashingMachine, Shirt, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        scale: 1.03, 
        boxShadow: "0 10px 25px -5px rgba(51, 195, 240, 0.1), 0 8px 10px -6px rgba(51, 195, 240, 0.1)"
      }}
    >
      <Card className="h-full overflow-hidden border-t-4 border-riizo-blue bg-white shadow-lg hover:shadow-xl transition-all duration-300">
        <CardHeader className="pt-6">
          <div className="bg-riizo-blue-light p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-1 text-gray-800">{title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-riizo-blue font-medium mb-2 block">OUR SERVICES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Premium Cleaning Services</h2>
          <div className="w-20 h-1 bg-riizo-blue mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the highest standards of care for your garments with our professional cleaning services.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<WashingMachine className="h-8 w-8 text-riizo-blue" />}
            title="Laundry Service"
            description="Professional washing, drying, and folding of everyday clothes. We treat your clothes with care and eco-friendly detergents."
            delay={0.1}
          />
          
          <ServiceCard 
            icon={<Shirt className="h-8 w-8 text-riizo-blue" />}
            title="Dry Cleaning"
            description="Expert dry cleaning for your delicate fabrics, suits, dresses, and professional attire. Stain removal guaranteed."
            delay={0.3}
          />
          
          <ServiceCard 
            icon={<ShoppingBag className="h-8 w-8 text-riizo-blue" />}
            title="Shoe Care"
            description="Complete shoe cleaning and maintenance service to keep your footwear looking new and extending their lifespan."
            delay={0.5}
          />
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Button 
              className="bg-riizo-blue hover:bg-riizo-blue-dark text-white px-8 py-7 text-lg rounded-md shadow-md transition-all duration-300 flex mx-auto items-center gap-3 group"
            >
              View All Services
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
