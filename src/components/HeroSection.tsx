
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-orange-50 to-orange-100 overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        {/* Content */}
        <div className="md:w-1/2 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
            Delicious food delivered to your doorstep
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
            Order from your favorite restaurants and track your food in real-time. Enjoy free delivery on your first order!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-xl">
              Order Now
            </Button>
            <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-6 text-lg rounded-xl">
              View Restaurants <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Image */}
        <div className="md:w-1/2 mt-12 md:mt-0 relative">
          <div className="relative z-10 transform transition-transform duration-500 hover:scale-105">
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=1081&ixlib=rb-4.0.3"
              alt="Delicious Food"
              className="rounded-xl shadow-2xl max-w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg w-48 md:w-64 flex items-center">
              <div className="bg-green-500 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-gray-800 font-medium">Free delivery</p>
                <p className="text-gray-500 text-sm">on your first order</p>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-orange-300 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-orange-500 rounded-full opacity-20 animate-pulse delay-300"></div>
          <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-yellow-400 rounded-full opacity-20 animate-pulse delay-700"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
