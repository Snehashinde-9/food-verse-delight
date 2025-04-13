
import { useState } from 'react';
import { Search, ShoppingCart, Menu, X, LogOut, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import AuthModal from './AuthModal';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { user, signOut } = useAuth();
  const { totalItems } = useCart();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality or redirect to search page with query
    window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
  };
  
  const openAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-orange-500">FoodVerse</span>
              <span className="text-2xl font-semibold text-gray-800">Delight</span>
            </Link>
          </div>

          {/* Search bar - hidden on mobile */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <Input 
                type="text" 
                placeholder="Search for restaurants and food"
                className="pr-10 border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50 rounded-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit" className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-orange-500">
                <Search size={20} />
              </button>
            </form>
          </div>

          {/* Navigation - hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/offers" className="text-gray-700 hover:text-orange-500 font-medium">Offers</Link>
            <Link to="/help" className="text-gray-700 hover:text-orange-500 font-medium">Help</Link>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile" className="flex items-center text-gray-700 hover:text-orange-500 font-medium">
                  <User size={18} className="mr-1" />
                  <span>Profile</span>
                </Link>
                <button 
                  onClick={() => signOut()} 
                  className="flex items-center text-gray-700 hover:text-orange-500 font-medium"
                >
                  <LogOut size={18} className="mr-1" />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <button onClick={openAuthModal} className="text-gray-700 hover:text-orange-500 font-medium">
                Sign In
              </button>
            )}
            
            <Link to="/cart">
              <Button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600">
                <ShoppingCart size={18} />
                <span>{totalItems}</span>
              </Button>
            </Link>
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
              <form onSubmit={handleSearch} className="relative">
                <Input 
                  type="text" 
                  placeholder="Search for restaurants and food"
                  className="pr-10 border-gray-300 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit" className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
                  <Search size={20} />
                </button>
              </form>
              <nav className="flex flex-col space-y-3 pt-2">
                <Link to="/offers" className="text-gray-700 py-2 px-3 hover:bg-gray-50 rounded-md">Offers</Link>
                <Link to="/help" className="text-gray-700 py-2 px-3 hover:bg-gray-50 rounded-md">Help</Link>
                
                {user ? (
                  <>
                    <Link to="/profile" className="flex items-center text-gray-700 py-2 px-3 hover:bg-gray-50 rounded-md">
                      <User size={18} className="mr-2" />
                      <span>Profile</span>
                    </Link>
                    <button 
                      onClick={() => signOut()} 
                      className="flex items-center text-gray-700 py-2 px-3 hover:bg-gray-50 rounded-md w-full text-left"
                    >
                      <LogOut size={18} className="mr-2" />
                      <span>Sign Out</span>
                    </button>
                  </>
                ) : (
                  <button 
                    onClick={openAuthModal} 
                    className="text-gray-700 py-2 px-3 hover:bg-gray-50 rounded-md text-left"
                  >
                    Sign In
                  </button>
                )}
                
                <Link to="/cart">
                  <Button className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 w-full">
                    <ShoppingCart size={18} />
                    <span>Cart • {totalItems} items</span>
                  </Button>
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>
      
      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
    </>
  );
};

export default Header;
