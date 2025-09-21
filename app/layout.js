import '../styles/style.css';
import Sidebar from '../components/sidebar.js';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: 'RCheatz Hub',
  description: 'The ultimate free executor link hub. Fast, simple, and professional.',
  keywords: 'RCheatz, executor, roblox executor, free executor, cheats, roblox cheats',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}