'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const benefits = [
  'Detects peripheral artery disease early',
  'Non-invasive and painless',
  'Quick, reliable assessment',
  'Supports preventive care',
  'Guides treatment planning',
  'Improves overall vascular health',
];

export default function ABIPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main>
      <Box sx={{ bgcolor: '#0A2F4A', color: '#fff', pt: { xs: 3, md: 4 }, pb: { xs: 6, md: 8 } }}>
        <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 3, md: 6 } }}>
          <Button component={Link} href="/services" startIcon={<ArrowBackRoundedIcon />} sx={{ color: '#fff', mb: 3, textTransform: 'none', '&:hover': { bgcolor: alpha('#fff', 0.1) } }}>
            Back to Services
          </Button>
          <Typography variant="h1" sx={{ fontSize: { xs: 32, sm: 42, md: 52 }, fontWeight: 800, mb: 2, lineHeight: 1.2 }}>
            Ankle-Brachial Index (ABI)
          </Typography>
          <Typography sx={{ fontSize: { xs: 16, sm: 18 }, lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.9)', maxWidth: 800 }}>
            Simple, non-invasive test to evaluate circulation in the legs.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ bgcolor: '#ffffff', py: { xs: 6, md: 10 } }}>
        <Box sx={{ maxWidth: 1000, mx: 'auto', px: { xs: 3, md: 6 } }}>
          <Box sx={{ mb: 6 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: 26, sm: 32 }, fontWeight: 700, color: '#0A2F4A', mb: 3 }}>
              About This Service
            </Typography>
            <Typography sx={{ fontSize: { xs: 15, sm: 16 }, color: '#7A7A7A', lineHeight: 1.8 }}>
              The Ankle-Brachial Index measures blood pressure in the arms and legs to detect peripheral artery disease (PAD). Early detection of PAD can help prevent complications like poor circulation, pain, or tissue damage.
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '3fr 2fr' }, gap: { xs: 4, md: 6 }, alignItems: 'flex-start' }}>
            <Box>
              <Typography variant="h2" sx={{ fontSize: { xs: 26, sm: 32 }, fontWeight: 700, color: '#0A2F4A', mb: 3 }}>
                Key Benefits
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {benefits.map((benefit, index) => (
                  <Box key={index} sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <CheckCircleRoundedIcon sx={{ color: '#C41F3E', fontSize: 24, flexShrink: 0 }} />
                    <Typography sx={{ fontSize: { xs: 15, sm: 16 }, color: '#0A2F4A', fontWeight: 500 }}>{benefit}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', height: { xs: 220, sm: 260, md: 300 }, borderRadius: '20px', overflow: 'hidden', border: '3px solid #0A2F4A' }}>
              <Image src="/anklebrachial.jpg" alt="Ankle-Brachial Index" fill style={{ objectFit: 'cover' }} />
            </Box>
          </Box>

          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Button component={Link} href="/#contact-section" variant="contained" size="large" sx={{ bgcolor: '#C41F3E', color: '#fff', py: 1.75, px: 5, fontSize: 16, fontWeight: 600, textTransform: 'none', borderRadius: '9999px', boxShadow: '0 4px 12px rgba(196, 31, 62, 0.3)', '&:hover': { bgcolor: '#a01731', boxShadow: '0 6px 16px rgba(196, 31, 62, 0.4)' } }}>
              Partner With Us
            </Button>
          </Box>
        </Box>
      </Box>
    </main>
  );
}
