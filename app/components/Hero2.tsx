"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { alpha } from "@mui/material/styles";

import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import MonitorHeartRoundedIcon from "@mui/icons-material/MonitorHeartRounded";
import LocalHospitalRoundedIcon from "@mui/icons-material/LocalHospitalRounded";

type Props = {
  imageSrc?: string;
  title?: string;
  subtitle?: string;
  cardColor?: string;
};

export default function Hero2({
  imageSrc = "/hero-section2.jpg",
  title = "CardiacScan Imaging",
  subtitle = "Advanced cardiac imaging services with expert radiologists dedicated to providing accurate diagnoses and compassionate care.",
  cardColor = "#F7F7F7",
}: Props) {
  const sectionPX = { xs: 2, md: 6 };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const section = document.getElementById('hero2-section');
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
    <Box component="section" id="hero2-section" sx={{ bgcolor: "background.default" }}>
      {/* Banner */}
      <Box sx={{ position: "relative", width: "100%", minHeight: { xs: 360, sm: 480, md: 600 } }}>
        <Image
          src={imageSrc}
          alt="Advanced cardiac imaging technology"
          priority
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 100vw, 100vw"
          style={{ objectFit: "cover" }}
        />

        {/* Gradient overlay */}
        <Box
          sx={(t) => ({
            position: "absolute",
            inset: 0,
            background: `
              linear-gradient(
                180deg,
                ${alpha("#0A2F4A", 0.45)} 0%,
                ${alpha("#0A2F4A", 0.55)} 45%,
                ${alpha("#0A2F4A", 0.65)} 100%
              )
            `,
          })}
        />

        {/* Centered headline */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            px: sectionPX,
          }}
        >
          <Box sx={{ width: "100%", maxWidth: { xs: "100%", sm: "90%", md: "80%" } }}>
            <Typography
              component="h1"
              sx={{
                color: "#fff",
                fontWeight: 900,
                letterSpacing: 0.2,
                textShadow: "0 2px 8px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.6), 0 6px 24px rgba(0,0,0,0.4)",
                fontSize: { xs: 28, sm: 40, md: 56 },
                lineHeight: { xs: 1.2, sm: 1.1 },
                wordBreak: "break-word",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                transition: isVisible ? 'opacity 1000ms ease-out, transform 1000ms ease-out' : 'none',
              }}
            >
              {title}
            </Typography>
            <Typography
              component="p"
              sx={{
                color: alpha("#fff", 0.95),
                textShadow: "0 2px 12px rgba(0,0,0,0.45)",
                fontSize: { xs: 14, sm: 16, md: 18 },
                maxWidth: { xs: 300, sm: 500, md: 860 },
                mx: "auto",
                mt: { xs: 1, sm: 1.5 },
                lineHeight: 1.6,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                transition: isVisible ? 'opacity 1000ms ease-out 200ms, transform 1000ms ease-out 200ms' : 'none',
              }}
            >
              {subtitle}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "center",
                mt: { xs: 3, sm: 4 },
                flexWrap: "wrap",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                transition: isVisible ? 'opacity 1000ms ease-out 400ms, transform 1000ms ease-out 400ms' : 'none',
              }}
            >
              <Button
                variant="contained"
                href="/#contact-section"
                sx={{
                  backgroundColor: "#C41F3E",
                  color: "#fff",
                  px: { xs: 4, sm: 5 },
                  py: { xs: 1.25, sm: 1.5 },
                  borderRadius: "9999px",
                  fontSize: { xs: 14, sm: 16 },
                  fontWeight: 600,
                  textTransform: "none",
                  boxShadow: "0 2px 8px rgba(196, 31, 62, 0.3)",
                  "&:hover": {
                    backgroundColor: "#a01731",
                    boxShadow: "0 4px 12px rgba(196, 31, 62, 0.4)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Schedule Appointment
              </Button>
              <Button
                variant="outlined"
                href="/services"
                sx={{
                  borderColor: "#fff",
                  color: "#fff",
                  borderWidth: 2,
                  px: { xs: 4, sm: 5 },
                  py: { xs: 1.25, sm: 1.5 },
                  borderRadius: "9999px",
                  fontSize: { xs: 14, sm: 16 },
                  fontWeight: 600,
                  textTransform: "none",
                  backgroundColor: alpha("#fff", 0.1),
                  backdropFilter: "blur(4px)",
                  "&:hover": {
                    borderColor: "#fff",
                    backgroundColor: alpha("#fff", 0.2),
                    borderWidth: 2,
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Our Services
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Three boxes BELOW the image */}
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
            gap: { xs: 1, sm: 0 },
            width: "100%",
            p: { xs: 1, sm: 0 },
          }}
        >
          <InfoCard
            title="Cardiac CT Imaging"
            color={cardColor}
            icon={<FavoriteRoundedIcon sx={{ fontSize: { xs: 32, sm: 36, md: 42 }, color: "#0A2F4A" }} />}
            isVisible={isVisible}
            delay={0}
          />
          <InfoCard
            title="Advanced Diagnostics"
            color={cardColor}
            icon={<MonitorHeartRoundedIcon sx={{ fontSize: { xs: 32, sm: 36, md: 42 }, color: "#0A2F4A" }} />}
            isVisible={isVisible}
            delay={100}
          />
          <InfoCard
            title="Expert Care Team"
            color={cardColor}
            icon={<LocalHospitalRoundedIcon sx={{ fontSize: { xs: 32, sm: 36, md: 42 }, color: "#0A2F4A" }} />}
            isVisible={isVisible}
            delay={200}
          />
        </Box>
      </Box>
    </Box>
  );
}

function InfoCard({
  title,
  color,
  icon,
  isVisible,
  delay,
}: {
  title: string;
  color: string;
  icon: React.ReactNode;
  isVisible: boolean;
  delay: number;
}) {
  return (
    <Paper
      square
      elevation={0}
      sx={(t) => ({
        p: { xs: 2.5, sm: 3, md: 4 },
        minHeight: { xs: 120, sm: 140, md: 160 },
        backgroundColor: "#F7F7F7",
        borderRight: { xs: "none", sm: `1px solid ${alpha("#0A2F4A", 0.1)}` },
        "&:last-of-type": { borderRight: "none" },
        textAlign: "center",
        color: "#0A2F4A",
        borderRadius: { xs: 1, sm: 0 },
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: isVisible ? `opacity 1000ms ease-out ${delay}ms, transform 1000ms ease-out ${delay}ms` : 'none',
      })}
    >
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: { xs: 1, sm: 1.25 } }}>
        <Box aria-hidden sx={{ opacity: 0.95 }}>
          {icon}
        </Box>
        <Typography
          component="h3"
          sx={{
            fontWeight: 800,
            fontSize: { xs: 15, sm: 16, md: 18 },
            letterSpacing: 0.2,
            color: "inherit",
            lineHeight: 1.3,
          }}
        >
          {title}
        </Typography>
      </Box>
    </Paper>
  );
}
