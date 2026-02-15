'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Social Icons Component
  const SocialIcons = ({ className = '' }) => (
    <div className={`flex items-center gap-3 ${className}`}>
      <Link
        href="https://www.facebook.com/people/Cardiac-Scan-Imaging/61586643510706/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-200 transition-colors"
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
      <Link
        href="https://www.linkedin.com/company/cardiacscan-imaging"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-200 transition-colors"
        aria-label="LinkedIn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </Link>
    </div>
  );

  return (
    <header className="bg-[#0A2F4A] text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 md:px-6 py-0">
        <nav className="flex items-center justify-between min-h-[64px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/header-logo3.png"
                alt="Cardiac Scan Imaging Logo"
                width={160}
                height={50}
                priority
                className="h-auto w-auto md:w-[200px]"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
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
            <SocialIcons className="ml-4" />
          </div>

          {/* Mobile Menu Button & Social Icons */}
          <div className="md:hidden flex items-center gap-3">
            <SocialIcons />
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-200 transition-colors p-2"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0A2F4A] border-t border-[#1a4563] pb-4">
            <Link
              href="/"
              onClick={closeMenu}
              className="block px-4 py-3 text-white hover:bg-[#1a4563] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className="block px-4 py-3 text-white hover:bg-[#1a4563] transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/services"
              onClick={closeMenu}
              className="block px-4 py-3 text-white hover:bg-[#1a4563] transition-colors"
            >
              Services
            </Link>
            <div className="px-4 py-3">
              <Link
                href="/#contact-section"
                onClick={closeMenu}
                className="inline-block bg-[#C41F3E] hover:bg-[#a01731] text-white px-4 py-2 rounded-full transition-colors text-sm w-full text-center"
              >
                Contact Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
