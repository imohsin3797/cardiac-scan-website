import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[#0A2F4A] text-white">
      <div className="container mx-auto px-6 py-0">
        <nav className="flex items-center justify-between min-h-[64px]">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/cardiac-scan-logo3.png"
                alt="CardiacScan Imaging Logo"
                width={200}
                height={60}
                priority
                className="h-auto"
              />
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-white hover:text-gray-200 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-gray-200 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-gray-200 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/#contact-section"
              className="bg-[#C41F3E] hover:bg-[#a01731] text-white px-4 py-1.5 rounded-full transition-colors text-sm"
            >
              Contact Now
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 transition-colors ml-2"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
