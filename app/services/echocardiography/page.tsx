'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const benefits = [
  'Real-time heart visualization',
  'No radiation exposure',
  'Painless and non-invasive',
  'Assesses valve function and blood flow',
  'Detects structural abnormalities',
  'Same-day results available',
];

const whatWeProvide = [
  {
    title: 'Advanced Ultrasound Technology',
    description: 'Latest echocardiography equipment for crystal-clear imaging and accurate diagnostics',
  },
  {
    title: 'Specialized Technicians',
    description: 'Certified cardiac sonographers with extensive experience in echocardiography',
  },
  {
    title: 'Multiple Echo Types',
    description: 'Transthoracic, stress, and Doppler echocardiography options to meet your needs',
  },
  {
    title: 'Prompt Interpretation',
    description: 'Fast turnaround on results with detailed reports from our cardiologists',
  },
];

export default function EchocardiographyPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          bgcolor: '#0A2F4A',
          color: '#fff',
          pt: { xs: 3, md: 4 },
          pb: { xs: 8, md: 12 },
          overflow: 'hidden',
        }}
      >
        <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 3, md: 6 }, position: 'relative', zIndex: 1 }}>
          <Button
            component={Link}
            href="/services"
            startIcon={<ArrowBackRoundedIcon />}
            sx={{
              color: '#fff',
              mb: 3,
              '&:hover': {
                bgcolor: alpha('#fff', 0.1),
              },
            }}
          >
            Back to Services
          </Button>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: 36, sm: 48, md: 56 },
              fontWeight: 800,
              mb: 3,
              lineHeight: 1.2,
            }}
          >
            Echocardiography
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 16, sm: 18, md: 20 },
              lineHeight: 1.7,
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: 800,
            }}
          >
            Real-time ultrasound imaging that provides detailed visualization of your heart's structure, function, and blood flow patterns.
          </Typography>
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ bgcolor: '#ffffff', py: { xs: 8, md: 12 } }}>
        <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 3, md: 6 } }}>
          {/* Overview Section with Image */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
              gap: { xs: 6, lg: 8 },
              mb: 10,
            }}
          >
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: 28, sm: 36, md: 40 },
                  fontWeight: 700,
                  color: '#0A2F4A',
                  mb: 3,
                }}
              >
                About This Service
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 15, sm: 16 },
                  color: '#7A7A7A',
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                Echocardiography, also known as an echo or cardiac ultrasound, uses sound waves to create moving pictures of your heart. This safe, painless procedure allows us to observe your heart beating and pumping blood in real-time.
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 15, sm: 16 },
                  color: '#7A7A7A',
                  lineHeight: 1.8,
                }}
              >
                Our comprehensive echocardiography services include transthoracic echo for general heart assessment, stress echocardiography to evaluate heart function during exercise, and Doppler imaging to assess blood flow velocity and direction.
              </Typography>
            </Box>

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
                src="/echocardiography-2.jpg"
                alt="Echocardiography Equipment"
                fill
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </Box>

          {/* Benefits Section */}
          <Box sx={{ mb: 10 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: 28, sm: 36, md: 40 },
                fontWeight: 700,
                color: '#0A2F4A',
                mb: 4,
                textAlign: 'center',
              }}
            >
              Key Benefits
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                gap: 3,
              }}
            >
              {benefits.map((benefit, index) => (
                <Paper
                  key={index}
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: '16px',
                    bgcolor: '#F7F7F7',
                    border: '2px solid',
                    borderColor: alpha('#0A2F4A', 0.1),
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2,
                  }}
                >
                  <CheckCircleRoundedIcon sx={{ color: '#2e7d32', fontSize: 24, flexShrink: 0, mt: 0.25 }} />
                  <Typography
                    sx={{
                      fontSize: 15,
                      color: '#0A2F4A',
                      fontWeight: 500,
                      lineHeight: 1.6,
                    }}
                  >
                    {benefit}
                  </Typography>
                </Paper>
              ))}
            </Box>
          </Box>

          {/* What We Provide Section */}
          <Box sx={{ mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: 28, sm: 36, md: 40 },
                fontWeight: 700,
                color: '#0A2F4A',
                mb: 4,
                textAlign: 'center',
              }}
            >
              What CardiacScan Imaging Provides
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                gap: 4,
              }}
            >
              {whatWeProvide.map((item, index) => (
                <Paper
                  key={index}
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: '20px',
                    border: '2px solid',
                    borderColor: alpha('#C41F3E', 0.2),
                    '&:hover': {
                      borderColor: '#C41F3E',
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 16px rgba(196, 31, 62, 0.15)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: 18, sm: 20 },
                      fontWeight: 700,
                      color: '#0A2F4A',
                      mb: 2,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 15,
                      color: '#7A7A7A',
                      lineHeight: 1.7,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Paper>
              ))}
            </Box>
          </Box>

          {/* CTA Section */}
          <Box
            sx={{
              bgcolor: '#F7F7F7',
              borderRadius: '24px',
              p: { xs: 4, md: 6 },
              textAlign: 'center',
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 24, sm: 32 },
                fontWeight: 700,
                color: '#0A2F4A',
                mb: 2,
              }}
            >
              Ready to Schedule Your Echocardiogram?
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 16, sm: 18 },
                color: '#7A7A7A',
                mb: 4,
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              Contact us today to book your appointment or learn more about how echocardiography can provide insights into your heart health.
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
              Schedule Appointment
            </Button>
          </Box>
        </Box>
      </Box>
    </main>
  );
}
