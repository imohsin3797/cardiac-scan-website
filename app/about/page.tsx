'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { alpha } from '@mui/material/styles';

const teamMembers = [
  {
    name: 'Dr. Sarah Mitchell, MD',
    role: 'Chief Radiologist',
    image: '/team-member-1.jpg',
    bio: 'Board-certified radiologist with over 15 years of experience in cardiac imaging. Dr. Mitchell completed her fellowship at Johns Hopkins Medical Center and specializes in advanced CT and MRI cardiac diagnostics.',
  },
  {
    name: 'Dr. James Rodriguez, MD',
    role: 'Senior Cardiologist',
    image: '/team-member-2.jpg',
    bio: 'Renowned cardiologist with expertise in nuclear cardiology and echocardiography. Dr. Rodriguez has published numerous research papers and is dedicated to providing personalized patient care with cutting-edge imaging technology.',
  },
];

function TeamBioCard({ member, index, isVisible }: { member: typeof teamMembers[0]; index: number; isVisible: boolean }) {
  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: '20px',
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transitionDelay: `${index * 150}ms`,
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
        },
      }}
    >
      {/* Image Top Half */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: 300,
          bgcolor: '#F7F7F7',
        }}
      >
        <Image
          src={member.image}
          alt={member.name}
          fill
          style={{ objectFit: 'cover' }}
        />
      </Box>

      {/* Text Bottom Half */}
      <Box
        sx={{
          p: 4,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 20, sm: 24 },
            fontWeight: 700,
            color: '#0A2F4A',
            mb: 0.5,
          }}
        >
          {member.name}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 14, sm: 16 },
            fontWeight: 600,
            color: '#C41F3E',
            mb: 2,
            textTransform: 'uppercase',
            letterSpacing: 0.5,
          }}
        >
          {member.role}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 14, sm: 15 },
            color: '#7A7A7A',
            lineHeight: 1.7,
          }}
        >
          {member.bio}
        </Typography>
      </Box>
    </Paper>
  );
}

function MissionSection({ isVisible }: { isVisible: boolean }) {
  return (
    <Box
      id="mission-section"
      sx={{
        bgcolor: '#ffffff',
        py: { xs: 8, md: 12 },
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 3, md: 6 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
            gap: { xs: 6, lg: 8 },
            alignItems: 'center',
          }}
        >
          {/* Left: Mission Text */}
          <Box
            sx={{
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
                mb: 3,
                lineHeight: 1.2,
              }}
            >
              Our Mission
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 16, sm: 18 },
                color: '#7A7A7A',
                lineHeight: 1.8,
                mb: 3,
              }}
            >
              At CardiacScan Imaging, our mission is to provide the highest quality cardiac imaging services with compassion, precision, and excellence. We are dedicated to advancing cardiovascular care through state-of-the-art technology and expert medical professionals.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 16, sm: 18 },
                color: '#7A7A7A',
                lineHeight: 1.8,
                mb: 3,
              }}
            >
              We believe that early detection and accurate diagnosis are critical to improving patient outcomes. Our team works tirelessly to ensure that every patient receives personalized care, timely results, and the support they need throughout their healthcare journey.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 16, sm: 18 },
                color: '#7A7A7A',
                lineHeight: 1.8,
              }}
            >
              Through continuous innovation and unwavering commitment to patient safety, we strive to be the trusted partner in cardiac health for our community.
            </Typography>
          </Box>

          {/* Right: Mission Image */}
          <Box
            sx={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 1000ms ease-out 200ms, transform 1000ms ease-out 200ms',
              order: { xs: -1, lg: 0 },
            }}
          >
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
                src="/mission-image.jpg"
                alt="CardiacScan Imaging Mission"
                fill
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function AboutPage() {
  const [teamVisible, setTeamVisible] = useState(false);
  const [missionVisible, setMissionVisible] = useState(false);

  useEffect(() => {
    const teamObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTeamVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const missionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setMissionVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const teamSection = document.getElementById('team-section');
    const missionSection = document.getElementById('mission-section');

    if (teamSection) {
      teamObserver.observe(teamSection);
    }
    if (missionSection) {
      missionObserver.observe(missionSection);
    }

    return () => {
      if (teamSection) {
        teamObserver.unobserve(teamSection);
      }
      if (missionSection) {
        missionObserver.unobserve(missionSection);
      }
    };
  }, []);

  return (
    <main>
      {/* Team Section */}
      <Box
        id="team-section"
        sx={{
          bgcolor: '#F7F7F7',
          py: { xs: 8, md: 12 },
        }}
      >
        <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 3, md: 6 } }}>
          {/* Section Header */}
          <Box
            sx={{
              mb: 6,
              textAlign: 'center',
              opacity: teamVisible ? 1 : 0,
              transform: teamVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 1000ms ease-out, transform 1000ms ease-out',
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: 36, sm: 48, md: 56 },
                fontWeight: 800,
                color: '#0A2F4A',
                mb: 2,
                lineHeight: 1.2,
              }}
            >
              Meet Our Team
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
              Our board-certified specialists bring decades of combined experience in cardiac imaging and patient care
            </Typography>
          </Box>

          {/* Team Cards */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 4,
            }}
          >
            {teamMembers.map((member, index) => (
              <TeamBioCard
                key={index}
                member={member}
                index={index}
                isVisible={teamVisible}
              />
            ))}
          </Box>
        </Box>
      </Box>

      {/* Mission Section */}
      <MissionSection isVisible={missionVisible} />
    </main>
  );
}
