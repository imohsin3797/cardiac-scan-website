'use client';

import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { alpha } from '@mui/material/styles';

const comparisonData = [
  {
    feature: 'Board-Certified Radiologists',
    cardiacScan: true,
    competitors: false,
  },
  {
    feature: 'Same-Day Results Available',
    cardiacScan: true,
    competitors: false,
  },
  {
    feature: 'Latest Imaging Technology',
    cardiacScan: true,
    competitors: true,
  },
  {
    feature: 'Personalized Care Plans',
    cardiacScan: true,
    competitors: false,
  },
  {
    feature: 'Extended Office Hours',
    cardiacScan: true,
    competitors: false,
  },
  {
    feature: 'No Hidden Fees',
    cardiacScan: true,
    competitors: false,
  },
  {
    feature: 'Insurance Accepted',
    cardiacScan: true,
    competitors: true,
  },
  {
    feature: 'Online Appointment Booking',
    cardiacScan: true,
    competitors: false,
  },
];

export default function ComparisonTable() {
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

    const section = document.getElementById('comparison-section');
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
      id="comparison-section"
      component="section"
      sx={{
        bgcolor: '#F7F7F7',
        pt: { xs: 6, md: 8 },
        pb: { xs: 3, md: 4 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >

      <Box sx={{ maxWidth: 1000, mx: 'auto', px: { xs: 3, md: 6 }, position: 'relative' }}>
        {/* Section Title */}
        <Box
          sx={{
            mb: 4,
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
            The CardiacScan Advantage
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 16, sm: 18 },
              color: '#7A7A7A',
              lineHeight: 1.6,
              maxWidth: 700,
              mx: 'auto',
            }}
          >
            See how we compare to other imaging centers and discover why patients choose us
          </Typography>
        </Box>

        {/* Comparison Table */}
        <Box
          sx={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 1000ms ease-out 200ms, transform 1000ms ease-out 200ms',
          }}
        >
          <TableContainer
            component={Paper}
            sx={{
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            }}
          >
            <Table>
              <TableHead>
                <TableRow
                  sx={{
                    bgcolor: alpha('#0A2F4A', 0.9),
                  }}
                >
                  <TableCell
                    sx={{
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: { xs: 13, sm: 15 },
                      borderBottom: '2px solid #C41F3E',
                      py: 1.5,
                    }}
                  >
                    Features
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: { xs: 13, sm: 15 },
                      borderBottom: '2px solid #C41F3E',
                      py: 1.5,
                      bgcolor: alpha('#C41F3E', 0.2),
                    }}
                  >
                    CardiacScan
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontWeight: 700,
                      fontSize: { xs: 13, sm: 15 },
                      borderBottom: '2px solid #C41F3E',
                      py: 1.5,
                    }}
                  >
                    Competitors
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {comparisonData.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      '&:nth-of-type(odd)': {
                        bgcolor: '#ffffff',
                      },
                      '&:nth-of-type(even)': {
                        bgcolor: '#F7F7F7',
                      },
                      '&:hover': {
                        bgcolor: alpha('#C41F3E', 0.05),
                      },
                      transition: 'background-color 0.3s ease',
                    }}
                  >
                    <TableCell
                      sx={{
                        fontSize: { xs: 12, sm: 14 },
                        color: '#0A2F4A',
                        fontWeight: 600,
                        py: 1.25,
                        borderBottom: index === comparisonData.length - 1 ? 'none' : '1px solid rgba(0,0,0,0.05)',
                      }}
                    >
                      {row.feature}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        py: 1.25,
                        borderBottom: index === comparisonData.length - 1 ? 'none' : '1px solid rgba(0,0,0,0.05)',
                      }}
                    >
                      {row.cardiacScan ? (
                        <CheckCircleRoundedIcon
                          sx={{
                            color: '#2e7d32',
                            fontSize: { xs: 20, sm: 24 },
                          }}
                        />
                      ) : (
                        <CancelRoundedIcon
                          sx={{
                            color: '#d32f2f',
                            fontSize: { xs: 20, sm: 24 },
                          }}
                        />
                      )}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        py: 1.25,
                        borderBottom: index === comparisonData.length - 1 ? 'none' : '1px solid rgba(0,0,0,0.05)',
                      }}
                    >
                      {row.competitors ? (
                        <CheckCircleRoundedIcon
                          sx={{
                            color: '#2e7d32',
                            fontSize: { xs: 20, sm: 24 },
                          }}
                        />
                      ) : (
                        <CancelRoundedIcon
                          sx={{
                            color: '#d32f2f',
                            fontSize: { xs: 20, sm: 24 },
                          }}
                        />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Call to Action */}
          <Box
            sx={{
              textAlign: 'center',
              mt: 4,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 16, sm: 18 },
                color: '#0A2F4A',
                fontWeight: 600,
                mb: 3,
              }}
            >
              Experience the CardiacScan difference today
            </Typography>
            <Box
              component="a"
              href="/#contact-section"
              sx={{
                display: 'inline-block',
                bgcolor: '#C41F3E',
                color: '#fff',
                px: { xs: 4, sm: 6 },
                py: { xs: 1.5, sm: 2 },
                borderRadius: '9999px',
                fontSize: { xs: 15, sm: 16 },
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(196, 31, 62, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: '#a01731',
                  color: '#fff',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 16px rgba(196, 31, 62, 0.4)',
                },
              }}
            >
              Schedule Your Appointment
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
