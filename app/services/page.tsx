'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';

const infoCards = [
  {
    title: 'Board-Certified Experts',
    icon: VerifiedRoundedIcon,
  },
  {
    title: 'Same-Day Results Available',
    icon: SpeedRoundedIcon,
  },
  {
    title: 'Personalized Patient Care',
    icon: SupportAgentRoundedIcon,
  },
];

// Custom SVG Icons
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
    title: 'Echocardiograms',
    slug: 'echocardiograms',
    icon: HeartIcon,
    shortDescription: 'Real-time ultrasound imaging to evaluate heart structure and function',
    image: '/echocardiogram.avif',
    features: [
      'Transthoracic Echo',
      'Stress Echocardiography',
      'Doppler Imaging',
      'Real-time Monitoring',
    ],
  },
  {
    title: 'Carotids',
    slug: 'carotids',
    icon: WaveIcon,
    shortDescription: 'Comprehensive carotid artery imaging for stroke risk assessment',
    image: '/carotids.jpg',
    features: [
      'Carotid Artery Assessment',
      'Plaque Detection',
      'Stroke Risk Evaluation',
      'Non-invasive Imaging',
    ],
  },
  {
    title: 'Arterial – Upper and Lower',
    slug: 'arterial-upper-lower',
    icon: ScannerIcon,
    shortDescription: 'Complete arterial evaluation for upper and lower extremities',
    image: '/arterial.jpg',
    features: [
      'Upper Extremity Assessment',
      'Lower Extremity Evaluation',
      'Blood Flow Analysis',
      'PAD Screening',
    ],
  },
  {
    title: 'Venous – Upper and Lower',
    slug: 'venous-upper-lower',
    icon: AtomIcon,
    shortDescription: 'Comprehensive venous imaging for DVT detection and assessment',
    image: '/venous.jpg',
    features: [
      'Deep Vein Thrombosis Screening',
      'Venous Mapping',
      'Compression Ultrasound',
      'Complete Venous Assessment',
    ],
  },
  {
    title: 'Venous Insufficiency',
    slug: 'venous-insufficiency',
    icon: HeartIcon,
    shortDescription: 'Specialized imaging for venous insufficiency and varicose veins',
    image: '/venousinsuffiency.jpg',
    features: [
      'Valve Function Assessment',
      'Reflux Evaluation',
      'Varicose Vein Mapping',
      'Treatment Planning',
    ],
  },
  {
    title: 'Abdominal Aorta',
    slug: 'abdominal-aorta',
    icon: WaveIcon,
    shortDescription: 'Detailed abdominal aorta imaging for aneurysm detection',
    image: '/abdominalaorta.webp',
    features: [
      'Aortic Diameter Measurement',
      'Aneurysm Detection',
      'Wall Assessment',
      'Risk Evaluation',
    ],
  },
  {
    title: 'Abdominal Aorta Aneurysm Screening',
    slug: 'aaa-screening',
    icon: ScannerIcon,
    shortDescription: 'Preventive screening for abdominal aortic aneurysms',
    image: '/abdominalaortascreening.jpg',
    features: [
      'Early Detection Screening',
      'Preventive Assessment',
      'Risk Factor Evaluation',
      'Follow-up Monitoring',
    ],
  },
  {
    title: 'Renal Artery Doppler',
    slug: 'renal-artery-doppler',
    icon: AtomIcon,
    shortDescription: 'Doppler ultrasound for renal artery stenosis detection',
    image: '/renalarterydoppler.png',
    features: [
      'Renal Artery Stenosis Detection',
      'Blood Flow Measurement',
      'Hypertension Evaluation',
      'Kidney Function Assessment',
    ],
  },
  {
    title: 'Ankle-Brachial Index (ABI)',
    slug: 'abi',
    icon: HeartIcon,
    shortDescription: 'Non-invasive testing for peripheral arterial disease',
    image: '/anklebrachial.jpg',
    features: [
      'PAD Screening',
      'Non-invasive Testing',
      'Circulation Assessment',
      'Cardiovascular Risk Evaluation',
    ],
  },
  {
    title: 'Abdominal – Full and Limited',
    slug: 'abdominal',
    icon: WaveIcon,
    shortDescription: 'Comprehensive and focused abdominal ultrasound examinations',
    image: '/abdominalfullandlimited.jpg',
    features: [
      'Complete Organ Assessment',
      'Focused Examinations',
      'Pathology Detection',
      'Comprehensive Evaluation',
    ],
  },
  {
    title: 'Thyroid',
    slug: 'thyroid',
    icon: ScannerIcon,
    shortDescription: 'Detailed thyroid gland imaging and nodule evaluation',
    image: '/thyroid.jpg',
    features: [
      'Thyroid Nodule Evaluation',
      'Gland Size Assessment',
      'Structural Abnormalities',
      'Guided Biopsy Support',
    ],
  },
  {
    title: 'Renal',
    slug: 'renal',
    icon: AtomIcon,
    shortDescription: 'Complete kidney imaging for stones, masses, and abnormalities',
    image: '/renal.jpg',
    features: [
      'Kidney Size and Structure',
      'Stone Detection',
      'Hydronephrosis Assessment',
      'Mass Evaluation',
    ],
  },
  {
    title: 'Bladder',
    slug: 'bladder',
    icon: HeartIcon,
    shortDescription: 'Bladder ultrasound for volume and structural assessment',
    image: '/bladderstock.webp',
    features: [
      'Bladder Volume Measurement',
      'Wall Thickness Assessment',
      'Mass Detection',
      'Post-void Residual',
    ],
  },
  {
    title: 'Male Pelvic – Transabdominal',
    slug: 'male-pelvic',
    icon: WaveIcon,
    shortDescription: 'Comprehensive male pelvic imaging via transabdominal approach',
    image: '/malepelvic.jpg',
    features: [
      'Prostate Evaluation',
      'Bladder Assessment',
      'Pelvic Organ Imaging',
      'Non-invasive Examination',
    ],
  },
  {
    title: 'Female Pelvic – Transabdominal',
    slug: 'female-pelvic',
    icon: ScannerIcon,
    shortDescription: 'Complete female pelvic ultrasound for uterus and ovaries',
    image: '/femalepelvic.jpg',
    features: [
      'Uterus and Ovary Imaging',
      'Fibroid Detection',
      'Cyst Evaluation',
      'Comprehensive Pelvic Assessment',
    ],
  },
];

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
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
    <main>
      {/* Top Info Section - Why Choose Us */}
      <Box
        sx={{
          bgcolor: '#0A2F4A',
          pt: { xs: 3, md: 4 },
          pb: { xs: 6, md: 10 },
          px: { xs: 3, md: 6 },
        }}
      >
        <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
          {/* Header Section */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            {/* Main Heading */}
            <Typography
              sx={{
                fontSize: { xs: 32, sm: 42, md: 52 },
                fontWeight: 700,
                color: '#fff',
                mb: 3,
                lineHeight: 1.2,
              }}
            >
              Our Services
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                fontSize: { xs: 15, sm: 16, md: 17 },
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: 1.7,
                maxWidth: 900,
                mx: 'auto',
              }}
            >
              Cardiac Scan Imaging delivers on-site diagnostic imaging solutions to support healthcare providers and their patients. From echocardiograms and vascular studies to general ultrasound exams, our experienced team ensures accurate, timely results, hassle-free coordination, and compassionate care—right where it's needed most.
            </Typography>
          </Box>

          {/* Three Columns */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: { xs: 4, md: 6 },
              mt: 6,
            }}
          >
            {[
              {
                icon: VerifiedRoundedIcon,
                title: 'Board-Certified Experts',
                description: 'Our fellowship-trained radiologists and experienced sonographers deliver accurate diagnostics you can trust, supporting confident clinical decisions for your practice.',
              },
              {
                icon: SpeedRoundedIcon,
                title: 'Rapid Turnaround',
                description: 'Streamlined workflows and efficient protocols deliver 24-48 hour results, helping your practice maintain momentum and keep patients on track.',
              },
              {
                icon: SupportAgentRoundedIcon,
                title: 'Turnkey Partnership',
                description: 'We handle scheduling, equipment, staffing, and reporting—seamlessly integrating with your practice so you can focus on what matters most: your patients.',
              },
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Box
                  key={index}
                  sx={{
                    textAlign: 'center',
                    px: { xs: 2, md: 3 },
                  }}
                >
                  {/* Circular Icon */}
                  <Box
                    sx={{
                      width: { xs: 100, sm: 120 },
                      height: { xs: 100, sm: 120 },
                      borderRadius: '50%',
                      bgcolor: '#C41F3E',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3,
                    }}
                  >
                    <IconComponent
                      sx={{
                        fontSize: { xs: 48, sm: 56 },
                        color: '#fff',
                      }}
                    />
                  </Box>

                  {/* Title */}
                  <Typography
                    sx={{
                      fontSize: { xs: 18, sm: 20, md: 22 },
                      fontWeight: 700,
                      color: '#fff',
                      mb: 2,
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      fontSize: { xs: 14, sm: 15 },
                      color: 'rgba(255, 255, 255, 0.85)',
                      lineHeight: 1.7,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>

      {/* Services Cards Section */}
      <Box
        id="services-section"
        sx={{
          bgcolor: '#ffffff',
          pt: { xs: 2, md: 3 },
          pb: { xs: 8, md: 12 },
        }}
      >
        <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 3, md: 6 } }}>
          {/* Section Header */}
          <Box
            sx={{
              mb: 6,
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: 36, sm: 48, md: 56 },
                fontWeight: 800,
                color: '#0A2F4A',
                mb: 2,
                lineHeight: 1.2,
              }}
            >
              Offerings
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 16, sm: 18 },
                color: '#7A7A7A',
                lineHeight: 1.6,
                maxWidth: 800,
                mx: 'auto',
              }}
            >
              Comprehensive diagnostic imaging solutions, including cardiac, vascular, and general ultrasound exams, delivered with advanced technology and expert care.
            </Typography>
          </Box>

          {/* Services Grid - 4 Cards with Images */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 4,
            }}
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Paper
                  key={index}
                  elevation={0}
                  sx={{
                    borderRadius: '24px',
                    overflow: 'hidden',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '2px solid',
                    borderColor: alpha('#0A2F4A', 0.1),
                    transition: 'all 0.4s ease',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                    transitionDelay: `${index * 150}ms`,
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      borderColor: '#C41F3E',
                      boxShadow: '0 16px 32px rgba(196, 31, 62, 0.15)',
                    },
                  }}
                >
                  {/* Image Section */}
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: 240,
                      bgcolor: '#F7F7F7',
                    }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    {/* Icon Overlay */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 20,
                        right: 20,
                        width: 60,
                        height: 60,
                        borderRadius: '16px',
                        bgcolor: alpha('#fff', 0.95),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        color: '#C41F3E',
                      }}
                    >
                      <IconComponent />
                    </Box>
                  </Box>

                  {/* Content Section */}
                  <Box
                    sx={{
                      p: 4,
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: 22, sm: 24 },
                        fontWeight: 700,
                        color: '#0A2F4A',
                        mb: 2,
                        lineHeight: 1.3,
                      }}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: { xs: 14, sm: 15 },
                        color: '#7A7A7A',
                        lineHeight: 1.7,
                        mb: 3,
                      }}
                    >
                      {service.shortDescription}
                    </Typography>

                    {/* Features List */}
                    <Box sx={{ mb: 3, flex: 1 }}>
                      {service.features.map((feature, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                            mb: 1.5,
                          }}
                        >
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: '50%',
                              bgcolor: '#C41F3E',
                              flexShrink: 0,
                            }}
                          />
                          <Typography
                            sx={{
                              fontSize: 14,
                              color: '#0A2F4A',
                              fontWeight: 500,
                            }}
                          >
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    {/* Learn More Button */}
                    <Button
                      component={Link}
                      href={`/services/${service.slug}`}
                      variant="outlined"
                      endIcon={<ArrowForwardRoundedIcon />}
                      sx={{
                        borderColor: '#0A2F4A',
                        color: '#0A2F4A',
                        borderWidth: 2,
                        py: 1.25,
                        px: 3,
                        borderRadius: '12px',
                        fontSize: 15,
                        fontWeight: 600,
                        textTransform: 'none',
                        '&:hover': {
                          borderWidth: 2,
                          borderColor: '#C41F3E',
                          bgcolor: '#C41F3E',
                          color: '#fff',
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>
                </Paper>
              );
            })}
          </Box>
        </Box>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          bgcolor: '#F7F7F7',
          py: { xs: 8, md: 10 },
          textAlign: 'center',
        }}
      >
        <Box sx={{ maxWidth: 700, mx: 'auto', px: { xs: 3, md: 6 } }}>
          <Typography
            sx={{
              fontSize: { xs: 24, sm: 32 },
              fontWeight: 700,
              color: '#0A2F4A',
              mb: 3,
            }}
          >
            Ready to Partner With Us?
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 16, sm: 18 },
              color: '#7A7A7A',
              mb: 4,
              lineHeight: 1.7,
            }}
          >
            Bring high-quality diagnostic imaging directly to your practice. Contact us today to learn how we can support your clinic with reliable, convenient, and professional imaging services.
          </Typography>
          <Button
            component={Link}
            href="/#contact-section"
            variant="contained"
            size="large"
            sx={{
              bgcolor: '#C41F3E',
              color: '#fff',
              py: 1.75,
              px: 5,
              fontSize: 16,
              fontWeight: 600,
              textTransform: 'none',
              borderRadius: '9999px',
              boxShadow: '0 4px 12px rgba(196, 31, 62, 0.3)',
              '&:hover': {
                bgcolor: '#a01731',
                boxShadow: '0 6px 16px rgba(196, 31, 62, 0.4)',
              },
            }}
          >
            Contact Us Today
          </Button>
        </Box>
      </Box>
    </main>
  );
}
