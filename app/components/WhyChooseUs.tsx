'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { alpha } from '@mui/material/styles';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const benefits = [
  {
    title: 'ICAEL accreditation'
  },
  {
    title: 'Total Turn-Key service'
  },
  {
    title: 'New Revenue Streams'
  },
  {
    title: '24-48 hour rapid turnaround time and STATS immediately'
  },
  {
    title: 'Dependable and Reliable'
  },
  {
    title: 'Patient Convenience'
  },
  {
    title: 'High quality imaging with State-of-the-art Philips CX-50 Ultrasound Machines'
  },
  {
    title: 'Experienced and registered sonographers with an average of 8 years of experience'
  },
  {
    title: 'Ability to manage a full schedule'
  },
  {
    title: 'Board Certified Radiologists & Cardiologists, if interpretation services are needed.'
  },
  {
    title: 'Experience of being in business since 2007'
  }
];

export default function WhyChooseUs() {
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

    const section = document.getElementById('why-choose-us-section');
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
    <Box
      id="why-choose-us-section"
      component="section"
      sx={{
        bgcolor: '#ffffff',
        py: { xs: 6, md: 10 }
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 3, md: 6 } }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1.3fr 1fr' }, gap: { xs: 6, lg: 8 }, alignItems: 'center' }}>

          {/* Left: Image */}
          <Box
            sx={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 1000ms ease-out, transform 1000ms ease-out',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '4px solid #0A2F4A',
                // Further increased image height by making aspectRatio taller and bumping minHeight/maxHeight upward
                aspectRatio: '3/5',
                width: '100%',
                minHeight: { xs: 420, sm: 560, md: 700, lg: 820 },
                maxHeight: { xs: 520, md: 900, lg: 1100 },
              }}
            >
              <Image
                src="/cardiac-scan-imaging2.png"
                alt="Cardiac Scan Imaging facility"
                fill
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </Box>

          {/* Right: Benefits and Reviews */}
          <Box>
            {/* Section Title */}
            <Box
              sx={{
                mb: 2,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 1000ms ease-out 200ms, transform 1000ms ease-out 200ms',
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: 28, sm: 34, md: 38 },
                  fontWeight: 800,
                  color: '#0A2F4A',
                  mb: 1,
                  lineHeight: 1.2,
                }}
              >
                Why Choose Us?
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 14, sm: 15 },
                  color: '#7A7A7A',
                  lineHeight: 1.5,
                }}
              >
                Experience the difference with our comprehensive cardiac imaging services
              </Typography>
            </Box>

            {/* Benefits Pills */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 3 }}>
              {benefits.map((benefit, index) => (
                <Paper
                  key={index}
                  elevation={0}
                  sx={{
                    px: 2,
                    py: 1.5,
                    borderRadius: '20px',
                    bgcolor: '#F7F7F7',
                    border: '2px solid',
                    borderColor: alpha('#0A2F4A', 0.1),
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                    transition: `opacity 1000ms ease-out ${300 + index * 50}ms, transform 1000ms ease-out ${300 + index * 50}ms`,
                  }}
                >
                  <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                    <CheckCircleRoundedIcon sx={{ color: '#C41F3E', fontSize: 22, flexShrink: 0 }} />
                    <Typography
                      sx={{
                        fontSize: { xs: 14, sm: 15 },
                        fontWeight: 600,
                        color: '#0A2F4A',
                        lineHeight: 1.4,
                      }}
                    >
                      {benefit.title}
                    </Typography>
                  </Box>
                </Paper>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
