
import { Star, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RestaurantCardProps {
  id: number;
  name: string;
  image: string;
  cuisines: string[];
  rating: number;
  deliveryTime: string;
  discount?: string;
  promoted?: boolean;
}

const RestaurantCard = ({
  id,
  name,
  image,
  cuisines,
  rating,
  deliveryTime,
  discount,
  promoted = false,
}: RestaurantCardProps) => {
  return (
    <Link to={`/restaurant/${id}`} className="block">
      <div className="restaurant-card group cursor-pointer transition-all duration-300 hover:shadow-xl">
        <div className="relative overflow-hidden rounded-t-xl">
          {promoted && (
            <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs px-2 py-1 rounded z-10">
              PROMOTED
            </div>
          )}
          
          {discount && (
            <div className="absolute bottom-3 left-0 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-medium px-3 py-1 z-10 flex items-center">
              <Tag size={14} className="mr-1" />
              {discount}
            </div>
          )}
          
          <div className="h-48 w-full overflow-hidden">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <div className="p-4 bg-white rounded-b-xl">
          <h3 className="text-xl font-bold text-gray-800 truncate">{name}</h3>
          
          <div className="flex items-center mt-1 mb-2">
            <div className="flex items-center bg-green-600 text-white px-1.5 py-0.5 rounded">
              <Star size={12} className="fill-white" />
              <span className="ml-1 text-sm font-medium">{rating}</span>
            </div>
            <div className="mx-2 text-gray-300">•</div>
            <div className="flex items-center text-gray-500">
              <Clock size={14} className="mr-1" />
              <span className="text-sm">{deliveryTime}</span>
            </div>
          </div>
          
          <p className="text-gray-500 text-sm truncate">
            {cuisines.join(', ')}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
