export default function Services() {
    return (
        <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/hospital3.jpg')" }}>
          <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
            <h1 className="text-white text-5xl font-bold">Our Services</h1>
            <ul className="text-white mt-4 space-y-4 text-center">
              <li>24/7 Emergency Care</li>
              <li>Advanced Diagnostic Facilities</li>
              <li>Outpatient Services</li>
              <li>Specialized Surgeries</li>
            </ul>
          </div>
        </div>
    );
  }