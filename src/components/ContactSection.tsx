
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted!");
  };
  
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <div className="w-20 h-1 bg-riizo-blue mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions or need assistance? We're here to help!
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" required className="border-gray-300 focus:border-riizo-blue" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email" required className="border-gray-300 focus:border-riizo-blue" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Your phone number" className="border-gray-300 focus:border-riizo-blue" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  className="w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-riizo-blue focus-visible:ring-offset-2 min-h-[120px]"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  type="submit"
                  className="bg-riizo-blue hover:bg-riizo-blue-dark text-white rounded-md w-full py-6 shadow-md"
                >
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div 
            className="flex flex-col justify-between"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Contact Information</h3>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-riizo-blue-light p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-riizo-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">+91 12345 67890</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-riizo-blue-light p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-riizo-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600">info@riizolaundry.com</p>
                    <p className="text-gray-600">support@riizolaundry.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-riizo-blue-light p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-riizo-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Address</h4>
                    <p className="text-gray-600">123 Clean Street, Navrangpura</p>
                    <p className="text-gray-600">Ahmedabad, Gujarat 380009</p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <motion.div 
              className="mt-8 bg-gray-50 p-6 rounded-lg shadow-md"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 className="font-semibold text-lg mb-2 text-gray-800">Business Hours</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-gray-600">Monday - Friday</div>
                <div className="font-medium text-gray-800">8:00 AM - 8:00 PM</div>
                <div className="text-gray-600">Saturday</div>
                <div className="font-medium text-gray-800">9:00 AM - 6:00 PM</div>
                <div className="text-gray-600">Sunday</div>
                <div className="font-medium text-gray-800">10:00 AM - 4:00 PM</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
