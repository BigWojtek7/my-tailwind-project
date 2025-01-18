import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="p-4">
        <ul className="flex items-center justify-center gap-4">
          <li>
            <Link
              href="/"
              className="text-lg font-bold text-white hover:text-gray-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-lg font-bold text-white hover:text-gray-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-lg font-bold text-white hover:text-gray-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
