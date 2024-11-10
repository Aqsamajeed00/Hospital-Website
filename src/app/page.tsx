import About from "./about/page";
import Contact from "./contact/page";
import Services from "./services/page";

export default function Home() {
  return (
    <div>
      <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/hospital.jpg')" }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-white text-5xl font-bold">Welcome to Our Hospital</h1>
          <p className="text-white mt-4">Providing quality healthcare services for everyone.</p>
        </div>
      </div>

      <About />
      <Contact />
      <Services />
    </div>
  );
};

// Done 