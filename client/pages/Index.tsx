import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import ExperienceSection from "@/components/ExperienceSection";
import MaterialsSection from "@/components/MaterialsSection";
import VideoSection from "@/components/VideoSection";
import PromoSection from "@/components/PromoSection";

export default function Index() {
  const products = [
    {
      name: "Sakarias Armchair",
      category: "Chair",
      price: 392,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/2e89008f31c49aa8cf4e5d5aeab868eeadaeb589?width=528"
    },
    {
      name: "Baltsar Chair",
      category: "Chair",
      price: 299,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d851868116219a3e6e433f37b30278995b0bce73?width=528"
    },
    {
      name: "Anjay Chair",
      category: "Chair",
      price: 519,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/e32f0cb49102a9280eb1d4fdcd7133974db9ecb7?width=541"
    },
    {
      name: "Nyantuy Chair",
      category: "Chair",
      price: 921,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/dc9e43b6d84e8e7b085873bfd9dc9d95429c94af?width=583"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      
      <ProductSection 
        title="Best Selling Product" 
        products={products}
      />
      
      <ExperienceSection />
      
      <ProductSection 
        title="Best Selling Product" 
        products={products}
      />
      
      <MaterialsSection />
      
      <ProductSection 
        title="Best Selling Product" 
        products={products}
      />
      
      <VideoSection />
      
      <ProductSection 
        title="Best Selling Product" 
        products={products}
      />
      
      <PromoSection />
    </div>
  );
}
