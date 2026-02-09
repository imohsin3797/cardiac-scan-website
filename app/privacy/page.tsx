'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { alpha } from '@mui/material/styles';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`privacy-tabpanel-${index}`}
      aria-labelledby={`privacy-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

export default function PrivacyPage() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <main>
      <Box
        sx={{
          bgcolor: '#0A2F4A',
          pt: { xs: 4, md: 6 },
          pb: { xs: 4, md: 6 },
        }}
      >
        <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 3, md: 6 } }}>
          <Typography
            sx={{
              fontSize: { xs: 32, sm: 42, md: 52 },
              fontWeight: 700,
              color: '#fff',
              mb: 2,
              lineHeight: 1.2,
            }}
          >
            Privacy & Policy
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          bgcolor: '#ffffff',
          minHeight: '60vh',
        }}
      >
        <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 3, md: 6 } }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              aria-label="privacy policy tabs"
              sx={{
                '& .MuiTab-root': {
                  color: '#7A7A7A',
                  fontWeight: 600,
                  fontSize: { xs: 14, sm: 16 },
                  textTransform: 'none',
                  '&.Mui-selected': {
                    color: '#C41F3E',
                  },
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: '#C41F3E',
                },
              }}
            >
              <Tab label="Privacy Policy" />
              <Tab label="SMS Privacy Policy" />
            </Tabs>
          </Box>

          <TabPanel value={tabValue} index={0}>
            <Box sx={{ color: '#0A2F4A', lineHeight: 1.8 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#0A2F4A' }}>
                Privacy Policy
              </Typography>
              <Typography sx={{ mb: 3, fontSize: 14, color: '#7A7A7A' }}>
                Last updated: July 09, 2025
              </Typography>

              <Typography sx={{ mb: 3 }}>
                Cardiac Scan Imaging ("we," "us," or "our") values your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website at https://cardiacscanimaging.com.
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, mt: 4, color: '#0A2F4A' }}>
                Information We Collect
              </Typography>
              <Typography sx={{ mb: 2 }}>
                We may collect the following types of information:
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li><strong>Personal Data:</strong> Information you voluntarily provide to us (such as when you contact us).</li>
                <li><strong>Usage Data:</strong> Information automatically collected when you use our website, including IP address, browser type, pages visited, and time spent on the site.</li>
              </Box>
              <Typography sx={{ mb: 3 }}>
                We may also use cookies and similar technologies to improve website functionality and user experience. You can control cookies through your browser settings.
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, mt: 4, color: '#0A2F4A' }}>
                How We Use Your Information
              </Typography>
              <Typography sx={{ mb: 2 }}>
                We use your information to:
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li>Operate, maintain, and improve our website and services</li>
                <li>Respond to inquiries and manage requests</li>
                <li>Communicate important updates or service-related information</li>
                <li>Analyze website usage and improve performance</li>
                <li>Comply with legal obligations</li>
              </Box>

              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, mt: 4, color: '#0A2F4A' }}>
                Sharing of Information
              </Typography>
              <Typography sx={{ mb: 2 }}>
                We may share your information:
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li>With trusted service providers who assist us in operating our website</li>
                <li>In connection with a business transaction such as a merger or sale</li>
                <li>When required by law or to protect our legal rights</li>
                <li>With your consent</li>
              </Box>
              <Typography sx={{ mb: 3 }}>
                We do not sell your personal information.
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, mt: 4, color: '#0A2F4A' }}>
                Data Retention
              </Typography>
              <Typography sx={{ mb: 3 }}>
                We retain personal information only as long as necessary for the purposes outlined in this policy or as required by law.
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, mt: 4, color: '#0A2F4A' }}>
                Data Security
              </Typography>
              <Typography sx={{ mb: 3 }}>
                We use reasonable safeguards to protect your information. However, no method of online transmission or storage is completely secure.
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, mt: 4, color: '#0A2F4A' }}>
                Your Rights
              </Typography>
              <Typography sx={{ mb: 3 }}>
                You may request access to, correction of, or deletion of your personal information by contacting us. Certain data may be retained if required by law.
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, mt: 4, color: '#0A2F4A' }}>
                Children's Privacy
              </Typography>
              <Typography sx={{ mb: 3 }}>
                Our website is not intended for children under 13, and we do not knowingly collect personal information from children.
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, mt: 4, color: '#0A2F4A' }}>
                Third-Party Links
              </Typography>
              <Typography sx={{ mb: 3 }}>
                Our website may contain links to third-party websites. We are not responsible for their privacy practices.
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, mt: 4, color: '#0A2F4A' }}>
                Changes to This Policy
              </Typography>
              <Typography sx={{ mb: 3 }}>
                We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised effective date.
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, mt: 4, color: '#0A2F4A' }}>
                Contact Us
              </Typography>
              <Typography sx={{ mb: 1 }}>
                If you have questions about this Privacy Policy, please contact us:
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 4 }}>
                <li>Email: info@cardiacscanimaging.com</li>
                <li>Phone: (407) 801-6575</li>
              </Box>
            </Box>
          </TabPanel>

          <TabPanel value={tabValue} index={1}>
            <Box sx={{ color: '#0A2F4A', lineHeight: 1.8 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#0A2F4A' }}>
                SMS Privacy & Terms
              </Typography>

              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: '#0A2F4A' }}>
                Purpose
              </Typography>
              <Typography sx={{ mb: 3 }}>
                Cardiac Scan Imaging uses SMS to provide clients with important updates about ultrasound services, appointments, offers, and other relevant notifications.
              </Typography>

              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: '#0A2F4A' }}>
                Consent & Opt-In
              </Typography>
              <Typography sx={{ mb: 3 }}>
                By providing your phone number, you confirm you are the owner or authorized user and consent to receive recurring automated messages (1–5 per week). Consent is not required to make a purchase.
              </Typography>

              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: '#0A2F4A' }}>
                Opt-Out
              </Typography>
              <Typography sx={{ mb: 3 }}>
                You may stop messages at any time by replying STOP, END, CANCEL, UNSUBSCRIBE, or QUIT, or by emailing info@cardiacscanimaging.com. After opting out, you will receive a final confirmation message.
              </Typography>

              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: '#0A2F4A' }}>
                Help
              </Typography>
              <Typography sx={{ mb: 3 }}>
                Reply HELP to any message or email info@cardiacscanimaging.com for assistance.
              </Typography>

              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: '#0A2F4A' }}>
                Message & Data Rates
              </Typography>
              <Typography sx={{ mb: 3 }}>
                Standard carrier rates may apply. Check your mobile plan for details.
              </Typography>

              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: '#0A2F4A' }}>
                Privacy & Data Security
              </Typography>
              <Typography sx={{ mb: 3 }}>
                We protect your data and use it only for the purposes described above. We do not sell or share your information for marketing. Data may be shared with vendors, affiliates, or as required by law for service delivery or billing.
              </Typography>

              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: '#0A2F4A' }}>
                Compliance
              </Typography>
              <Typography sx={{ mb: 3 }}>
                We follow all applicable laws and guidelines, including the TCPA and CTIA, to ensure you can manage your SMS preferences easily.
              </Typography>

              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: '#0A2F4A' }}>
                Requirements
              </Typography>
              <Typography sx={{ mb: 3 }}>
                To participate, you must be 18+, have a text-capable device, and a supported mobile carrier.
              </Typography>

              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: '#0A2F4A' }}>
                Legal
              </Typography>
              <Typography sx={{ mb: 3 }}>
                Disputes are resolved individually via binding arbitration. By participating, you agree to these terms and acknowledge your responsibility for providing correct phone information. Terms may be updated; continued participation constitutes acceptance.
              </Typography>

              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: '#0A2F4A' }}>
                Contact
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3, listStyle: 'none' }}>
                <li>Email: info@cardiacscanimaging.com</li>
                <li>Phone: (407) 801-6575</li>
                <li>Address: 1317 Edgewater Dr, #3015, Orlando, FL 32804</li>
              </Box>

              <Typography sx={{ mb: 4 }}>
                For full details, please see our Privacy Policy.
              </Typography>
            </Box>
          </TabPanel>
        </Box>
      </Box>
    </main>
  );
}
