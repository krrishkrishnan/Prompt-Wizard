'use client';

import React from 'react';
import { usePromptWizard } from '@/lib/store';

const SECTIONS = [
  'Title',
  'Purpose',
  'Look & Feel',
  'UI Elements',
  'User Flows',
  'User Inputs',
  'Actions & Data',
];

export function WizardNavigation() {
  const currentSection = usePromptWizard((state) => state.currentSection);
  const setCurrentSection = usePromptWizard((state) => state.setCurrentSection);

  return (
    <div className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Progress</h3>
            <span className="text-xs text-gray-600 dark:text-gray-400">
              {currentSection + 1} of {SECTIONS.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 transition-colors">
            <div
              className="bg-brand-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentSection + 1) / SECTIONS.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Section Tabs */}
        <div className="flex flex-wrap gap-2">
          {SECTIONS.map((section, index) => (
            <button
              key={index}
              onClick={() => setCurrentSection(index)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentSection === index
                  ? 'bg-brand-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
