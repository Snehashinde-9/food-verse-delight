
import { useState } from 'react';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-orange-500">FoodVerse</span>
            <span className="text-2xl font-semibold text-gray-800">Delight</span>
          </a>
        </div>

        {/* Search bar - hidden on mobile */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Input 
              type="text" 
              placeholder="Search for restaurants and food"
              className="pr-10 border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50 rounded-full"
            />
            <button className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-orange-500">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Navigation - hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">Offers</a>
          <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">Help</a>
          <a href="#" className="text-gray-700 hover:text-orange-500 font-medium">Sign In</a>
          <Button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600">
            <ShoppingCart size={18} />
            <span>{cartCount}</span>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-2">
          <div className="container mx-auto px-4 space-y-3">
            <div className="relative">
              <Input 
                type="text" 
                placeholder="Search for restaurants and food"
                className="pr-10 border-gray-300 w-full"
              />
              <button className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                <Search size={20} />
              </button>
            </div>
            <nav className="flex flex-col space-y-3 pt-2">
              <a href="#" className="text-gray-700 py-2 px-3 hover:bg-gray-50 rounded-md">Offers</a>
              <a href="#" className="text-gray-700 py-2 px-3 hover:bg-gray-50 rounded-md">Help</a>
              <a href="#" className="text-gray-700 py-2 px-3 hover:bg-gray-50 rounded-md">Sign In</a>
              <Button className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 w-full">
                <ShoppingCart size={18} />
                <span>Cart • {cartCount} items</span>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
