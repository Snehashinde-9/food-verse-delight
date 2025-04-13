
import RestaurantCard from './RestaurantCard';

const restaurants = [
  {
    id: 1,
    name: 'Pizza Heaven',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3',
    cuisines: ['Italian', 'Pizza', 'Pasta'],
    rating: 4.2,
    deliveryTime: '25-30 min',
    discount: '50% OFF up to ₹100',
    promoted: true,
  },
  {
    id: 2,
    name: 'Burger King',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1299&ixlib=rb-4.0.3',
    cuisines: ['American', 'Burgers', 'Fast Food'],
    rating: 4.0,
    deliveryTime: '30-35 min',
    discount: '₹125 OFF above ₹249',
  },
  {
    id: 3,
    name: 'The Chinese Box',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=1129&ixlib=rb-4.0.3',
    cuisines: ['Chinese', 'Asian', 'Noodles'],
    rating: 4.4,
    deliveryTime: '35-40 min',
  },
  {
    id: 4,
    name: 'Biryani House',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3',
    cuisines: ['Indian', 'Biryani', 'North Indian'],
    rating: 4.5,
    deliveryTime: '25-30 min',
    discount: 'FREE DELIVERY',
    promoted: true,
  },
  {
    id: 5,
    name: 'Sushi Palace',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3',
    cuisines: ['Japanese', 'Sushi', 'Asian'],
    rating: 4.7,
    deliveryTime: '40-45 min',
  },
  {
    id: 6,
    name: 'Healthy Bowls',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1480&ixlib=rb-4.0.3',
    cuisines: ['Healthy', 'Salads', 'Bowls'],
    rating: 4.3,
    deliveryTime: '20-25 min',
    discount: '20% OFF',
  },
  {
    id: 7, 
    name: 'Taco Bell',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3',
    cuisines: ['Mexican', 'Tacos', 'Fast Food'],
    rating: 4.1,
    deliveryTime: '25-30 min',
  },
  {
    id: 8,
    name: 'Coffee Culture',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=1074&ixlib=rb-4.0.3',
    cuisines: ['Cafe', 'Beverages', 'Snacks'],
    rating: 4.6,
    deliveryTime: '15-20 min',
    discount: 'BUY 1 GET 1 FREE',
    promoted: true,
  },
];

const RestaurantList = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Restaurants near you</h2>
          
          <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
            <button className="px-4 py-2 text-sm font-medium bg-gray-200 hover:bg-gray-300 rounded-full transition-colors">
              Fast Delivery
            </button>
            <button className="px-4 py-2 text-sm font-medium bg-gray-200 hover:bg-gray-300 rounded-full transition-colors">
              New on FoodVerse
            </button>
            <button className="px-4 py-2 text-sm font-medium bg-gray-200 hover:bg-gray-300 rounded-full transition-colors">
              Ratings 4.0+
            </button>
            <button className="px-4 py-2 text-sm font-medium bg-gray-200 hover:bg-gray-300 rounded-full transition-colors">
              Pure Veg
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} {...restaurant} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantList;
