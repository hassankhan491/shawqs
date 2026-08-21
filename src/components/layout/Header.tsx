// src/components/layout/Header.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import FullScreenMenu from './FullScreenMenu';

// Icons (simple SVGs for premium look)
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="7" y1="12" x2="21" y2="12" />
    <line x1="11" y1="18" x2="21" y2="18" />
  </svg>
);

const CartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M6 6h15l-1.5 9h-12z" />
    <circle cx="9" cy="20" r="1" />
    <circle cx="18" cy="20" r="1" />
    <path d="M6 6L5 3H2" />
  </svg>
);

const WishlistIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);

const AccountIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="flex items-center justify-between px-6 lg:px-12 py-4">
          
          {/* Left - Menu */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-3 text-black hover:opacity-70 transition-opacity"
          >
            <span className="font-medium text-sm tracking-wider uppercase hidden sm:block">Menu</span>
            <MenuIcon />
          </button>

          {/* Center - Logo */}
          <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="font-serif text-3xl lg:text-4xl font-medium tracking-wide">
              Shawq.
            </h1>
          </Link>

          {/* Right - Icons */}
          <div className="flex items-center gap-4 lg:gap-6">
            <button className="hidden md:block hover:opacity-70 transition-opacity">
              <SearchIcon />
            </button>
            <button className="hidden sm:block hover:opacity-70 transition-opacity">
              <AccountIcon />
            </button>
            <button className="hover:opacity-70 transition-opacity">
              <WishlistIcon />
            </button>
            <button className="hover:opacity-70 transition-opacity relative">
              <CartIcon />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-black text-white text-[10px] rounded-full flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Menu */}
      <FullScreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}