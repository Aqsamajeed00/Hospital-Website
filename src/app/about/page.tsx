export default function About() {
    return (
        <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/hospi.jpg')" }}>
          <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
            <h1 className="text-white text-5xl font-bold">About Us</h1>
            <p className="text-white mt-4 max-w-2xl text-center">
              We are a leading healthcare institution providing top-notch medical services to all patients with a dedicated team of professionals.
            </p>
          </div>
        </div>
    );
  }