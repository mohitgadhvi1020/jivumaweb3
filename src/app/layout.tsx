import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CartAnimation from './components/CartAnimation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jivuma | Authentic Indian Spice Mixes',
  description: 'Premium spice mixes for authentic Indian cuisine. Bring restaurant-quality flavors to your home with our specially crafted blends.',
  icons: {
    icon: '/images/jivuma_logo.png',
    shortcut: '/images/jivuma_logo.png',
    apple: '/images/jivuma_logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://checkout.razorpay.com/v1/checkout.js" async></script>
      </head>
      <body className={`${inter.className}`}>
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <ScrollToTop />
            <CartAnimation />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
