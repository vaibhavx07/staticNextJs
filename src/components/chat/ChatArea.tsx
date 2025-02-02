"use client"
import React from 'react';
import Header from './Header';
import MessageList from './MessageList';
import InputArea from './InputArea';

const ChatArea = () => {
  return (
    <div className="flex-1 flex flex-col">
      <Header />
      <MessageList />
      <InputArea />
    </div>
  );
};

export default ChatArea;