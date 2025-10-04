// app/layout.js
import './globals.css';

export const metadata = {
  title: 'RCheatz Hub • v1.0 Professional',
  description: 'The ultimate free executor link hub. Fast, simple, and professional.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
