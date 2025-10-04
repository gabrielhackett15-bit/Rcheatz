// app/layout.js
import './globals.css';
import Sidebar from './components/Sidebar';

export const metadata = {
  title: 'RCheatz Hub • v1.0 Professional',
  description: 'The ultimate free executor link hub. Fast, simple, and professional.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 md:ml-64">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
