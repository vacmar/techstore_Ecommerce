export function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl">
          <h2 className="text-4xl sm:text-5xl mb-4">
            Welcome to TechStore
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Discover the latest tech products at unbeatable prices. Free shipping on orders over $50.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
