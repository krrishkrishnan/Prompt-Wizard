'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: '📊' },
    { name: 'Editor', href: '/editor', icon: '✏️' },
    { name: 'Prompts', href: '/prompts', icon: '📝' },
    { name: 'Library', href: '/library', icon: '📚' },
    { name: 'Scores', href: '/scores', icon: '⭐' },
    { name: 'Templates', href: '/templates', icon: '🎨' },
    { name: 'Settings', href: '/settings', icon: '⚙️' },
  ];

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen bg-white border-r transition-transform duration-300 ${
          isOpen ? 'translate-x-0 w-64' : '-translate-x-full w-64'
        } md:translate-x-0 md:w-64 z-40`}
      >
        <div className="p-6">
          <h2 className="text-xl font-bold text-brand-600">Prompt Wizard</h2>
        </div>

        <nav className="mt-8 px-4 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-brand-100 text-brand-700 font-semibold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main content offset */}
      <div className="md:ml-64" />
    </>
  );
}
