"use client"

import React from 'react';
import Sidebar from '@/components/sidebar/Sidebar';
import ChatArea from '@/components/chat/ChatArea';

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <ChatArea />
    </div>
  );
};

export default MainLayout;