export default function PromoSection() {
  return (
    <section className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-20 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="relative rounded-lg overflow-hidden group">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/3655bdbc02879e9461a98079679286314cd4df47?width=3470"
            alt="Free shipping promotion"
            className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-6 left-6 bg-yellow-400 text-black font-bold px-6 py-2 rounded text-sm lg:text-base">
            FREE SHIPPING
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden group">
          <div className="bg-black h-full flex items-center justify-center p-12">
            <div className="text-center">
              <p className="text-yellow-400 font-bold text-xl lg:text-2xl mb-2">
                SPECIAL OFFER
              </p>
              <p className="text-white font-bold text-5xl lg:text-7xl">
                35% OFF
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-lg overflow-hidden">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/70522f8c8e48b74d79afb22ad4fa158c8902a5c0?width=3354"
          alt="Product collection"
          className="w-full h-auto hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
}
