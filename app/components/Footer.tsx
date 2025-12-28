'use client';

import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

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
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 3, md: 6 } }}>
        {/* Main Footer Content */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr' },
            gap: { xs: 4, md: 6 },
            mb: 6,
          }}
        >
          {/* Company Info */}
          <Box>
            <Link href="/">
              <Image
                src="/cardiac-scan-logo3.png"
                alt="CardiacScan Imaging Logo"
                width={180}
                height={54}
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
              Advanced cardiac imaging services with expert radiologists dedicated to providing accurate diagnoses and compassionate care.
            </Typography>

            {/* Social Media Icons */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                component="a"
                href="https://facebook.com"
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
                href="https://instagram.com"
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
                <InstagramIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://linkedin.com"
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
              <IconButton
                component="a"
                href="https://twitter.com"
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
                <TwitterIcon />
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
                href="/contact"
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

          {/* Services */}
          <Box>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 700,
                mb: 2,
                color: '#fff',
              }}
            >
              Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Typography sx={{ fontSize: 14, color: 'rgba(255, 255, 255, 0.8)' }}>
                Cardiac CT Scans
              </Typography>
              <Typography sx={{ fontSize: 14, color: 'rgba(255, 255, 255, 0.8)' }}>
                Echocardiography
              </Typography>
              <Typography sx={{ fontSize: 14, color: 'rgba(255, 255, 255, 0.8)' }}>
                MRI Imaging
              </Typography>
              <Typography sx={{ fontSize: 14, color: 'rgba(255, 255, 255, 0.8)' }}>
                Nuclear Cardiology
              </Typography>
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
                123 Medical Center Dr<br />
                Suite 100<br />
                City, State 12345
              </Typography>
              <Typography sx={{ fontSize: 14, color: 'rgba(255, 255, 255, 0.8)' }}>
                (555) 123-4567
              </Typography>
              <Typography sx={{ fontSize: 14, color: 'rgba(255, 255, 255, 0.8)' }}>
                info@cardiacscan.com
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
            © {currentYear} CardiacScan Imaging. All rights reserved.
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
            <Link
              href="/terms"
              style={{
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
                fontSize: 14,
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}
            >
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
