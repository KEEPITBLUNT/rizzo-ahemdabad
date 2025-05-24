import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Package, Sparkles, Truck } from "lucide-react";

interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ icon, title, description }) => {
  return (
    <div className="w-full h-full bg-white border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 pt-8 pb-6 px-4 rounded-xl relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-riizo-blue to-riizo-blue-light" />
      <CardContent className="flex flex-col items-center p-0">
        <div className="w-16 h-16 bg-gradient-to-br from-riizo-blue to-riizo-blue-dark rounded-lg flex items-center justify-center text-white text-xl font-bold mb-4 shadow-md">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">{title}</h3>
        <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed text-center">
          {description}
        </p>
      </CardContent>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-riizo-blue font-medium mb-3 block bg-riizo-blue/10 rounded-full px-4 py-1 w-fit mx-auto text-sm md:text-base">
            THE PROCESS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-riizo-blue to-riizo-blue-light mx-auto mb-6" />
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light">
            We've streamlined our laundry process to make your life easier and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <StepCard
            icon={<Calendar className="w-8 h-8" />}
            title="Schedule Pickup"
            description="Book your laundry pickup through our app in just seconds. Choose a time that works for you."
          />
          <StepCard
            icon={<Package className="w-8 h-8" />}
            title="We Collect"
            description="Our friendly team arrives at your doorstep to collect your laundry at your scheduled time."
          />
          <StepCard
            icon={<Sparkles className="w-8 h-8" />}
            title="We Clean"
            description="Your clothes receive premium care at our eco-friendly facility using the latest technology."
          />
          <StepCard
            icon={<Truck className="w-8 h-8" />}
            title="We Deliver"
            description="Your freshly cleaned clothes are delivered back to your doorstep at your preferred time."
          />
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-riizo-blue text-white hover:bg-riizo-blue-dark px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md text-base"
          >
            Experience Our Premium Service Today
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;