export default function Hero() {
  return (
    <section className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-20 py-8 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        <div className="lg:col-span-1 bg-[#E0E0E0] rounded-[10px] h-[400px] lg:h-[756px] overflow-hidden relative">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/abf60f19bc57b6650de05d38487a4ede64223204?width=784"
            alt="Furniture detail"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="lg:col-span-1 flex flex-col gap-4 lg:gap-6">
          <div className="bg-white rounded-[10px] overflow-hidden h-[200px] lg:h-[150px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/5702e97b51597937af31931b78b34c4f4250e17f?width=852"
              alt="Interior"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 flex flex-col items-center justify-center gap-6 lg:gap-8 py-8 lg:py-12">
            <h2 className="font-poppins font-medium text-5xl sm:text-6xl lg:text-[91px] text-[#484848] text-center leading-none tracking-tight">
              ULTIMATE
            </h2>

            <div className="relative">
              <h3
                className="font-poppins font-medium text-7xl sm:text-8xl lg:text-[187px] text-[#484848] text-center leading-none tracking-[-10px]"
                style={{ WebkitTextStroke: "1px #484848" }}
              >
                SALE
              </h3>
            </div>

            <button className="bg-black text-white font-poppins font-medium text-base px-12 py-5 rounded-[10px] shadow-[0_20px_35px_rgba(0,0,0,0.15)] hover:bg-gray-900 transition-colors">
              SHOP NOW
            </button>
          </div>

          <div className="bg-white rounded-[10px] overflow-hidden h-[200px] lg:h-[150px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/0251b94795de4d7e3725ae902a05d4e6e757e1dd?width=852"
              alt="Interior detail"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-1 rounded-[10px] h-[400px] lg:h-[756px] overflow-hidden">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/35e9c058942bf6b235360d6dc730c3b0fd88f497?width=784"
            alt="Modern furniture"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="mt-8 lg:mt-12 flex items-center gap-6">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/8c82003bcdfc9c1f5b69f4b48617ed656e51ebd8?width=988"
          alt="Product showcase"
          className="w-1/2 h-auto rounded-lg"
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/6d61cbdbaf46ddbd34c5f9d41046328baf7feb06?width=544"
          alt="Product detail"
          className="w-1/3 h-auto rounded-lg"
        />
      </div>
    </section>
  );
}
