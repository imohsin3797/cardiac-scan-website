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
              <Typography sx={{ mb: 2, fontSize: 14, color: '#7A7A7A' }}>
                Last updated: July 09, 2025
              </Typography>

              <Typography sx={{ mb: 3 }}>
                This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
              </Typography>

              <Typography sx={{ mb: 3 }}>
                We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, mt: 4, color: '#0A2F4A' }}>
                Interpretation and Definitions
              </Typography>
              
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: '#0A2F4A' }}>
                Interpretation
              </Typography>
              <Typography sx={{ mb: 3 }}>
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </Typography>

              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: '#0A2F4A' }}>
                Definitions
              </Typography>
              <Typography sx={{ mb: 2 }}>
                For the purposes of this Privacy Policy:
              </Typography>

              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
                <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
                <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Cardiac Scan Imaging, 1317 Edgewater Dr, Suite #3015, Orlando, FL 32804.</li>
                <li><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</li>
                <li><strong>Country</strong> refers to: Florida, United States</li>
                <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
                <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
                <li><strong>Service</strong> refers to the Website.</li>
                <li><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</li>
                <li><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</li>
                <li><strong>Website</strong> refers to Cardiac Scan Imaging, accessible from https://cardiacscanimaging.com/</li>
                <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
              </Box>

              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, mt: 4, color: '#0A2F4A' }}>
                Collecting and Using Your Personal Data
              </Typography>
              
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: '#0A2F4A' }}>
                Types of Data Collected
              </Typography>
              
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#0A2F4A' }}>
                Personal Data
              </Typography>
              <Typography sx={{ mb: 3 }}>
                While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to Usage Data.
              </Typography>

              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#0A2F4A' }}>
                Usage Data
              </Typography>
              <Typography sx={{ mb: 2 }}>
                Usage Data is collected automatically when using the Service.
              </Typography>
              <Typography sx={{ mb: 2 }}>
                Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
              </Typography>
              <Typography sx={{ mb: 3 }}>
                When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
              </Typography>
              <Typography sx={{ mb: 3 }}>
                We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
              </Typography>

              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: '#0A2F4A' }}>
                Tracking Technologies and Cookies
              </Typography>
              <Typography sx={{ mb: 2 }}>
                We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li><strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.</li>
                <li><strong>Web Beacons.</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).</li>
              </Box>

              <Typography sx={{ mb: 2 }}>
                Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser.
              </Typography>
              <Typography sx={{ mb: 2 }}>
                We use both Session and Persistent Cookies for the purposes set out below:
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li><strong>Necessary / Essential Cookies</strong> - Type: Session Cookies - Administered by: Us - Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</li>
                <li><strong>Cookies Policy / Notice Acceptance Cookies</strong> - Type: Persistent Cookies - Administered by: Us - Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</li>
                <li><strong>Functionality Cookies</strong> - Type: Persistent Cookies - Administered by: Us - Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</li>
              </Box>

              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, mt: 4, color: '#0A2F4A' }}>
                Use of Your Personal Data
              </Typography>
              <Typography sx={{ mb: 2 }}>
                The Company may use Personal Data for the following purposes:
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li>To provide and maintain our Service, including to monitor the usage of our Service.</li>
                <li>To manage Your Account: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</li>
                <li>For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</li>
                <li>To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</li>
                <li>To provide You with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</li>
                <li>To manage Your requests: To attend and manage Your requests to Us.</li>
                <li>For business transfers: We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</li>
                <li>For other purposes: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</li>
              </Box>

              <Typography sx={{ mb: 2 }}>
                We may share Your personal information in the following situations:
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li><strong>With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.</li>
                <li><strong>For business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
                <li><strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</li>
                <li><strong>With business partners:</strong> We may share Your information with Our business partners to offer You certain products, services or promotions.</li>
                <li><strong>With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</li>
                <li><strong>With Your consent:</strong> We may disclose Your personal information for any other purpose with Your consent.</li>
              </Box>

              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, mt: 4, color: '#0A2F4A' }}>
                Retention of Your Personal Data
              </Typography>
              <Typography sx={{ mb: 2 }}>
                The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
              </Typography>
              <Typography sx={{ mb: 3 }}>
                The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, mt: 4, color: '#0A2F4A' }}>
                Transfer of Your Personal Data
              </Typography>
              <Typography sx={{ mb: 2 }}>
                Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.
              </Typography>
              <Typography sx={{ mb: 2 }}>
                Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.
              </Typography>
              <Typography sx={{ mb: 3 }}>
                The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, mt: 4, color: '#0A2F4A' }}>
                Delete Your Personal Data
              </Typography>
              <Typography sx={{ mb: 2 }}>
                You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.
              </Typography>
              <Typography sx={{ mb: 2 }}>
                Our Service may give You the ability to delete certain information about You from within the Service.
              </Typography>
              <Typography sx={{ mb: 2 }}>
                You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.
              </Typography>
              <Typography sx={{ mb: 3 }}>
                Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, mt: 4, color: '#0A2F4A' }}>
                Disclosure of Your Personal Data
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: '#0A2F4A' }}>
                Business Transactions
              </Typography>
              <Typography sx={{ mb: 3 }}>
                If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
              </Typography>

              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: '#0A2F4A' }}>
                Law enforcement
              </Typography>
              <Typography sx={{ mb: 3 }}>
                Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
              </Typography>

              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: '#0A2F4A' }}>
                Other legal requirements
              </Typography>
              <Typography sx={{ mb: 2 }}>
                The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li>Comply with a legal obligation</li>
                <li>Protect and defend the rights or property of the Company</li>
                <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                <li>Protect the personal safety of Users of the Service or the public</li>
                <li>Protect against legal liability</li>
              </Box>

              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, mt: 4, color: '#0A2F4A' }}>
                Security of Your Personal Data
              </Typography>
              <Typography sx={{ mb: 3 }}>
                The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, mt: 4, color: '#0A2F4A' }}>
                Children's Privacy
              </Typography>
              <Typography sx={{ mb: 2 }}>
                Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.
              </Typography>
              <Typography sx={{ mb: 3 }}>
                If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, mt: 4, color: '#0A2F4A' }}>
                Links to Other Websites
              </Typography>
              <Typography sx={{ mb: 2 }}>
                Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.
              </Typography>
              <Typography sx={{ mb: 3 }}>
                We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, mt: 4, color: '#0A2F4A' }}>
                Changes to this Privacy Policy
              </Typography>
              <Typography sx={{ mb: 2 }}>
                We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
              </Typography>
              <Typography sx={{ mb: 2 }}>
                We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.
              </Typography>
              <Typography sx={{ mb: 3 }}>
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, mt: 4, color: '#0A2F4A' }}>
                Contact Us
              </Typography>
              <Typography sx={{ mb: 1 }}>
                If you have any questions about this Privacy Policy, You can contact us:
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 4 }}>
                <li>By email: info@cardiacscanimaging.com</li>
                <li>By phone number: (407) 801-6575</li>
              </Box>
            </Box>
          </TabPanel>

          <TabPanel value={tabValue} index={1}>
            <Box sx={{ color: '#0A2F4A', lineHeight: 1.8 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#0A2F4A' }}>
                SMS Privacy Policy
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, color: '#0A2F4A' }}>
                SMS Terms and Conditions
              </Typography>

              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, mt: 3, color: '#0A2F4A' }}>
                Introduction
              </Typography>
              <Typography sx={{ mb: 2 }}>
                Cardiac Scan Imaging may disclose Personal Data and other information as follows:
              </Typography>
              <Typography sx={{ mb: 2 }}>
                <strong>Third Parties that Help Provide the Messaging Service:</strong> We will not share your opt-in to an SMS short code campaign with a third party for purposes unrelated to supporting you in connection with that campaign. We may share your Personal Data with third parties that help us provide the messaging service, including, but not limited to, platform providers, phone companies, and other vendors who assist us in the delivery of text messages.
              </Typography>
              <Typography sx={{ mb: 2 }}>
                <strong>Additional Disclosures – Affiliates:</strong> We may disclose the Personal Data to our affiliates or subsidiaries; however, if we do so, their use and disclosure of your Personal Data will be subject to this Policy.
              </Typography>
              <Typography sx={{ mb: 3 }}>
                All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
              </Typography>

              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, mt: 3, color: '#0A2F4A' }}>
                Purpose of SMS Notifications
              </Typography>
              <Typography sx={{ mb: 3 }}>
                Our SMS notifications are designed to provide information to our clients relevant to the provision of ultrasound services per our service agreement.
              </Typography>

              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, mt: 3, color: '#0A2F4A' }}>
                Opt-In and Consent
              </Typography>
              <Typography sx={{ mb: 3 }}>
                By providing your phone number and opting into our SMS notifications, you confirm that you are the owner or authorized user of the phone number provided. You consent to receive recurring automated text messages (SMS, MMS) from us regarding your scheduled visits, service updates, offers, and other important notifications. Consent is not required to make any purchase from us. Message frequency may vary, but you can generally expect to receive between 1-5 messages per week.
              </Typography>

              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, mt: 3, color: '#0A2F4A' }}>
                Opt-Out Instructions
              </Typography>
              <Typography sx={{ mb: 2 }}>
                Your consent to receive automated texts is entirely voluntary. You may opt-out at any time:
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li>To stop receiving messages, reply "STOP," "END," "CANCEL," "UNSUBSCRIBE," or "QUIT" to any SMS message from us.</li>
                <li>You may also email us at info@cardiacscanimaging.com with your opt-out request.</li>
                <li>After you opt out, you will receive a final confirmation message, and no further messages will be sent to your number unless you re-enroll.</li>
              </Box>

              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, mt: 3, color: '#0A2F4A' }}>
                Help and Support
              </Typography>
              <Typography sx={{ mb: 2 }}>
                If you are experiencing issues with our SMS notifications or need assistance, you can:
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li>Reply with the keyword "HELP" to any message.</li>
                <li>Email us directly at info@cardiacscanimaging.com.</li>
              </Box>

              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, mt: 3, color: '#0A2F4A' }}>
                Message and Data Rates
              </Typography>
              <Typography sx={{ mb: 3 }}>
                Standard message and data rates may apply for any messages sent to you from us and from you to us. Please consult your mobile service provider for details regarding your text plan or data rates.
              </Typography>

              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, mt: 3, color: '#0A2F4A' }}>
                Privacy and Data Security
              </Typography>
              <Typography sx={{ mb: 2 }}>
                We value your privacy and are committed to protecting your personal information. Your data will be used solely for the purposes described in this policy, such as managing your service appointments, processing payments, and ensuring proper communication regarding your services. We do not sell, rent, or share your personal information with third parties for marketing purposes. We may share your information with third parties only as required by law, for billing and payment processing, or to fulfill our contractual obligations.
              </Typography>

              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, mt: 3, color: '#0A2F4A' }}>
                Data Retention
              </Typography>
              <Typography sx={{ mb: 3 }}>
                We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements. After this period, your data will be securely deleted or anonymized.
              </Typography>

              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, mt: 3, color: '#0A2F4A' }}>
                Compliance with Regulations
              </Typography>
              <Typography sx={{ mb: 3 }}>
                We comply with all relevant laws and regulations, including the Telephone Consumer Protection Act (TCPA) and CTIA guidelines. Our practices ensure that you can easily manage your preferences, and we provide clear instructions for opting in or out of our SMS notifications.
              </Typography>

              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, mt: 3, color: '#0A2F4A' }}>
                Indemnification
              </Typography>
              <Typography sx={{ mb: 3 }}>
                You agree to indemnify, defend, and hold us harmless from any privacy, tort, or other claims, including claims under the TCPA or any state law equivalents, arising from your voluntary provision of a telephone number that is not owned by you and/or your failure to notify us of any changes to your mobile telephone number.
              </Typography>

              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, mt: 3, color: '#0A2F4A' }}>
                Participation Requirements
              </Typography>
              <Typography sx={{ mb: 2 }}>
                To participate in our SMS notifications service, you must:
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li>Be 18 years of age or older.</li>
                <li>Own a wireless device capable of two-way messaging.</li>
                <li>Be a subscriber to a wireless service with text messaging capabilities. Please note that not all mobile carriers support this service.</li>
              </Box>

              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, mt: 3, color: '#0A2F4A' }}>
                Dispute Resolution and Arbitration
              </Typography>
              <Typography sx={{ mb: 3 }}>
                By using our SMS notifications service, you agree to resolve any disputes with us on an individual basis and not as part of any class or representative action. You waive your right to a trial by jury and agree that any claims will be resolved through final and binding arbitration. If you do not agree to these terms, please do not participate in the service.
              </Typography>

              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, mt: 3, color: '#0A2F4A' }}>
                Miscellaneous
              </Typography>
              <Typography sx={{ mb: 3 }}>
                You warrant and represent that you have the necessary rights, power, and authority to agree to these Terms and Conditions and that your participation in this service does not violate any other contract or obligation. If any provision of this Agreement is found to be unenforceable or invalid, the remaining provisions will remain in full force and effect. We reserve the right to modify these Terms and Conditions at any time. Any updates will be communicated to you via SMS or email, and your continued participation in the service constitutes acceptance of the modified terms.
              </Typography>

              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, mt: 3, color: '#0A2F4A' }}>
                Contact Information
              </Typography>
              <Typography sx={{ mb: 1 }}>
                If you have any questions or concerns about these Terms and Conditions or our privacy practices, please contact us at:
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <li>Email: info@cardiacscanimaging.com</li>
                <li>Phone: (407) 801-6575</li>
                <li>Mailing Address: 1317 Edgewater Dr, #3015, Orlando, FL 32804</li>
              </Box>

              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, mt: 3, color: '#0A2F4A' }}>
                Full Privacy Policy
              </Typography>
              <Typography sx={{ mb: 4 }}>
                For more detailed information on how we collect, use, and protect your data, please review our full Privacy Policy.
              </Typography>
            </Box>
          </TabPanel>
        </Box>
      </Box>
    </main>
  );
}
