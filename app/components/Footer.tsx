'use client';

import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#0A2F4A',
        color: '#fff',
        pt: { xs: 6, md: 8 },
        pb: 3,
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 2, md: 6 } }}>
        {/* Main Footer Content */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '2fr 1fr 1fr' },
            gap: { xs: 3, md: 6 },
            mb: 6,
          }}
        >
          {/* Company Info */}
          <Box>
            <Link href="/">
              <Image
                src="/header-logo3.png"
                alt="Cardiac Scan Imaging Logo"
                width={210}
                height={63}
                className="h-auto mb-4"
              />
            </Link>
            <Typography
              sx={{
                fontSize: 14,
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: 1.6,
                mb: 3,
                mt: 2,
              }}
            >
              <strong>Supporting physician practices</strong> with on-site cardiac, vascular, and general ultrasound exams — delivered by <strong>experienced technologists</strong> and with <strong>board-certified radiologist interpretation</strong>.
            </Typography>

            {/* Social Media Icons */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                component="a"
                href="https://www.facebook.com/people/Cardiac-Scan-Imaging/61586643510706/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#fff',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    bgcolor: '#C41F3E',
                  },
                }}
              >
                <FacebookRoundedIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.linkedin.com/company/cardiacscan-imaging"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#fff',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    bgcolor: '#C41F3E',
                  },
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 700,
                mb: 2,
                color: '#fff',
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Link
                href="/"
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: 14,
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#C41F3E'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
              >
                Home
              </Link>
              <Link
                href="/about"
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: 14,
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#C41F3E'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
              >
                About Us
              </Link>
              <Link
                href="/services"
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: 14,
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#C41F3E'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
              >
                Services
              </Link>
              <Link
                href="/#contact-section"
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  textDecoration: 'none',
                  fontSize: 14,
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#C41F3E'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
              >
                Contact
              </Link>
            </Box>
          </Box>

          {/* Contact Info */}
          <Box>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 700,
                mb: 2,
                color: '#fff',
              }}
            >
              Contact
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Typography sx={{ fontSize: 14, color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6 }}>
                1317 Edgewater Dr, #3015<br />
                Orlando, FL 32804
              </Typography>
              <Typography sx={{ fontSize: 14, color: 'rgba(255, 255, 255, 0.8)' }}>
                (407) 801-6575
              </Typography>
              <Typography sx={{ fontSize: 14, color: 'rgba(255, 255, 255, 0.8)' }}>
                info@cardiacscanimaging.com
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Bottom Bar */}
        <Box
          sx={{
            pt: 3,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography sx={{ fontSize: 14, color: 'rgba(255, 255, 255, 0.6)', textAlign: { xs: 'center', sm: 'left' } }}>
            © {currentYear} Cardiac Scan Imaging. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link
              href="/privacy"
              style={{
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
                fontSize: 14,
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}
            >
              Privacy Policy
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
