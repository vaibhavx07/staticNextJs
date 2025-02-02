"use client"
import React from 'react';
import { Send } from 'lucide-react';

const InputArea = () => {
  return (
    <div className="border-t bg-white p-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Ask anything..."
              className="w-full p-3 pr-10 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputArea;