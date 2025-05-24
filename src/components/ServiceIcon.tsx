
import React from "react";
import { WashingMachine, Shirt, ShoppingBag } from "lucide-react";

type ServiceIconProps = {
  type: "laundry" | "dry-cleaning" | "shoe-care";
  title: string;
};

const ServiceIcon: React.FC<ServiceIconProps> = ({ type, title }) => {
  const getIcon = () => {
    switch (type) {
      case "laundry":
        return <WashingMachine className="h-6 w-6 text-riizo-blue" />;
      case "dry-cleaning":
        return <Shirt className="h-6 w-6 text-riizo-blue" />;
      case "shoe-care":
        return <ShoppingBag className="h-6 w-6 text-riizo-blue" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center gap-2 bg-white p-2 rounded-md shadow-sm">
      {getIcon()}
      <span className="text-sm font-medium">{title}</span>
    </div>
  );
};

export default ServiceIcon;
