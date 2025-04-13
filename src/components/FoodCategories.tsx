
import { Utensils, Coffee, Pizza, Beef, Cake, Fish, Salad, Sandwich } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Pizza',
    icon: Pizza,
    color: 'bg-red-500',
  },
  {
    id: 2,
    name: 'Burgers',
    icon: Beef,
    color: 'bg-amber-500',
  },
  {
    id: 3,
    name: 'Coffee',
    icon: Coffee,
    color: 'bg-brown-500',
  },
  {
    id: 4,
    name: 'Desserts',
    icon: Cake,
    color: 'bg-pink-500',
  },
  {
    id: 5,
    name: 'Seafood',
    icon: Fish,
    color: 'bg-blue-500',
  },
  {
    id: 6,
    name: 'Salads',
    icon: Salad,
    color: 'bg-green-500',
  },
  {
    id: 7,
    name: 'Sandwiches',
    icon: Sandwich,
    color: 'bg-yellow-500',
  },
  {
    id: 8,
    name: 'All',
    icon: Utensils,
    color: 'bg-purple-500',
  },
];

const FoodCategories = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What's on your mind?</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
          {categories.map((category) => (
            <div key={category.id} className="group flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:-translate-y-2">
              <div className={`rounded-full p-4 mb-3 ${category.color} text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                <category.icon size={32} />
              </div>
              <span className="text-gray-700 font-medium">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodCategories;
