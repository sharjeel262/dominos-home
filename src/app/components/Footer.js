'use client';
import { Facebook, Youtube, Instagram, ArrowUp } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Footer() {
  // Show/hide scroll-to-top button
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="relative bg-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-8">
          {/* Domino's Pizza */}
          <div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">DOMINO'S PIZZA</h3>
            <ul className="space-y-1 text-gray-700">
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li className="text-[#007FAA]">Nutritional Info</li>
              <li>Download Menu</li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">CONTACT</h3>
            <ul className="space-y-1 text-gray-700">
              <li>Call 111 366 466</li>
              <li>Feedback</li>
            </ul>
          </div>
          {/* Help */}
          <div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">HELP</h3>
            <ul className="space-y-1 text-gray-700">
              <li>Track Order</li>
              <li>Store Finder</li>
            </ul>
          </div>
        </div>
        {/* Social and App Icons */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="flex gap-4">
            <span className="rounded-full bg-[#1877F3] p-3">
              <Facebook className="text-white w-6 h-6" />
            </span>
            <span className="rounded-full bg-[#FF0000] p-3">
              <Youtube className="text-white w-6 h-6" />
            </span>
            <span className="rounded-full bg-black p-3">
              {/* X icon as SVG */}
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white"><path d="M17.53 6.47a.75.75 0 0 0-1.06 0L12 10.94 7.53 6.47a.75.75 0 1 0-1.06 1.06L10.94 12l-4.47 4.47a.75.75 0 1 0 1.06 1.06L12 13.06l4.47 4.47a.75.75 0 0 0 1.06-1.06L13.06 12l4.47-4.47a.75.75 0 0 0 0-1.06z" fill="currentColor"/></svg>
            </span>
            <span className="rounded-full bg-[#E1306C] p-3">
              <Instagram className="text-white w-6 h-6" />
            </span>
          </div>
          <div className="flex gap-4 mt-2">
            <span>
              <Image src="/iphone.webp" alt="App Store" width={128} height={42} />
            </span>
            <span>
              <Image src="/android.webp" alt="Google Play" width={140} height={42} />
            </span>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-800 mt-8">
          <div>
            <span>{new Date().getFullYear()} Dominos. All rights reserved</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-1">
            <span>Powered By</span>
            <span className="text-[#007FAA] font-semibold ml-1">Muhammad Sharjeel</span>
          </div>
        </div>
      </div>
      {/* Arrow to Top Button */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-4 right-4 z-40 bg-[#007FAA] hover:bg-[#00596e] text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007FAA]"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  );
} 