import { ArrowRight } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-20 py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-[#F7F7F7] rounded-[20px] blur-3xl opacity-50 -z-10"></div>
          <div className="bg-[#F7F7F7] rounded-[20px] aspect-[4/3] relative overflow-hidden">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/25e4d5c09b3567b3b2cb3df9f80e3c335ec39ed5?width=1258" 
              alt="Interior experience"
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-[#E58411] font-gilroy font-semibold text-lg tracking-[3.15px] uppercase">
            experiences
          </p>
          
          <h2 className="font-gilroy font-bold text-3xl sm:text-4xl lg:text-[42px] text-[#1E1E1E] capitalize leading-tight">
            we provide you the best experience
          </h2>
          
          <p className="text-[#1E1E1E] font-gilroy text-base lg:text-lg opacity-80 leading-[1.85]">
            You don't have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials
          </p>
          
          <button className="flex items-center gap-3 text-[#E58411] font-gilroy font-medium text-sm hover:gap-4 transition-all">
            More Info
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
