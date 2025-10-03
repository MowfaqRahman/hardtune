export default function VideoSection() {
  return (
    <section className="w-full max-w-[1920px] mx-auto relative overflow-hidden">
      <div className="relative h-[400px] lg:h-[788px]">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/5690ad9a3d67ff475f693bdbdf3360a909cdbe9f?width=3840"
          alt="Video background"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h2 className="font-volkhov text-3xl sm:text-4xl lg:text-[51px] text-black mb-6">
              video playing
            </h2>
            <button className="w-16 h-16 lg:w-20 lg:h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all">
              <svg
                className="w-8 h-8 lg:w-10 lg:h-10 text-black ml-1"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
