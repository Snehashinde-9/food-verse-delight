
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface OfferCardProps {
  title: string;
  description: string;
  image: string;
  backgroundColor: string;
}

const OfferCard = ({ title, description, image, backgroundColor }: OfferCardProps) => {
  return (
    <div className={`${backgroundColor} rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-2`}>
      <div className="p-6 flex flex-col h-full">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/80 mb-4">{description}</p>
        
        <Button variant="outline" className="mt-auto w-full border-white text-white hover:bg-white/20">
          Order Now <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

const BestOffers = () => {
  const offers = [
    {
      title: "50% OFF on First Order",
      description: "Use code WELCOME50 and get 50% off on your first order up to ₹100",
      image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&q=80&w=1160&ixlib=rb-4.0.3",
      backgroundColor: "bg-gradient-to-r from-blue-500 to-blue-700",
    },
    {
      title: "Free Delivery",
      description: "Enjoy free delivery on all orders above ₹199 with no extra charges",
      image: "https://images.unsplash.com/photo-1584315054380-218538d45ae6?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3",
      backgroundColor: "bg-gradient-to-r from-green-500 to-green-700",
    },
    {
      title: "Buy 1 Get 1 Free",
      description: "Special weekend offers on selected restaurants and cuisines",
      image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3",
      backgroundColor: "bg-gradient-to-r from-orange-500 to-orange-700",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Best Offers For You</h2>
          <Button variant="ghost" className="text-orange-500 hover:text-orange-600 hover:bg-orange-50 mt-2 md:mt-0">
            View All Offers <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <OfferCard key={index} {...offer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestOffers;
