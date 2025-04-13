
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Plus, Minus, Trash2, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';
import { Separator } from '@/components/ui/separator';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, totalItems, totalPrice } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  if (totalItems === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-10">
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-600 hover:text-orange-500"
          >
            <ChevronLeft size={20} className="mr-1" />
            Back to restaurants
          </Link>
          
          <div className="text-center mt-20">
            <h2 className="text-2xl font-bold">Your cart is empty</h2>
            <p className="mt-2 text-gray-600">Looks like you haven't added anything to your cart yet.</p>
            <Link to="/">
              <Button className="mt-4 bg-orange-500 hover:bg-orange-600">
                Browse restaurants
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const proceedToCheckout = () => {
    setIsCheckingOut(true);
    // In a real app, implement payment integration here
    setTimeout(() => {
      alert('Payment successful! Your order has been placed.');
      setIsCheckingOut(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-gray-600 hover:text-orange-500"
        >
          <ChevronLeft size={20} className="mr-1" />
          Continue shopping
        </Link>
        
        <h1 className="text-3xl font-bold mt-6 mb-8">Your Cart ({totalItems} items)</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {items.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row gap-4 py-4">
                  <div className="sm:w-1/4">
                    <img 
                      src={item.image || 'https://via.placeholder.com/150'} 
                      alt={item.name} 
                      className="w-full h-24 object-cover rounded-md"
                    />
                  </div>
                  <div className="sm:w-3/4 flex flex-col sm:flex-row justify-between">
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.restaurantName}</p>
                      <p className="text-orange-500 font-bold mt-1">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center justify-between mt-4 sm:mt-0">
                      <div className="flex items-center">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded-full hover:bg-gray-100"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="mx-2 w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded-full hover:bg-gray-100"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="ml-4 text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                  <Separator className="mt-4" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Order summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span>$2.99</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span>${(totalPrice * 0.08).toFixed(2)}</span>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="flex justify-between font-bold text-lg mb-6">
                <span>Total</span>
                <span>${(totalPrice + 2.99 + (totalPrice * 0.08)).toFixed(2)}</span>
              </div>
              
              <div className="flex gap-2 mb-4">
                <Input
                  type="text"
                  placeholder="Promo code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <Button variant="outline">Apply</Button>
              </div>
              
              <Button 
                className="w-full bg-orange-500 hover:bg-orange-600 flex items-center justify-center"
                onClick={proceedToCheckout}
                disabled={isCheckingOut}
              >
                {isCheckingOut ? (
                  'Processing...'
                ) : (
                  <>
                    <CreditCard size={18} className="mr-2" />
                    Proceed to Payment
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
