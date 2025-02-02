"use client"
import React from 'react';

const MessageList = () => {
  const exampleQueries = [
    "What are the latest developments in AI?",
    "Explain quantum computing in simple terms",
    "What are the best practices for React development?",
  ];

  return (
    <main className="flex-1 overflow-auto px-4 py-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Welcome to Perplexity AI</h2>
          <p className="text-gray-600">Ask anything or try an example</p>
        </div>

        <div className="grid gap-3">
          {exampleQueries.map((query) => (
            <button
              key={query}
              className="text-left p-4 rounded-lg border hover:bg-gray-50 transition-colors"
            >
              {query}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
};
export default MessageList;