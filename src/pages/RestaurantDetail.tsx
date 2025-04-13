
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Clock, ChevronLeft, MapPin, Utensils, ThumbsUp, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MenuItem, useCart } from '@/context/CartContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { restaurants } from '@/data/restaurants';
import { menuItems } from '@/data/menuItems';

const RestaurantDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [restaurant, setRestaurant] = useState<any | null>(null);
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  useEffect(() => {
    if (id) {
      const restaurantId = parseInt(id);
      // In a real app, you would fetch this from an API
      const foundRestaurant = restaurants.find(r => r.id === restaurantId);
      if (foundRestaurant) {
        setRestaurant(foundRestaurant);
        
        // Filter menu items for this restaurant
        const restaurantMenu = menuItems.filter(item => item.restaurantId === restaurantId);
        setMenu(restaurantMenu);
      }
    }
  }, [id]);
  
  if (!restaurant) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Restaurant not found</h2>
            <p className="mt-2 text-gray-600">The restaurant you're looking for doesn't exist.</p>
            <Link to="/">
              <Button className="mt-4 bg-orange-500 hover:bg-orange-600">
                Go back to home
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Get unique categories from menu items
  const categories = ['all', ...new Set(menu.map(item => item.category))];
  
  // Filter menu by active category
  const filteredMenu = activeCategory === 'all' 
    ? menu 
    : menu.filter(item => item.category === activeCategory);

  const handleAddToCart = (item: MenuItem) => {
    addToCart({
      ...item,
      restaurantName: restaurant.name
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Restaurant Hero */}
        <div 
          className="w-full h-64 bg-center bg-cover relative"
          style={{ backgroundImage: `url(${restaurant.image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <Link 
                to="/" 
                className="inline-flex items-center text-white bg-black bg-opacity-50 px-3 py-1 rounded-full text-sm mb-4"
              >
                <ChevronLeft size={16} className="mr-1" />
                Back to restaurants
              </Link>
              <h1 className="text-4xl font-bold text-white mt-2">{restaurant.name}</h1>
              <div className="flex items-center mt-2 text-white">
                <span className="flex items-center bg-green-600 text-white px-2 py-1 rounded">
                  <Star size={14} className="mr-1 fill-white" />
                  {restaurant.rating}
                </span>
                <span className="mx-2">•</span>
                <span className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  {restaurant.deliveryTime}
                </span>
              </div>
              <div className="mt-2 text-white text-sm">
                {restaurant.cuisines.join(', ')}
              </div>
              <div className="mt-2 text-white text-sm flex items-center">
                <MapPin size={14} className="mr-1" />
                123 Food Street, Foodville, FV 12345
              </div>
            </div>
          </div>
        </div>
        
        {/* Restaurant Info */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Menu Section */}
            <div className="flex-1">
              <div className="sticky top-24">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Utensils size={20} className="mr-2" /> 
                  Menu
                </h2>
                
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="mb-4 flex overflow-x-auto whitespace-nowrap border-b border-gray-200 pb-1">
                    {categories.map(category => (
                      <TabsTrigger 
                        key={category} 
                        value={category}
                        className="capitalize"
                        onClick={() => setActiveCategory(category)}
                      >
                        {category}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  
                  <TabsContent value={activeCategory}>
                    <div className="space-y-6">
                      {filteredMenu.map((item) => (
                        <div 
                          key={item.id} 
                          className="flex flex-col md:flex-row gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                        >
                          <div className="md:w-1/4">
                            <img 
                              src={item.image || 'https://via.placeholder.com/150'} 
                              alt={item.name} 
                              className="w-full h-32 object-cover rounded-md"
                            />
                          </div>
                          <div className="md:w-3/4 flex flex-col">
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold">{item.name}</h3>
                              <p className="text-sm text-gray-500 line-clamp-2 mt-1">
                                {item.description}
                              </p>
                              <div className="text-lg font-bold text-gray-800 mt-2">
                                ${item.price.toFixed(2)}
                              </div>
                            </div>
                            <div className="mt-3">
                              <Button 
                                className="bg-orange-500 hover:bg-orange-600"
                                onClick={() => handleAddToCart(item)}
                              >
                                Add to Cart
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
            
            {/* Additional Info */}
            <div className="md:w-1/3">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Info size={18} className="mr-2" />
                  Restaurant Info
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-700">Hours</h4>
                    <p className="text-sm text-gray-600">8:00 AM - 10:00 PM</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-700">Address</h4>
                    <p className="text-sm text-gray-600">
                      123 Food Street, Foodville, FV 12345
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-700">Cuisines</h4>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {restaurant.cuisines.map((cuisine: string) => (
                        <span 
                          key={cuisine} 
                          className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs"
                        >
                          {cuisine}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-700">Features</h4>
                    <div className="mt-1 space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <ThumbsUp size={14} className="mr-2" />
                        <span>Popular for lunch</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock size={14} className="mr-2" />
                        <span>Fast delivery</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RestaurantDetail;
