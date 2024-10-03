import Link from 'next/link';

function Header() {
  return (
    <header className="flex justify-between bg-blue-600 p-4">
      {/* Logo */}
      <div>
        <h2 className="text-3xl font-semibold text-white">Hospital Management</h2>
      </div>

      {/* Links */}
      <nav>
        <ul className="flex gap-x-4 text-white">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;