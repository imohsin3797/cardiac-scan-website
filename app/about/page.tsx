'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { alpha } from '@mui/material/styles';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded';
import AccessibilityNewRoundedIcon from '@mui/icons-material/AccessibilityNewRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';

const values = [
  {
    icon: FavoriteRoundedIcon,
    title: 'Patient-Centered Care',
    description: 'We prioritize the well-being and positive experience of every patient, delivering compassionate, thorough service.',
  },
  {
    icon: AccessibilityNewRoundedIcon,
    title: 'Convenience & Accessibility',
    description: 'We bring our services directly to where they are needed, making diagnostic imaging hassle-free for both providers and patients.',
  },
  {
    icon: VerifiedRoundedIcon,
    title: 'Integrity & Expertise',
    description: 'Our team operates with the highest standards of ethics, professionalism, and technical expertise.',
  },
  {
    icon: TrendingUpRoundedIcon,
    title: 'Reliable Results',
    description: 'We are dedicated to providing clear, accurate, and high-quality imaging results to support effective diagnoses and treatment plans.',
  },
  {
    icon: HandshakeRoundedIcon,
    title: 'Trusted Partnership',
    description: 'We are dependable and committed to supporting healthcare providers seamlessly.',
  },
];

export default function AboutPage() {
  const [storyVisible, setStoryVisible] = useState(false);
  const [valuesVisible, setValuesVisible] = useState(false);
  const [careersVisible, setCareersVisible] = useState(false);
  const [teamVisible, setTeamVisible] = useState(false);

  useEffect(() => {
    const observers = [
      { id: 'story-section', setter: setStoryVisible },
      { id: 'values-section', setter: setValuesVisible },
      { id: 'careers-section', setter: setCareersVisible },
      { id: 'team-section', setter: setTeamVisible },
    ];

    const observerInstances = observers.map(({ id, setter }) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setter(true);
            }
          });
        },
        { threshold: 0.1 }
      );

      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }

      return { observer, section };
    });

    return () => {
      observerInstances.forEach(({ observer, section }) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <main>
      {/* Header */}
      <Box
        sx={{
          bgcolor: '#0A2F4A',
          pt: { xs: 6, md: 8 },
          pb: { xs: 6, md: 8 },
        }}
      >
        <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 3, md: 6 } }}>
          <Typography
            sx={{
              fontSize: { xs: 36, sm: 48, md: 56 },
              fontWeight: 800,
              color: '#fff',
              mb: 2,
              lineHeight: 1.2,
              textAlign: 'center',
            }}
          >
            About Us
          </Typography>
        </Box>
      </Box>

      {/* Our Story Section */}
      <Box
        id="story-section"
        sx={{
          bgcolor: '#ffffff',
          py: { xs: 8, md: 12 },
        }}
      >
        <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 3, md: 6 } }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
              gap: { xs: 6, lg: 8 },
              alignItems: 'center',
            }}
          >
            {/* Left: Image */}
            <Box
              sx={{
                opacity: storyVisible ? 1 : 0,
                transform: storyVisible ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 1000ms ease-out, transform 1000ms ease-out',
                order: { xs: 0, lg: 0 },
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '4px solid #0A2F4A',
                  aspectRatio: '4/3',
                }}
              >
                <Image
                  src="/cardiac-scan-imaging.jpg"
                  alt="Cardiac Scan Imaging"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </Box>

            {/* Right: Story Text */}
            <Box
              sx={{
                opacity: storyVisible ? 1 : 0,
                transform: storyVisible ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 1000ms ease-out 200ms, transform 1000ms ease-out 200ms',
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: 28, sm: 36, md: 42 },
                  fontWeight: 800,
                  color: '#0A2F4A',
                  mb: 3,
                  lineHeight: 1.2,
                }}
              >
                Our Story
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 15, sm: 16 },
                  color: '#7A7A7A',
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                Founded in 2007, Cardiac Scan Imaging is a mobile medical imaging company serving physician offices and clinics across Central Florida. We provide on-site echocardiograms, general and vascular ultrasounds, offering our clients a turnkey solution for addressing their patients' diagnostic imaging needs.
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 15, sm: 16 },
                  color: '#7A7A7A',
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                Cardiac Scan Imaging was founded by Donna Bright and Walker Kimbell after Donna's father passed away from cardiac arrest. Their personal experience inspired a company dedicated to bringing high-quality cardiac, general, and vascular ultrasound imaging directly to healthcare providers.
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 15, sm: 16 },
                  color: '#7A7A7A',
                  lineHeight: 1.8,
                }}
              >
                Today, we remain a family-owned business based in Orlando, staying true to the values that Donna instilled from the beginning: balancing efficient service delivery with compassionate patient care. We are accredited by the Intersocietal Commission for the Accreditation of Echocardiography Laboratories (ICAEL) and employ a highly experienced team of registered cardiovascular and general ultrasound technicians.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Our Values Section */}
      <Box
        id="values-section"
        sx={{
          bgcolor: '#F7F7F7',
          py: { xs: 8, md: 12 },
        }}
      >
        <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 3, md: 6 } }}>
          <Box
            sx={{
              mb: 6,
              textAlign: 'center',
              opacity: valuesVisible ? 1 : 0,
              transform: valuesVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 1000ms ease-out, transform 1000ms ease-out',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: 32, sm: 42, md: 48 },
                fontWeight: 800,
                color: '#0A2F4A',
                mb: 2,
                lineHeight: 1.2,
              }}
            >
              Our Values
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 4,
            }}
          >
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Paper
                  key={index}
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: '20px',
                    bgcolor: '#ffffff',
                    border: '2px solid',
                    borderColor: alpha('#0A2F4A', 0.1),
                    width: { xs: '100%', md: 'calc(50% - 16px)', lg: 'calc(33.333% - 21.33px)' },
                    minWidth: { xs: '100%', md: '280px' },
                    opacity: valuesVisible ? 1 : 0,
                    transform: valuesVisible ? 'translateY(0)' : 'translateY(24px)',
                    transition: `opacity 1000ms ease-out ${200 + index * 100}ms, transform 1000ms ease-out ${200 + index * 100}ms`,
                    '&:hover': {
                      borderColor: '#C41F3E',
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(196, 31, 62, 0.15)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      bgcolor: alpha('#C41F3E', 0.1),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                    }}
                  >
                    <IconComponent
                      sx={{
                        fontSize: 32,
                        color: '#C41F3E',
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: { xs: 18, sm: 20 },
                      fontWeight: 700,
                      color: '#0A2F4A',
                      mb: 2,
                      lineHeight: 1.3,
                    }}
                  >
                    {value.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: 14, sm: 15 },
                      color: '#7A7A7A',
                      lineHeight: 1.7,
                    }}
                  >
                    {value.description}
                  </Typography>
                </Paper>
              );
            })}
          </Box>
        </Box>
      </Box>

      {/* Careers Section */}
      <Box
        id="careers-section"
        sx={{
          bgcolor: '#0A2F4A',
          py: { xs: 8, md: 12 },
        }}
      >
        <Box sx={{ maxWidth: 900, mx: 'auto', px: { xs: 3, md: 6 } }}>
          <Box
            sx={{
              textAlign: 'center',
              opacity: careersVisible ? 1 : 0,
              transform: careersVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 1000ms ease-out, transform 1000ms ease-out',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: 32, sm: 42, md: 48 },
                fontWeight: 800,
                color: '#fff',
                mb: 3,
                lineHeight: 1.2,
              }}
            >
              Careers
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 20, sm: 24 },
                fontWeight: 600,
                color: '#fff',
                mb: 3,
              }}
            >
              Join Our Growing Team!
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 15, sm: 16 },
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: 1.8,
                mb: 2,
              }}
            >
              As a family-run business, we treat our staff like family. We balance genuine care for our team members with a culture of collaboration, learning, and empowerment.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 15, sm: 16 },
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: 1.8,
                mb: 4,
              }}
            >
              If you're interested in joining our team, please use the contact form to send us a note. You may also call or text us at{' '}
              <Box
                component="a"
                href="tel:407-801-6575"
                sx={{
                  color: '#fff',
                  fontWeight: 600,
                  textDecoration: 'underline',
                  '&:hover': {
                    color: alpha('#fff', 0.8),
                  },
                }}
              >
                407-801-6575
              </Box>
              . We'd love to hear from you!
            </Typography>
            <Box
              component="a"
              href="/#contact-section"
              sx={{
                display: 'inline-block',
                bgcolor: '#C41F3E',
                color: '#fff',
                px: { xs: 5, sm: 6 },
                py: { xs: 1.75, sm: 2 },
                borderRadius: '9999px',
                fontSize: { xs: 15, sm: 16 },
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(196, 31, 62, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: '#a01731',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 16px rgba(196, 31, 62, 0.4)',
                },
              }}
            >
              Contact Us
            </Box>
          </Box>
        </Box>
      </Box>

      {/* The Team Section */}
      <Box
        id="team-section"
        sx={{
          bgcolor: '#ffffff',
          py: { xs: 8, md: 12 },
        }}
      >
        <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 3, md: 6 } }}>
          <Box
            sx={{
              mb: 6,
              textAlign: 'center',
              opacity: teamVisible ? 1 : 0,
              transform: teamVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 1000ms ease-out, transform 1000ms ease-out',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: 32, sm: 42, md: 48 },
                fontWeight: 800,
                color: '#0A2F4A',
                mb: 3,
                lineHeight: 1.2,
              }}
            >
              The Team Behind Cardiac Scan Imaging
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 15, sm: 16 },
                color: '#7A7A7A',
                lineHeight: 1.8,
                maxWidth: 900,
                mx: 'auto',
                mb: 3,
              }}
            >
              Our team is dedicated to delivering exceptional patient care and is passionate about early detection and accurate diagnosis. With an average of over 8 years of experience, our sonographers bring the highest level of quality, professionalism, and compassion to every patient encounter.
            </Typography>
          </Box>

          <Box
            sx={{
              opacity: teamVisible ? 1 : 0,
              transform: teamVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 1000ms ease-out 200ms, transform 1000ms ease-out 200ms',
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 15, sm: 16 },
                color: '#0A2F4A',
                lineHeight: 1.8,
                mb: 2,
                fontWeight: 600,
              }}
            >
              At Cardiac Scan Imaging, our team includes:
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, mb: 4 }}>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                <CheckCircleRoundedIcon sx={{ color: '#C41F3E', fontSize: 24, flexShrink: 0, mt: 0.5 }} />
                <Typography
                  sx={{
                    fontSize: { xs: 14, sm: 15 },
                    color: '#7A7A7A',
                    lineHeight: 1.8,
                  }}
                >
                  <strong>Registered Ultrasound Sonographers</strong> skilled in performing cardiac, vascular, and general ultrasound exams, including echocardiograms, carotid studies, arterial and venous imaging, abdominal scans, pelvic exams, thyroid and renal imaging, and more.
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                <CheckCircleRoundedIcon sx={{ color: '#C41F3E', fontSize: 24, flexShrink: 0, mt: 0.5 }} />
                <Typography
                  sx={{
                    fontSize: { xs: 14, sm: 15 },
                    color: '#7A7A7A',
                    lineHeight: 1.8,
                  }}
                >
                  <strong>Board-Certified Radiologists and Cardiologists</strong> for accurate image interpretation.
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                <CheckCircleRoundedIcon sx={{ color: '#C41F3E', fontSize: 24, flexShrink: 0, mt: 0.5 }} />
                <Typography
                  sx={{
                    fontSize: { xs: 14, sm: 15 },
                    color: '#7A7A7A',
                    lineHeight: 1.8,
                  }}
                >
                  <strong>Medical Transcriptionists</strong> who ensure accurate and timely reporting of all imaging results.
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                <CheckCircleRoundedIcon sx={{ color: '#C41F3E', fontSize: 24, flexShrink: 0, mt: 0.5 }} />
                <Typography
                  sx={{
                    fontSize: { xs: 14, sm: 15 },
                    color: '#7A7A7A',
                    lineHeight: 1.8,
                  }}
                >
                  <strong>Administrative support staff</strong> to ensure excellent communication and prompt responses to all queries.
                </Typography>
              </Box>
            </Box>

            <Typography
              sx={{
                fontSize: { xs: 15, sm: 16 },
                color: '#7A7A7A',
                lineHeight: 1.8,
                fontStyle: 'italic',
              }}
            >
              Together, our team combines technical expertise and patient-focused care to ensure every scan meets the highest standards, providing clear, reliable results that support accurate diagnoses and effective treatment plans.
            </Typography>
          </Box>
        </Box>
      </Box>
    </main>
  );
}
