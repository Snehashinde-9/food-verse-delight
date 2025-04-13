
import { Button } from './ui/button';

const AppDownload = () => {
  return (
    <section className="bg-orange-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get the FoodVerse Delight App
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Order from your favorite restaurants, track delivery in real-time, and enjoy exclusive app-only offers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="border-gray-800 text-gray-800 hover:bg-gray-100 flex items-center justify-center h-16">
                <div className="mr-3">
                  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.9023 8.90674C17.6904 8.99573 15.6373 10.0469 15.6373 12.7132C15.6373 15.845 18.2389 16.7566 18.3079 16.7771C18.2984 16.8181 17.8201 18.343 16.7685 19.9087C15.8389 21.2739 14.8693 22.6368 13.3877 22.6368C11.9061 22.6368 11.5327 21.7646 9.84559 21.7646C8.19871 21.7646 7.58359 22.6573 6.19139 22.6573C4.79919 22.6573 3.91572 21.4441 2.75841 19.8362C1.43248 18.0083 0.40126 15.1025 0.40126 12.3376C0.40126 7.92916 3.18304 5.60996 5.92398 5.60996C7.36575 5.60996 8.57344 6.58409 9.49658 6.58409C10.3773 6.58409 11.7297 5.54859 13.348 5.54859C13.9228 5.54859 16.1591 5.60996 17.9023 8.90674ZM12.7134 4.01662C13.3076 3.30315 13.7458 2.32901 13.7458 1.35488C13.7458 1.21628 13.7356 1.07769 13.7053 0.96956C12.7737 1.00046 11.6755 1.61546 11.0009 2.39135C10.4671 2.98588 9.93328 3.96002 9.93328 4.94462C9.93328 5.09368 9.95403 5.24275 9.96436 5.2922C10.0539 5.30266 10.1941 5.31313 10.3342 5.31313C11.1583 5.31313 12.0894 4.73953 12.7134 4.01662Z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-xl font-semibold">App Store</div>
                </div>
              </Button>
              
              <Button variant="outline" className="border-gray-800 text-gray-800 hover:bg-gray-100 flex items-center justify-center h-16">
                <div className="mr-3">
                  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.60991 0.726409C3.37783 0.987179 3.24237 1.3521 3.24237 1.82259V21.8651C3.24237 22.3356 3.37783 22.7005 3.60991 22.9613L3.70466 23.0513L14.8519 12.1572V11.8446L3.70466 0.636341L3.60991 0.726409Z"/>
                    <path d="M19.5123 15.6861L16.661 12.8976V11.8446V11.104L19.5123 8.31543L19.6334 8.38695L23.062 10.3011C24.0605 10.8589 24.0605 11.8134 23.062 12.3711L19.6334 14.2853L19.5123 15.6861Z"/>
                    <path d="M19.6334 14.2854L16.661 11.4969L3.60992 23.0514C3.96835 23.4163 4.5422 23.4163 5.2782 23.0514L19.6334 14.2854Z"/>
                    <path d="M19.6334 8.38696L5.2782 0.404545C4.5422 0.0396389 3.96835 0.0396389 3.60992 0.404545L16.661 11.4969L19.6334 8.38696Z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-xl font-semibold">Google Play</div>
                </div>
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 flex justify-center">
              <img 
                src="https://cdn.dribbble.com/users/1998175/screenshots/15201407/media/8878ff1a2f62c07f6e79f9c2091533b1.webp?resize=768x576&vertical=center" 
                alt="Mobile App" 
                className="max-w-full h-auto md:max-w-md xl:max-w-lg rounded-lg shadow-2xl"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-orange-300 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-orange-500 rounded-full opacity-20 animate-pulse delay-300"></div>
            <div className="absolute top-1/4 right-1/3 w-8 h-8 bg-yellow-400 rounded-full opacity-20 animate-pulse delay-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
