
import React from "react";
import { Button } from "@/components/ui/button";

const AppMockupSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left column with text */}
          <div className="w-full md:w-1/2 space-y-6 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Download Our Mobile App
            </h2>
            <p className="text-lg text-gray-600">
              Experience the convenience of our laundry services at your fingertips. Schedule pickups, track orders, and manage your laundry preferences all from our easy-to-use mobile app.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Key Features:</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-riizo-blue mr-2"></span>
                  Easy scheduling and rescheduling
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-riizo-blue mr-2"></span>
                  Real-time order tracking
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-riizo-blue mr-2"></span>
                  Special instructions for garment care
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-riizo-blue mr-2"></span>
                  Payment management
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-riizo-blue mr-2"></span>
                  Exclusive in-app offers
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-black text-white hover:bg-gray-800 px-6 rounded-md flex items-center justify-center gap-2">
                <svg className="h-5 w-5" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </Button>
              <Button className="bg-black text-white hover:bg-gray-800 px-6 rounded-md flex items-center justify-center gap-2">
                <svg className="h-5 w-5" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                </svg>
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </Button>
            </div>
          </div>
          
          {/* Right column with app mockup */}
          <div className="w-full md:w-1/2 flex justify-center relative">
            {/* Phone mockup */}
            <div className="relative animate-float" style={{ animationDuration: "5s" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-riizo-blue to-riizo-blue-light rounded-[40px] blur-xl opacity-20 transform scale-105"></div>
              
              <div className="relative bg-black rounded-[40px] w-[280px] h-[570px] overflow-hidden border-4 border-gray-800 shadow-xl">
                {/* App header */}
                <div className="bg-riizo-blue text-white p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm opacity-80">Welcome back,</div>
                      <div className="font-semibold">Priya Sharma</div>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-white/30 flex items-center justify-center">
                      <span className="font-bold">PS</span>
                    </div>
                  </div>
                </div>
                
                {/* App content */}
                <div className="p-4 bg-white h-full">
                  {/* Active order */}
                  <div className="bg-riizo-blue-light rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-semibold">Active Order</div>
                      <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">In Progress</div>
                    </div>
                    <div className="text-sm text-gray-700">Order #R3452</div>
                    <div className="text-xs text-gray-500 mb-2">Pickup: Today, 4:00 PM</div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-riizo-blue h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  
                  {/* Quick actions */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-gray-100 p-3 rounded-lg text-center">
                      <div className="h-10 w-10 mx-auto bg-riizo-blue/20 rounded-full flex items-center justify-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-riizo-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                      <div className="text-xs font-medium">New Order</div>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg text-center">
                      <div className="h-10 w-10 mx-auto bg-riizo-blue/20 rounded-full flex items-center justify-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-riizo-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <div className="text-xs font-medium">My Orders</div>
                    </div>
                  </div>
                  
                  {/* Services */}
                  <div className="mb-4">
                    <div className="font-semibold mb-2">Services</div>
                    <div className="flex flex-nowrap gap-3 overflow-x-auto pb-2">
                      <div className="bg-white border border-gray-200 p-2 rounded-lg min-w-[80px] text-center shadow-sm">
                        <div className="h-8 w-8 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                          </svg>
                        </div>
                        <div className="text-xs">Laundry</div>
                      </div>
                      <div className="bg-white border border-gray-200 p-2 rounded-lg min-w-[80px] text-center shadow-sm">
                        <div className="h-8 w-8 mx-auto bg-indigo-100 rounded-full flex items-center justify-center mb-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <div className="text-xs">Ironing</div>
                      </div>
                      <div className="bg-white border border-gray-200 p-2 rounded-lg min-w-[80px] text-center shadow-sm">
                        <div className="h-8 w-8 mx-auto bg-amber-100 rounded-full flex items-center justify-center mb-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="text-xs">Dry Clean</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom navigation */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2 flex justify-around">
                    <div className="text-center text-riizo-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <div className="text-xs">Home</div>
                    </div>
                    <div className="text-center text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      <div className="text-xs">Orders</div>
                    </div>
                    <div className="text-center text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <div className="text-xs">Profile</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/3 -left-10 w-20 h-20 rounded-full bg-riizo-blue opacity-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 -right-10 w-16 h-16 rounded-full bg-riizo-blue opacity-10 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppMockupSection;
