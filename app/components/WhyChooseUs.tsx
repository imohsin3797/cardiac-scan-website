'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { alpha } from '@mui/material/styles';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const convenienceBenefits = [
  'Complete turn-key service delivered right in your office',
  'Additional clinical revenue stream',
  'Ability to manage a full patient schedule',
  'Flexible scheduling options',
  'Weekend availability',
  'Dependable and reliable service',
];

const qualityBenefits = [
  'ICAEL-accredited echocardiography services',
  'Standard 24–48 hour turnaround time for diagnostic reports',
  'STAT and same-day study reporting available',
  'High-quality imaging using state-of-the-art Philips ultrasound machines',
  'Standardized imaging protocols',
  'Board-certified radiologists and cardiologists available for interpretation services',
  'Trusted experience serving clinics since 2007',
  'Experienced, registered sonographers with an average of 8 years of experience',
  'Secure PACS storage for images and reports',
  'Electronic image sharing with other facilities (PowerShare)',
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
        bgcolor: '#F7F7F7',
        py: { xs: 6, md: 10 }
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 3, md: 6 } }}>
        {/* Section Title */}
        <Box
          sx={{
            mb: 6,
            textAlign: 'center',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 1000ms ease-out, transform 1000ms ease-out',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: 32, sm: 40, md: 48 },
              fontWeight: 800,
              color: '#0A2F4A',
              mb: 2,
              lineHeight: 1.2,
            }}
          >
            Why Choose Us?
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
            Experience the difference with our comprehensive cardiac imaging services
          </Typography>
        </Box>

        {/* Combined Card with Two Columns */}
        <Paper
          elevation={3}
          sx={{
            borderRadius: '20px',
            bgcolor: '#ffffff',
            overflow: 'hidden',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 1000ms ease-out 200ms, transform 1000ms ease-out 200ms, box-shadow 300ms ease, transform 300ms ease',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
            '&:hover': {
              transform: isVisible ? 'translateY(0) scale(1.02)' : 'translateY(24px)',
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.16)',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
            }}
          >
            {/* CONVENIENCE Column */}
            <Box sx={{ flex: 1, p: { xs: 4, md: 5 } }}>
              <Typography
                sx={{
                  fontSize: { xs: 20, sm: 24 },
                  fontWeight: 700,
                  color: '#0A2F4A',
                  mb: 3,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                  textAlign: 'center',
                }}
              >
                Convenience
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {convenienceBenefits.map((benefit, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      gap: 1.5,
                      alignItems: 'flex-start',
                    }}
                  >
                    <CheckCircleRoundedIcon
                      sx={{
                        color: '#C41F3E',
                        fontSize: 22,
                        flexShrink: 0,
                        mt: 0.25,
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: { xs: 14, sm: 15 },
                        color: '#0A2F4A',
                        lineHeight: 1.6,
                      }}
                    >
                      {benefit}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Divider */}
            <Box
              sx={{
                width: { xs: '100%', md: '1px' },
                height: { xs: '1px', md: 'auto' },
                bgcolor: alpha('#0A2F4A', 0.15),
              }}
            />

            {/* QUALITY Column */}
            <Box sx={{ flex: 1, p: { xs: 4, md: 5 } }}>
              <Typography
                sx={{
                  fontSize: { xs: 20, sm: 24 },
                  fontWeight: 700,
                  color: '#0A2F4A',
                  mb: 3,
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                  textAlign: 'center',
                }}
              >
                Quality
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {qualityBenefits.map((benefit, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      gap: 1.5,
                      alignItems: 'flex-start',
                    }}
                  >
                    <CheckCircleRoundedIcon
                      sx={{
                        color: '#C41F3E',
                        fontSize: 22,
                        flexShrink: 0,
                        mt: 0.25,
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: { xs: 14, sm: 15 },
                        color: '#0A2F4A',
                        lineHeight: 1.6,
                      }}
                    >
                      {benefit}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
