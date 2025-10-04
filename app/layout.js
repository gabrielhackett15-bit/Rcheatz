import './globals.css';
import Navigation from '../components/Navigation';

export const metadata = {
  title: 'Rcheatz - Free Roblox Executors',
  description: 'Your hub for free Roblox executors',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
