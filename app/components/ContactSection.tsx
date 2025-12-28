'use client';

import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { alpha } from '@mui/material/styles';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';

const contactInfo = [
  {
    icon: PhoneRoundedIcon,
    title: 'Phone',
    content: '(555) 123-4567',
    link: 'tel:+15551234567'
  },
  {
    icon: EmailRoundedIcon,
    title: 'Email',
    content: 'info@cardiacscan.com',
    link: 'mailto:info@cardiacscan.com'
  },
  {
    icon: LocationOnRoundedIcon,
    title: 'Address',
    content: '123 Medical Center Dr, Suite 100\nCity, State 12345',
    link: null
  },
  {
    icon: AccessTimeRoundedIcon,
    title: 'Hours',
    content: 'Mon-Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 2:00 PM',
    link: null
  }
];

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

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

    const section = document.getElementById('contact-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.',
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          phone: '',
          message: '',
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      id="contact-section"
      component="section"
      sx={{
        bgcolor: '#F7F7F7',
        pt: { xs: 4, md: 6 },
        pb: { xs: 8, md: 12 }
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
            Get In Touch
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 16, sm: 18 },
              color: '#7A7A7A',
              lineHeight: 1.6,
            }}
          >
            Have questions? We're here to help. Reach out to schedule your appointment today.
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: { xs: 6, lg: 8 } }}>
          {/* Left: Contact Form */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 1000ms ease-out 200ms, transform 1000ms ease-out 200ms',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {submitStatus.type && (
                <Alert
                  severity={submitStatus.type}
                  sx={{
                    borderRadius: '8px',
                    '& .MuiAlert-icon': {
                      color: submitStatus.type === 'success' ? '#2e7d32' : '#d32f2f',
                    },
                  }}
                >
                  {submitStatus.message}
                </Alert>
              )}

              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#0A2F4A',
                      borderWidth: 2,
                    },
                    '&:hover fieldset': {
                      borderColor: '#0A2F4A',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#0A2F4A',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#7A7A7A',
                    '&.Mui-focused': {
                      color: '#0A2F4A',
                    },
                  },
                }}
              />

              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#0A2F4A',
                      borderWidth: 2,
                    },
                    '&:hover fieldset': {
                      borderColor: '#0A2F4A',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#0A2F4A',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#7A7A7A',
                    '&.Mui-focused': {
                      color: '#0A2F4A',
                    },
                  },
                }}
              />

              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#0A2F4A',
                      borderWidth: 2,
                    },
                    '&:hover fieldset': {
                      borderColor: '#0A2F4A',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#0A2F4A',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#7A7A7A',
                    '&.Mui-focused': {
                      color: '#0A2F4A',
                    },
                  },
                }}
              />

              <TextField
                fullWidth
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#0A2F4A',
                      borderWidth: 2,
                    },
                    '&:hover fieldset': {
                      borderColor: '#0A2F4A',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#0A2F4A',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#7A7A7A',
                    '&.Mui-focused': {
                      color: '#0A2F4A',
                    },
                  },
                }}
              />

              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#0A2F4A',
                      borderWidth: 2,
                    },
                    '&:hover fieldset': {
                      borderColor: '#0A2F4A',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#0A2F4A',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#7A7A7A',
                    '&.Mui-focused': {
                      color: '#0A2F4A',
                    },
                  },
                }}
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={isSubmitting}
                sx={{
                  bgcolor: '#C41F3E',
                  color: '#fff',
                  py: 1.5,
                  px: 4,
                  fontSize: 16,
                  fontWeight: 600,
                  textTransform: 'none',
                  borderRadius: '8px',
                  '&:hover': {
                    bgcolor: '#a01731',
                  },
                  '&.Mui-disabled': {
                    bgcolor: alpha('#C41F3E', 0.6),
                    color: '#fff',
                  },
                }}
              >
                {isSubmitting ? (
                  <>
                    <CircularProgress size={20} sx={{ color: '#fff', mr: 1 }} />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
            </Box>
          </Box>

          {/* Right: Contact Information */}
          <Box
            sx={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 1000ms ease-out 400ms, transform 1000ms ease-out 400ms',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const content = info.link ? (
                  <Box
                    component="a"
                    href={info.link}
                    sx={{
                      color: '#0A2F4A',
                      textDecoration: 'none',
                      '&:hover': {
                        color: '#C41F3E',
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: 15, sm: 16 },
                        lineHeight: 1.6,
                        whiteSpace: 'pre-line',
                      }}
                    >
                      {info.content}
                    </Typography>
                  </Box>
                ) : (
                  <Typography
                    sx={{
                      fontSize: { xs: 15, sm: 16 },
                      color: '#0A2F4A',
                      lineHeight: 1.6,
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {info.content}
                  </Typography>
                );

                return (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      gap: 2,
                      p: 3,
                      bgcolor: '#ffffff',
                      borderRadius: '16px',
                      border: '2px solid',
                      borderColor: alpha('#0A2F4A', 0.1),
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: '#C41F3E',
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '12px',
                        bgcolor: alpha('#C41F3E', 0.1),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <IconComponent sx={{ fontSize: 28, color: '#C41F3E' }} />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: { xs: 14, sm: 15 },
                          fontWeight: 700,
                          color: '#7A7A7A',
                          mb: 0.5,
                          textTransform: 'uppercase',
                          letterSpacing: 0.5,
                        }}
                      >
                        {info.title}
                      </Typography>
                      {content}
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
