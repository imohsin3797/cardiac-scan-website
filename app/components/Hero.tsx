'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Hero Text */}
        <div
          className={`space-y-6 transition-all duration-1000 ease-out ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
        >
          <h1 className="text-5xl font-bold text-[#0A2F4A] leading-tight text-center">
            Advanced Cardiac Imaging for Your Practice
          </h1>
          <p className="text-lg text-[#7A7A7A] leading-relaxed">
            State-of-the-art cardiac imaging services with expert radiologists dedicated to providing accurate diagnoses and compassionate care.
          </p>
          <div className="flex gap-4 pt-4 justify-center">
            <Link
              href="/#contact-section"
              className="bg-[#C41F3E] hover:bg-[#a01731] text-white px-6 py-3 rounded-full transition-colors font-medium"
            >
              Schedule Appointment
            </Link>
            <Link
              href="/services"
              className="border-2 border-[#0A2F4A] text-[#0A2F4A] hover:bg-[#0A2F4A] hover:text-white px-6 py-3 rounded-full transition-colors font-medium"
            >
              Our Services
            </Link>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div
          className={`relative transition-all duration-1000 ease-out ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="rounded-3xl overflow-hidden aspect-square relative">
            <Image
              src="/hero-image2.jpg"
              alt="Cardiac Imaging"
              fill
              className="object-cover -rotate-90"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
