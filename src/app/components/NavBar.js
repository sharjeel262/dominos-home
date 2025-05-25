'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, User } from 'lucide-react';

export default function FancyNavBar() {
  // State for active category and submenu
  const [activeCategory, setActiveCategory] = useState('Deals');
  const [activeSubMenu, setActiveSubMenu] = useState('MORE VALUE DEALS');

  // Category and submenu items
  const categories = [
    'Deals',
    'Pizzas',
    'Pizza Rolls',
    'Sides',
    'My Box',
    'Meltz',
    'Desserts',
    'Drinks'
  ];
  const subMenus = [
    'MORE VALUE DEALS',
    'GATHERING DEALS',
    'DAILY DEALS'
  ];

  return (
    <nav className="w-full bg-white shadow flex flex-col fixed top-0 left-0 z-50">
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-center px-2 md:px-6 py-4 gap-y-2">
        {/* Left: Logo and Delivery */}
        <div className="flex items-center gap-2 md:gap-4 min-w-0 justify-start">
          <Image
            src="/dominos.png"
            alt="Domino's"
            width={110}
            height={50}
            priority
            className="w-[70px] h-auto md:w-[130px]"
          />
          <div className="text-[12px] md:text-sm truncate">
            <span className="font-semibold">Delivering to</span>
            <span className="ml-1 font-bold uppercase">Comsats University </span>
          </div>
        </div>
        {/* Center: Main Nav */}
        <div className="hidden md:flex justify-center min-w-0">
          <div className="flex gap-5 md:gap-8 font-bold text-sm md:text-lg text-gray-700">
            <Link href="#">MENU</Link>
            <Link href="#">STORES</Link>
            <Link href="#">OUR APPS</Link>
          </div>
        </div>
        {/* Right: Cart and Account */}
        <div className="flex items-center gap-2 md:gap-4 justify-end min-w-0">
          <Link href="#" className="relative">
            <ShoppingCart className="w-6 h-6 md:w-7 md:h-7 text-blue-600" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] md:text-xs rounded-full px-1">0</span>
          </Link>
          <Link href="#" className="flex items-center gap-1 font-bold text-xs md:text-sm">
            <User className="w-6 h-6 md:w-7 md:h-7" />
            <span className="hidden md:inline">MY ACCOUNT</span>
          </Link>
        </div>
        {/* Center nav for mobile, stacked below */}
        <div className="flex justify-center md:hidden col-span-1">
          <div className="flex gap-4 font-bold text-sm text-gray-700">
            <Link href="#">MENU</Link>
            <Link href="#">STORES</Link>
            <Link href="#">OUR APPS</Link>
          </div>
        </div>
      </div>
      {/* Category Menu */}
      <div className="w-full bg-white border-t border-b border-gray-200 relative z-10">
        <div className="flex justify-start md:justify-center gap-2 md:gap-4 px-1 md:px-4 py-1 font-semibold text-xs md:text-sm overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-3 md:px-4 py-1 md:py-2 transition-colors font-bold whitespace-nowrap
                ${activeCategory === cat
                  ? 'bg-[#4A4A4A] text-white rounded-t-2xl z-20 -mb-2 shadow-md'
                  : 'bg-transparent text-gray-700 hover:bg-gray-200'
                }`}
              style={activeCategory === cat ? { fontSize: '1.1rem' } : {}}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      {/* Submenu Bar */}
      <div
        style={{ backgroundColor: '#4A4A4A' }}
        className="w-full flex justify-start md:justify-center gap-1 md:gap-2 px-1 md:px-4 py-2 text-white text-[10px] md:text-xs items-center z-0 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300"
      >
        {subMenus.map((item) => (
          <button
            key={item}
            onClick={() => setActiveSubMenu(item)}
            className={`px-2 md:px-3 py-[4px] md:py-1 rounded font-bold transition-colors whitespace-nowrap ${
              activeSubMenu === item
                ? 'bg-red-600'
                : 'bg-transparent hover:bg-red-500'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
}
