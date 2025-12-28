'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import { alpha } from '@mui/material/styles';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const benefits = [
  {
    title: 'Expert Radiologists',
    description: 'Board-certified specialists with extensive cardiac imaging experience'
  },
  {
    title: 'State-of-the-Art Technology',
    description: 'Latest imaging equipment for accurate and detailed diagnostics'
  },
  {
    title: 'Fast & Accurate Results',
    description: 'Quick turnaround times without compromising on quality'
  }
];

const reviews = [
  {
    text: "The team at CardiacScan Imaging provided exceptional care. The imaging process was quick and comfortable, and the results were delivered promptly with clear explanations.",
    name: "Dr. Sarah Johnson",
    date: "December 2024",
    rating: 5
  },
  {
    text: "Outstanding service from start to finish. The staff was professional and knowledgeable, making the entire experience seamless for our patients.",
    name: "Michael Chen, MD",
    date: "November 2024",
    rating: 5
  },
  {
    text: "I highly recommend CardiacScan Imaging for their expertise and advanced technology. The quality of their imaging is consistently excellent.",
    name: "Dr. Emily Rodriguez",
    date: "October 2024",
    rating: 5
  }
];

export default function WhyChooseUs() {
  const [currentReview, setCurrentReview] = useState(0);
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

  const handlePrevReview = () => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNextReview = () => {
    setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

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
                aspectRatio: '3/2.5',
                width: '100%',
              }}
            >
              <Image
                src="/cardiac-scan-imaging.jpg"
                alt="CardiacScan Imaging facility"
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
                    p: 2,
                    borderRadius: '20px',
                    bgcolor: '#F7F7F7',
                    border: '2px solid',
                    borderColor: alpha('#0A2F4A', 0.1),
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                    transition: `opacity 1000ms ease-out ${300 + index * 100}ms, transform 1000ms ease-out ${300 + index * 100}ms`,
                  }}
                >
                  <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                    <CheckCircleRoundedIcon sx={{ color: '#C41F3E', fontSize: 22, flexShrink: 0, mt: 0.3 }} />
                    <Box>
                      <Typography
                        sx={{
                          fontSize: { xs: 15, sm: 16 },
                          fontWeight: 700,
                          color: '#0A2F4A',
                          mb: 0.25,
                        }}
                      >
                        {benefit.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: 13, sm: 14 },
                          color: '#7A7A7A',
                          lineHeight: 1.4,
                        }}
                      >
                        {benefit.description}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              ))}
            </Box>

            {/* Reviews Carousel */}
            <Box
              sx={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 1000ms ease-out 600ms, transform 1000ms ease-out 600ms',
              }}
            >
              <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 2 }}>
                {/* Left Arrow */}
                <IconButton
                  onClick={handlePrevReview}
                  sx={{
                    color: '#0A2F4A',
                    width: 40,
                    height: 40,
                    flexShrink: 0,
                    '&:hover': {
                      bgcolor: alpha('#0A2F4A', 0.1),
                    },
                  }}
                >
                  <ArrowBackIosNewRoundedIcon sx={{ fontSize: 20 }} />
                </IconButton>

                {/* Review Content */}
                <Box sx={{ flex: 1, minHeight: { xs: 180, sm: 200 } }}>
                  <Rating
                    value={reviews[currentReview].rating}
                    readOnly
                    size="small"
                    sx={{
                      mb: 1,
                      '& .MuiRating-iconFilled': {
                        color: '#C41F3E',
                      },
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: { xs: 13, sm: 14 },
                      color: '#0A2F4A',
                      lineHeight: 1.5,
                      mb: 2,
                      fontStyle: 'italic',
                    }}
                  >
                    "{reviews[currentReview].text}"
                  </Typography>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: { xs: 13, sm: 14 },
                        fontWeight: 700,
                        color: '#0A2F4A',
                      }}
                    >
                      {reviews[currentReview].name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: 12, sm: 13 },
                        color: '#7A7A7A',
                        mt: 0.25,
                      }}
                    >
                      {reviews[currentReview].date}
                    </Typography>
                  </Box>
                </Box>

                {/* Right Arrow */}
                <IconButton
                  onClick={handleNextReview}
                  sx={{
                    color: '#0A2F4A',
                    width: 40,
                    height: 40,
                    flexShrink: 0,
                    '&:hover': {
                      bgcolor: alpha('#0A2F4A', 0.1),
                    },
                  }}
                >
                  <ArrowForwardIosRoundedIcon sx={{ fontSize: 20 }} />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
