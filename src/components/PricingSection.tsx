
import React, { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingPlanProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PricingPlan: React.FC<PricingPlanProps> = ({ name, price, description, features, isPopular }) => {
  return (
    <div className={`bg-white rounded-xl shadow-md p-6 border ${isPopular ? 'border-riizo-blue' : 'border-gray-200'} relative transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-riizo-blue text-white text-xs font-semibold px-3 py-1 rounded-tr-xl rounded-bl-xl">
          Most Popular
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="text-3xl font-bold text-gray-900">{price}</div>
        <div className="text-sm text-gray-500 mt-1">per month</div>
      </div>
      
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-riizo-blue mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        className={`w-full ${isPopular ? 'bg-riizo-blue hover:bg-riizo-blue-dark' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'} rounded-md transition-all duration-300`}
      >
        Choose Plan
      </Button>
    </div>
  );
};

const PricingSection: React.FC = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  
  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your laundry needs
          </p>
          
          {/* Toggle between monthly and annual pricing */}
          <div className="flex items-center justify-center mt-6">
            <button 
              className={`px-4 py-2 rounded-l-md ${isMonthly ? 'bg-riizo-blue text-white' : 'bg-gray-100 text-gray-600'}`}
              onClick={() => setIsMonthly(true)}
            >
              Monthly
            </button>
            <button 
              className={`px-4 py-2 rounded-r-md ${!isMonthly ? 'bg-riizo-blue text-white' : 'bg-gray-100 text-gray-600'}`}
              onClick={() => setIsMonthly(false)}
            >
              Annual
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingPlan 
            name="Basic"
            price={isMonthly ? "₹999" : "₹9,999"}
            description="Perfect for individuals"
            features={[
              "8 kg of laundry per month",
              "Weekly pickup & delivery",
              "Standard 48-hour turnaround",
              "Basic stain treatment",
              "Washing & folding service"
            ]}
          />
          
          <PricingPlan 
            name="Premium"
            price={isMonthly ? "₹1,999" : "₹19,999"}
            description="Ideal for couples & small families"
            features={[
              "20 kg of laundry per month",
              "Bi-weekly pickup & delivery",
              "Express 24-hour turnaround",
              "Premium stain treatment",
              "Washing, ironing & folding service",
              "Shoe care included"
            ]}
            isPopular={true}
          />
          
          <PricingPlan 
            name="Family"
            price={isMonthly ? "₹2,999" : "₹29,999"}
            description="Best for large families"
            features={[
              "35 kg of laundry per month",
              "On-demand pickup & delivery",
              "Priority 12-hour turnaround",
              "Advanced stain treatment",
              "Complete garment care service",
              "Shoe care & dry cleaning included",
              "Dedicated customer support"
            ]}
          />
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Need a custom plan for your business? <a href="#contact" className="text-riizo-blue font-semibold underline">Contact us</a> for corporate solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
