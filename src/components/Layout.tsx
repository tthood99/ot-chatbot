import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, ChatBubbleLeftRightIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home', icon: HomeIcon },
    { path: '/chat', label: 'Chat', icon: ChatBubbleLeftRightIcon },
    { path: '/feedback', label: 'Feedback', icon: ChatBubbleBottomCenterTextIcon },
  ];

  return (
    <div className="w-screen h-screen">
      <nav className="bg-white shadow-sm">
        <div className="w-full h-16 flex justify-between">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-indigo-600">OT Chatbot</span>
            </div>
            <div className="flex space-x-8">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`inline-flex items-center border-b-2 text-sm font-medium ${
                    isActive(path)
                      ? 'border-indigo-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  <Icon className="h-4 w-4 mr-1" />
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="w-full h-full">
        {children}
      </main>
    </div>
  );
};

export default Layout;
