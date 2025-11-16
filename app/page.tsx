'use client';

import React from 'react';
import { WizardNavigation } from '@/components/WizardNavigation';
import { FormSection } from '@/components/FormSection';
import { MasterPromptGenerator } from '@/components/MasterPromptGenerator';
import { ThemeToggle } from '@/components/ThemeToggle';
import { usePromptWizard } from '@/lib/store';

export default function Home() {
  const promptName = usePromptWizard((state) => state.promptName);
  const setPromptName = (name: string) => {
    usePromptWizard.setState({ promptName: name });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold text-brand-600 mb-2">Prompt Wizard</h1>
            <p className="text-gray-600 dark:text-gray-400">Build comprehensive prompts for AI agents and tools</p>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Navigation */}
      <WizardNavigation />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow dark:shadow-lg p-6 dark:border dark:border-gray-800 transition-colors">
              {/* Prompt Name */}
              <div className="mb-8">
                <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-gray-100">Prompt Name</label>
                <input
                  type="text"
                  value={promptName}
                  onChange={(e) => setPromptName(e.target.value)}
                  placeholder="e.g., API Documentation Generator"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>

              {/* Form Section */}
              <FormSection />
            </div>
          </div>

          {/* Right: Preview */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow dark:shadow-lg p-6 sticky top-4 dark:border dark:border-gray-800 transition-colors">
              <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">Preview</h2>
              <MasterPromptGenerator />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-12 transition-colors">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>Build powerful prompts for AI agents, tools, and automation</p>
        </div>
      </footer>
    </main>
  );
}
