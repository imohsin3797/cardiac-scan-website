'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { alpha } from '@mui/material/styles';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

const ServiceAreaMap = dynamic(() => import('./ServiceAreaMap'), {
  ssr: false,
  loading: () => (
    <Box
      sx={{
        width: '100%',
        height: { xs: 280, sm: 320 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#e8e8e8',
        borderRadius: '16px',
      }}
    >
      <CircularProgress sx={{ color: '#0A2F4A' }} />
    </Box>
  ),
});

const serviceAreas = [
  { city: 'Orlando', zip: '32828' },
  { city: 'Tampa', zip: '33647' },
  { city: 'St. Petersburg', zip: '33709' },
  { city: 'Kissimmee', zip: '34741' },
  { city: 'Brandon', zip: '33511' },
  { city: 'Winter Garden', zip: '34787' },
  { city: 'Valrico', zip: '33594' },
  { city: 'Davenport', zip: '33837' },
  { city: 'Altamonte Springs', zip: '32701' },
  { city: 'Ruskin', zip: '33570' },
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
            Have questions about integrating imaging services into your practice? Contact our team to explore how we can help you enhance your practice with expert diagnostic imaging and seamless workflow support.
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: { xs: 6, lg: 8 }, alignItems: 'center' }}>
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

          {/* Right: Service Area Map */}
          <Box
            sx={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 1000ms ease-out 400ms, transform 1000ms ease-out 400ms',
            }}
          >
            {/* Service Area Title */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
              <LocationOnRoundedIcon sx={{ fontSize: 28, color: '#C41F3E' }} />
              <Typography
                sx={{
                  fontSize: { xs: 20, sm: 24 },
                  fontWeight: 700,
                  color: '#0A2F4A',
                }}
              >
                Service Area
              </Typography>
            </Box>

            {/* Map Container */}
            <Box
              sx={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '3px solid #0A2F4A',
                mb: 3,
                height: { xs: 320, sm: 380 },
              }}
            >
              <ServiceAreaMap />
            </Box>

            {/* Service Areas List */}
            <Box
              sx={{
                bgcolor: '#ffffff',
                borderRadius: '16px',
                border: '2px solid',
                borderColor: alpha('#0A2F4A', 0.1),
                p: 2.5,
                mb: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 13, sm: 14 },
                  fontWeight: 700,
                  color: '#0A2F4A',
                  mb: 1.5,
                  textTransform: 'uppercase',
                  letterSpacing: 0.5,
                }}
              >
                Areas We Serve
              </Typography>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr' },
                  gap: 1,
                }}
              >
                {serviceAreas.map((area, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        bgcolor: '#C41F3E',
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: { xs: 12, sm: 13 },
                        color: '#0A2F4A',
                        fontWeight: 500,
                      }}
                    >
                      {area.city}
                      <Typography
                        component="span"
                        sx={{
                          fontSize: { xs: 10, sm: 11 },
                          color: '#7A7A7A',
                          ml: 0.5,
                        }}
                      >
                        ({area.zip})
                      </Typography>
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Message below map */}
            <Typography
              sx={{
                fontSize: { xs: 14, sm: 15 },
                color: '#7A7A7A',
                fontStyle: 'italic',
                textAlign: 'center',
                lineHeight: 1.6,
              }}
            >
              Not in your area yet? Reach out to discuss whether we may be on our way to you!
            </Typography>

          </Box>
        </Box>

        {/* Contact Info - Centered below the grid */}
        <Box
          sx={{
            mt: 4,
            display: 'flex',
            justifyContent: 'center',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 1000ms ease-out 500ms, transform 1000ms ease-out 500ms',
          }}
        >
          <Box
            sx={{
              bgcolor: '#ffffff',
              borderRadius: '16px',
              border: '2px solid',
              borderColor: alpha('#0A2F4A', 0.1),
              p: 2.5,
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 2, sm: 4 },
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: '10px',
                  bgcolor: alpha('#C41F3E', 0.1),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <PhoneRoundedIcon sx={{ fontSize: 20, color: '#C41F3E' }} />
              </Box>
              <Box
                component="a"
                href="tel:407-801-6575"
                sx={{
                  fontSize: { xs: 14, sm: 15 },
                  color: '#0A2F4A',
                  fontWeight: 600,
                  textDecoration: 'none',
                  '&:hover': { color: '#C41F3E' },
                }}
              >
                (407) 801-6575
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: '10px',
                  bgcolor: alpha('#C41F3E', 0.1),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <EmailRoundedIcon sx={{ fontSize: 20, color: '#C41F3E' }} />
              </Box>
              <Box
                component="a"
                href="mailto:info@cardiacscanimaging.com"
                sx={{
                  fontSize: { xs: 14, sm: 15 },
                  color: '#0A2F4A',
                  fontWeight: 600,
                  textDecoration: 'none',
                  '&:hover': { color: '#C41F3E' },
                }}
              >
                info@cardiacscanimaging.com
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
