import { Search, ShoppingCart, User, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-8 lg:gap-12">
            <h1 className="font-volkhov text-3xl sm:text-4xl lg:text-[52px] text-[#484848] leading-none">
              HARD
            </h1>

            <nav className="hidden lg:flex items-center gap-6">
              <button className="flex items-center gap-1 font-satoshi text-base text-black hover:text-orange transition-colors">
                Shop
                <ChevronDown className="w-4 h-4" />
              </button>
              <a href="#" className="font-satoshi text-base text-black hover:text-orange transition-colors">
                On Sale
              </a>
              <a href="#" className="font-satoshi text-base text-black hover:text-orange transition-colors">
                New Arrivals
              </a>
              <a href="#" className="font-satoshi text-base text-black hover:text-orange transition-colors">
                Brands
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-3 lg:gap-4">
            <div className="hidden md:flex items-center gap-2 bg-[#F0F0F0] rounded-full px-4 py-3 w-full max-w-[500px]">
              <Search className="w-5 h-5 text-black/40" />
              <input
                type="text"
                placeholder="Search for products..."
                className="bg-transparent outline-none flex-1 font-satoshi text-base text-black/40 placeholder:text-black/40"
              />
              <span className="text-black/40 font-satoshi">|</span>
              <span className="text-black/40 font-satoshi text-sm">All</span>
              <ChevronDown className="w-4 h-4 text-black/40" />
            </div>

            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingCart className="w-6 h-6" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <User className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
