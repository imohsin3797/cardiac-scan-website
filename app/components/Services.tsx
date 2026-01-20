'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Monochrome SVG Icons
const HeartIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const WaveIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const ScannerIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
);

const AtomIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
  </svg>
);

const services = [
  {
    title: "Echocardiograms",
    slug: "echocardiograms",
    icon: HeartIcon,
    image: "/echocardiography.jpg",
    description: [
      "Transthoracic echo",
      "Stress echocardiography",
      "Doppler imaging",
      "Real-time heart monitoring"
    ]
  },
  {
    title: "Carotids",
    slug: "carotids",
    icon: WaveIcon,
    description: [
      "Carotid artery assessment",
      "Plaque detection",
      "Stroke risk evaluation",
      "Non-invasive imaging"
    ]
  },
  {
    title: "Arterial – Upper and Lower",
    slug: "arterial-upper-lower",
    icon: ScannerIcon,
    description: [
      "Upper extremity assessment",
      "Lower extremity evaluation",
      "Blood flow analysis",
      "PAD screening"
    ]
  },
  {
    title: "Venous – Upper and Lower",
    slug: "venous-upper-lower",
    icon: AtomIcon,
    description: [
      "Deep vein thrombosis screening",
      "Venous mapping",
      "Compression ultrasound",
      "Complete venous assessment"
    ]
  },
  {
    title: "Venous Insufficiency",
    slug: "venous-insufficiency",
    icon: HeartIcon,
    description: [
      "Valve function assessment",
      "Reflux evaluation",
      "Varicose vein mapping",
      "Treatment planning"
    ]
  },
  {
    title: "Abdominal Aorta",
    slug: "abdominal-aorta",
    icon: WaveIcon,
    description: [
      "Aortic diameter measurement",
      "Aneurysm detection",
      "Wall assessment",
      "Risk evaluation"
    ]
  },
  {
    title: "Abdominal Aorta Aneurysm Screening",
    slug: "aaa-screening",
    icon: ScannerIcon,
    description: [
      "Early detection screening",
      "Preventive assessment",
      "Risk factor evaluation",
      "Follow-up monitoring"
    ]
  },
  {
    title: "Renal Artery Doppler",
    slug: "renal-artery-doppler",
    icon: AtomIcon,
    description: [
      "Renal artery stenosis detection",
      "Blood flow measurement",
      "Hypertension evaluation",
      "Kidney function assessment"
    ]
  },
  {
    title: "Ankle-Brachial Index (ABI)",
    slug: "abi",
    icon: HeartIcon,
    description: [
      "PAD screening",
      "Non-invasive testing",
      "Circulation assessment",
      "Cardiovascular risk evaluation"
    ]
  },
  {
    title: "Abdominal – Full and Limited",
    slug: "abdominal",
    icon: WaveIcon,
    description: [
      "Complete organ assessment",
      "Focused examinations",
      "Pathology detection",
      "Comprehensive evaluation"
    ]
  },
  {
    title: "Thyroid",
    slug: "thyroid",
    icon: ScannerIcon,
    description: [
      "Thyroid nodule evaluation",
      "Gland size assessment",
      "Structural abnormalities",
      "Guided biopsy support"
    ]
  },
  {
    title: "Renal",
    slug: "renal",
    icon: AtomIcon,
    description: [
      "Kidney size and structure",
      "Stone detection",
      "Hydronephrosis assessment",
      "Mass evaluation"
    ]
  },
  {
    title: "Bladder",
    slug: "bladder",
    icon: HeartIcon,
    description: [
      "Bladder volume measurement",
      "Wall thickness assessment",
      "Mass detection",
      "Post-void residual"
    ]
  },
  {
    title: "Male Pelvic – Transabdominal",
    slug: "male-pelvic",
    icon: WaveIcon,
    description: [
      "Prostate evaluation",
      "Bladder assessment",
      "Pelvic organ imaging",
      "Non-invasive examination"
    ]
  },
  {
    title: "Female Pelvic – Transabdominal",
    slug: "female-pelvic",
    icon: ScannerIcon,
    description: [
      "Uterus and ovary imaging",
      "Fibroid detection",
      "Cyst evaluation",
      "Comprehensive pelvic assessment"
    ]
  }
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Once visible, stop observing
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Trigger when element is 50px from viewport
      }
    );

    const section = document.getElementById('services-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="services-section" className="bg-[#F7F7F7] pt-12 pb-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-16 ${
            isVisible
              ? 'opacity-100 translate-y-0 transition-all duration-1000 ease-out'
              : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-4xl font-bold text-[#0A2F4A] mb-4">
            Our Services
          </h2>
          <p className="text-lg text-[#7A7A7A] max-w-2xl mx-auto">
            Comprehensive cardiac imaging solutions with state-of-the-art technology and expert care
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service, index) => {
            const IconComponent = service.icon;
            return (
            <div
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-sm border border-[#0A2F4A] hover:shadow-lg hover:-translate-y-2 hover:scale-105 ${
                isVisible
                  ? 'opacity-100 translate-y-0 transition-all duration-1000 ease-out'
                  : 'opacity-0 translate-y-12'
              }`}
              style={isVisible ? { transitionDelay: `${index * 100}ms` } : {}}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4 text-[#0A2F4A]">
                <IconComponent />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#0A2F4A] mb-4">
                {service.title}
              </h3>

              {/* Description with red bullets */}
              <ul className="space-y-2 mb-6">
                {service.description.map((item, idx) => (
                  <li key={idx} className="flex items-baseline gap-2 text-[#0A2F4A]">
                    <span className="text-[#C41F3E] flex-shrink-0">•</span>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <Link
                href={`/services/${service.slug}`}
                className="inline-block w-full text-center border-2 border-[#0A2F4A] text-[#0A2F4A] hover:bg-[#0A2F4A] hover:text-white px-4 py-2 rounded-full transition-colors font-medium text-sm"
              >
                Learn More
              </Link>
            </div>
          );
          })}
        </div>

        {/* See more button */}
        <div
          className={`flex justify-center mt-10 ${
            isVisible
              ? 'opacity-100 translate-y-0 transition-all duration-1000 ease-out'
              : 'opacity-0 translate-y-12'
          }`}
          style={isVisible ? { transitionDelay: `${6 * 100}ms` } : {}}
        >
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-[#0A2F4A] text-[#0A2F4A] font-semibold text-sm hover:bg-[#0A2F4A] hover:text-white transition-colors"
          >
            See More Services
          </Link>
        </div>
      </div>
    </section>
  );
}
