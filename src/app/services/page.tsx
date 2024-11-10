export default function Services() {
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center" style={{ backgroundImage: "url('/images(1).jpg')" }}>
      <div className="bg-black bg-opacity-60 w-full p-10">
        <div className="text-center mb-10">
          <h1 className="text-white text-5xl font-bold">Our Services</h1>
          <p className="text-white mt-4 text-lg">Providing top-quality care and services to meet all your needs.</p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
          <div className="p-6 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg text-center hover:bg-gray-700 transition-colors duration-300">
            <h2 className="text-xl font-semibold mb-2">24/7 Emergency Care</h2>
            <p>Instant medical assistance whenever you need it.</p>
          </div>
          <div className="p-6 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg text-center hover:bg-gray-700 transition-colors duration-300">
            <h2 className="text-xl font-semibold mb-2">Advanced Diagnostics</h2>
            <p>Modern facilities for precise health assessments.</p>
          </div>
          <div className="p-6 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg text-center hover:bg-gray-700 transition-colors duration-300">
            <h2 className="text-xl font-semibold mb-2">Outpatient Services</h2>
            <p>Convenient care for quick consultations and treatments.</p>
          </div>
          <div className="p-6 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg text-center hover:bg-gray-700 transition-colors duration-300">
            <h2 className="text-xl font-semibold mb-2">Specialized Surgeries</h2>
            <p>Expert surgical care for specialized treatments.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
