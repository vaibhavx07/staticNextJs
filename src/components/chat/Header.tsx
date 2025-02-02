"use client"
import React from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-14 md:hidden flex items-center px-4 border-b">
      <button className="p-2">
        <Menu className="h-6 w-6" />
      </button>
      <h1 className="ml-4 text-xl font-semibold">Perplexity AI</h1>
    </header>
  );
};

export default Header;