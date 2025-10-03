import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";

interface ProductSectionProps {
  title: string;
  products: Array<{
    name: string;
    category: string;
    price: number;
    image: string;
  }>;
}

export default function ProductSection({ title, products }: ProductSectionProps) {
  const categories = ["Chair", "Beds", "Sofa", "Lamp"];
  
  return (
    <section className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-20 py-12 lg:py-16">
      <div className="text-center mb-8">
        <h2 className="font-gilroy font-bold text-3xl sm:text-4xl lg:text-[51px] text-[#1E1E1E] mb-6">
          {title}
        </h2>
        
        <div className="inline-flex items-center gap-2 bg-[#EEE] rounded-full p-2">
          {categories.map((cat, index) => (
            <button
              key={cat}
              className={`px-6 py-3 rounded-full text-sm sm:text-base lg:text-[22px] font-gilroy transition-colors ${
                index === 0
                  ? "bg-white text-[#1E1E1E] font-medium opacity-80"
                  : "text-[#1E1E1E] opacity-80 hover:bg-white/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="relative">
        <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow">
          <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8 text-[#1E1E1E]" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow">
          <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8 text-[#1E1E1E]" />
        </button>
      </div>

      <div className="flex justify-center mt-8">
        <button className="flex items-center gap-3 text-[#E58411] font-gilroy font-medium text-lg lg:text-[22px] hover:gap-4 transition-all">
          View All
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
