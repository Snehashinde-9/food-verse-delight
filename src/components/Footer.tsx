
import { Facebook, Twitter, Instagram, Youtube, Smartphone, Mail, MapPin } from 'lucide-react';
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">FoodVerse Delight</h3>
            <p className="mb-4">
              Discover the best food from over 1,000 restaurants and fast delivery to your doorstep
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Get Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Order Status</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Payment Options</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Download App</h3>
            <p className="mb-4">
              Get the FoodVerse Delight mobile app for faster ordering and live tracking.
            </p>
            <div className="flex flex-col space-y-2">
              <Button variant="outline" className="border-gray-600 text-white hover:border-white">
                <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" alt="Apple App Store" className="h-5 w-5 mr-2" />
                App Store
              </Button>
              <Button variant="outline" className="border-gray-600 text-white hover:border-white">
                <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" alt="Google Play Store" className="h-5 w-5 mr-2" />
                Google Play
              </Button>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
            <div className="flex items-center">
              <MapPin size={16} className="mr-2 text-gray-400" />
              <span>123 Main Street, New York, NY 10001</span>
            </div>
            <div className="flex items-center">
              <Smartphone size={16} className="mr-2 text-gray-400" />
              <span>+1 234 567 8901</span>
            </div>
            <div className="flex items-center">
              <Mail size={16} className="mr-2 text-gray-400" />
              <span>support@foodverse.com</span>
            </div>
          </div>
          
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} FoodVerse Delight. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
