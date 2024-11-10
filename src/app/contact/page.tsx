export default function Contact() {
  return (
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images.jpg')" }}>
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-3xl font-bold text-center text-blue-900 mb-4">Contact Us</h1>
          <p className="text-center text-gray-600 mb-6">
            Get in touch with us for appointments or inquiries.
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
