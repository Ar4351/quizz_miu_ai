"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle, X } from "lucide-react";

const Page = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const timer = setTimeout(() => setIsVisible(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div 
        className={`max-w-md w-full rounded-lg shadow-2xl overflow-hidden transform transition-all duration-300 ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        style={{ backgroundColor: "#0f0f1a" }}
      >
        <div className="bg-gradient-to-r from-emerald-700 to-green-600 py-4 px-6 relative">
          <div className="flex items-center">
            <CheckCircle className="h-8 w-8 text-emerald-200 mr-3" />
            <h2 className="text-2xl font-semibold text-white">Success!</h2>
          </div>
          <button 
            onClick={() => setIsVisible(false)} 
            className="absolute top-4 right-4 text-emerald-100 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6" style={{ backgroundColor: "#0f0f1a" }}>
          <p className="text-gray-200 mb-4">
            Your account has been successfully updated with the new plan.
          </p>
          
          <div className="p-4 rounded-lg mb-4 border border-emerald-900" style={{ backgroundColor: "#151525" }}>
            <ul className="space-y-3">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-emerald-400 mr-2" />
                <span className="text-gray-200">Access to all premium features</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-emerald-400 mr-2" />
                <span className="text-gray-200">Unlimited quiz generation</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-emerald-400 mr-2" />
                <span className="text-gray-200">Priority support</span>
              </li>
            </ul>
          </div>
          
          <div className="flex justify-center">
            <Link 
              href="/dashboard" 
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white rounded-md transition-colors font-medium shadow-md"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;