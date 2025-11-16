'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from '@/lib/theme-provider';

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l-2.121 2.121a1 1 0 01-1.414 0l-2.121-2.121a1 1 0 011.414-1.414L9 10.586l1.464-1.465a1 1 0 011.414 1.414zM2.05 6.464l2.121-2.121a1 1 0 011.414 0l2.121 2.121a1 1 0 01-1.414 1.414L3.464 7.05a1 1 0 010-1.414zm12.728 5.657l-2.121 2.121a1 1 0 01-1.414 0l2.121-2.121a1 1 0 011.414 0zM8.464 2.05l2.121 2.121a1 1 0 01-1.414 1.414L7.05 3.464a1 1 0 011.414-1.414zM3.536 15.464l2.121-2.121a1 1 0 011.414 1.414l-2.121 2.121a1 1 0 01-1.414-1.414z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
}

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        disabled
        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 opacity-50 cursor-not-allowed"
        aria-label="Toggle theme"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </button>
    );
  }

  return <ThemeToggleButton />;
}
