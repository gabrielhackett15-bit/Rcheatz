// app/layout.js
import './globals.css';
import TopNav from '../components/TopNav';
import SideSidebar from '../components/SideSidebar';

export const metadata = {
  title: 'RCheatz Hub • v1.0 Professional',
  description: 'The ultimate free executor link hub. Fast, simple, and professional.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <TopNav />
        <div className="flex">
          <SideSidebar />
          <main className="flex-1 md:ml-64 p-4 md:p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
