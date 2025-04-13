import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FoodCategories from "../components/FoodCategories";
import BestOffers from "../components/BestOffers";
import RestaurantList from "../components/RestaurantList";
import AppDownload from "../components/AppDownload";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <FoodCategories />
        <BestOffers />
        <RestaurantList />
        <AppDownload />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
