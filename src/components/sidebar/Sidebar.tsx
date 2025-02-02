"use client"
import React from 'react';
import { Search, MessageSquare, Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="hidden md:flex md:w-64 flex-col bg-gray-50 border-r">
      <div className="h-14 flex items-center px-4 border-b">
        <h1 className="text-xl font-semibold">Perplexity AI</h1>
      </div>
      
      <nav className="flex-1 px-2 py-4 space-y-2">
        <button className="w-full flex items-center space-x-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
          <Search className="h-5 w-5" />
          <span>Search</span>
        </button>
        <button className="w-full flex items-center space-x-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
          <MessageSquare className="h-5 w-5" />
          <span>Chat</span>
        </button>
        <button className="w-full flex items-center space-x-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;