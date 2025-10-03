import { Plus } from "lucide-react";

interface ProductCardProps {
  name: string;
  category: string;
  price: number;
  image: string;
}

export default function ProductCard({ name, category, price, image }: ProductCardProps) {
  return (
    <div className="bg-white rounded-[24px] overflow-hidden group hover:shadow-lg transition-shadow">
      <div className="bg-[#FAFAFA] rounded-t-[24px] aspect-square relative overflow-hidden flex items-center justify-center p-8">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <p className="text-[#8D8D8D] font-inter text-sm mb-2">{category}</p>
        <h3 className="text-[#0D1B39] font-inter font-semibold text-xl lg:text-2xl mb-4 capitalize">
          {name}
        </h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-[#0D1B39] font-inter font-semibold text-sm">$</span>
            <span className="text-[#0D1B39] font-inter font-semibold text-2xl">{price}</span>
          </div>
          
          <button className="bg-[#0D1B39] text-white p-4 rounded-full hover:bg-[#0D1B39]/90 transition-colors">
            <Plus className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
