import { useState } from "react";
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustRibbon from "./components/TrustRibbon";
import FlashSale from "./components/FlashSale";
import BestSellers from "./components/BestSellers";
import Categories from "./components/Categories";
import WhyUs from "./components/WhyUs";
import PaymentMethods from "./components/PaymentMethods";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import SocialProofPopup from "./components/SocialProofPopup";
import CheckoutModal from "./components/CheckoutModal";

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const handleBuy = (product: any) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SocialProofPopup />
      
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-7 right-7 w-[46px] h-[46px] bg-c-orange border-none cursor-pointer rounded-full flex items-center justify-center text-[18px] text-white shadow-[0_8px_24px_rgba(255,69,0,0.4)] transition-all duration-250 z-50 hover:-translate-y-[3px] hover:scale-105 hover:shadow-[0_14px_30px_rgba(255,69,0,0.5)]"
      >
        ↑
      </button>

      <AnnouncementBar />
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <TrustRibbon />
        <FlashSale />
        <BestSellers onBuy={handleBuy} />
        <Categories />
        <WhyUs />
        <PaymentMethods />
        <Testimonials />
        <Newsletter />
      </main>

      <Footer />

      {selectedProduct && (
        <CheckoutModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
}
