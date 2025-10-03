import { ArrowRight } from "lucide-react";

export default function MaterialsSection() {
  return (
    <section className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-20 py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-6 order-2 lg:order-1">
          <p className="text-[#E58411] font-gilroy font-semibold text-lg tracking-[3.15px] uppercase">
            Materials
          </p>

          <h2 className="font-gilroy font-bold text-3xl sm:text-4xl lg:text-[42px] text-[#1E1E1E] capitalize leading-tight">
            Very serious materials for making furniture
          </h2>

          <p className="text-[#1E1E1E] font-gilroy text-base lg:text-lg opacity-80 leading-[1.85]">
            Because panto was very serious about designing furniture for our
            environment, using a very expensive and famous capital but at a
            relatively low price
          </p>

          <button className="flex items-center gap-3 text-[#E58411] font-gilroy font-medium text-sm hover:gap-4 transition-all">
            More Info
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="relative order-1 lg:order-2 flex gap-4">
          <div className="flex flex-col gap-4 flex-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 rounded-[14px] blur-2xl opacity-50 translate-y-8"></div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/6fce7abe27eae0a7ea66e86c8578e422c13ea574?width=446"
                alt="Material detail 1"
                className="w-full aspect-[223/229] object-cover rounded-[14px]"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 rounded-[14px] blur-2xl opacity-50 translate-y-8"></div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/15e173a4b9104be473f38bee22e7bafc80411003?width=446"
                alt="Material detail 2"
                className="w-full aspect-[223/317] object-cover rounded-[14px]"
              />
            </div>
          </div>

          <div className="relative flex-1">
            <div className="absolute inset-0 bg-[#F7F7F7] rounded-[20px] blur-3xl opacity-50 -z-10"></div>
            <div className="bg-[#F7F7F7] rounded-[20px] h-full relative overflow-hidden">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/85e0171baaeb43e65db71cb5c747b9045beb3d53?width=1258"
                alt="Furniture materials"
                className="w-full h-full object-cover rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
