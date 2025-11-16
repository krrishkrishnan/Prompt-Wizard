'use client';

import React from 'react';
import { usePromptWizard } from '@/lib/store';

const SECTIONS = [
  {
    id: 0,
    title: 'Application Title',
    description: 'What is your application called?',
    fields: ['applicationTitle'],
  },
  {
    id: 1,
    title: 'Purpose & Description',
    description: 'Define the purpose and high-level description',
    fields: ['purpose', 'highLevelDescription'],
  },
  {
    id: 2,
    title: 'Look & Feel',
    description: 'Describe the visual design and appearance',
    fields: ['lookAndFeel', 'colorScheme'],
  },
  {
    id: 3,
    title: 'UI Elements Required',
    description: 'What UI components and elements are needed?',
    fields: ['uiElements'],
  },
  {
    id: 4,
    title: 'User Flows',
    description: 'Describe how users navigate through the application',
    fields: ['userFlows'],
  },
  {
    id: 5,
    title: 'User Inputs',
    description: 'What inputs will users provide?',
    fields: ['userInputs', 'inputExamples'],
  },
  {
    id: 6,
    title: 'Actions & Data Processing',
    description: 'What actions are taken on user inputs and how is data processed?',
    fields: ['actions', 'dataProcessing'],
  },
];

export function FormSection() {
  const currentSection = usePromptWizard((state) => state.currentSection);
  const applicationTitle = usePromptWizard((state) => state.applicationTitle);
  const purpose = usePromptWizard((state) => state.purpose);
  const highLevelDescription = usePromptWizard((state) => state.highLevelDescription);
  const lookAndFeel = usePromptWizard((state) => state.lookAndFeel);
  const colorScheme = usePromptWizard((state) => state.colorScheme);
  const uiElements = usePromptWizard((state) => state.uiElements);
  const userFlows = usePromptWizard((state) => state.userFlows);
  const userInputs = usePromptWizard((state) => state.userInputs);
  const inputExamples = usePromptWizard((state) => state.inputExamples);
  const actions = usePromptWizard((state) => state.actions);
  const dataProcessing = usePromptWizard((state) => state.dataProcessing);
  const updateField = usePromptWizard((state) => state.updateField);

  const section = SECTIONS[currentSection];

  const renderFields = () => {
    switch (currentSection) {
      case 0: // Application Title
        return (
          <div className="space-y-6">
            <FormField
              label="Application Title"
              placeholder="e.g., Task Management Dashboard"
              value={applicationTitle}
              onChange={(value) => updateField('applicationTitle', value)}
              hint="What is the name of the application you want to build?"
            />
          </div>
        );
      case 1: // Purpose & Description
        return (
          <div className="space-y-6">
            <FormField
              label="Purpose"
              placeholder="What is the main purpose of this application?"
              value={purpose}
              onChange={(value) => updateField('purpose', value)}
              hint="e.g., Help teams manage and track projects efficiently"
            />
            <FormField
              label="High-Level Description"
              placeholder="Provide a comprehensive description of what users can do"
              value={highLevelDescription}
              onChange={(value) => updateField('highLevelDescription', value)}
              hint="Describe the key features and capabilities from a user's perspective"
              isLarge
            />
          </div>
        );
      case 2: // Look & Feel
        return (
          <div className="space-y-6">
            <FormField
              label="Look & Feel"
              placeholder="Describe the visual design and user interface style"
              value={lookAndFeel}
              onChange={(value) => updateField('lookAndFeel', value)}
              hint="e.g., Modern, minimalist, professional, colorful, dark mode"
              isLarge
            />
            <FormField
              label="Color Scheme"
              placeholder="Describe the color palette and styling"
              value={colorScheme}
              onChange={(value) => updateField('colorScheme', value)}
              hint="e.g., Blue and white theme, dark background with accent colors"
            />
          </div>
        );
      case 3: // UI Elements Required
        return (
          <div className="space-y-6">
            <FormField
              label="UI Elements"
              placeholder="List all UI components and elements needed"
              value={uiElements}
              onChange={(value) => updateField('uiElements', value)}
              hint="e.g., Navigation bar, sidebar, buttons, forms, cards, modals, tables"
              isLarge
            />
          </div>
        );
      case 4: // User Flows
        return (
          <div className="space-y-6">
            <FormField
              label="User Flows"
              placeholder="Describe how users navigate through the application"
              value={userFlows}
              onChange={(value) => updateField('userFlows', value)}
              hint="e.g., Login → Dashboard → Create Project → Add Tasks → View Reports"
              isLarge
            />
          </div>
        );
      case 5: // User Inputs
        return (
          <div className="space-y-6">
            <FormField
              label="User Inputs"
              placeholder="What inputs will users provide?"
              value={userInputs}
              onChange={(value) => updateField('userInputs', value)}
              hint="e.g., Project name, task description, due dates, priority levels"
              isLarge
            />
            <FormField
              label="Input Examples"
              placeholder="Provide examples of typical user inputs"
              value={inputExamples}
              onChange={(value) => updateField('inputExamples', value)}
              hint="Provide realistic examples of how users will interact with the form"
              isLarge
            />
          </div>
        );
      case 6: // Actions & Data Processing
        return (
          <div className="space-y-6">
            <FormField
              label="Actions"
              placeholder="What actions can users take?"
              value={actions}
              onChange={(value) => updateField('actions', value)}
              hint="e.g., Create, edit, delete, archive, filter, sort, search, export"
              isLarge
            />
            <FormField
              label="Data Processing & Rules"
              placeholder="How is user data processed and what rules apply?"
              value={dataProcessing}
              onChange={(value) => updateField('dataProcessing', value)}
              hint="e.g., Validation rules, automatic calculations, real-time updates, notifications"
              isLarge
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">{section.title}</h2>
        <p className="text-gray-600 dark:text-gray-400">{section.description}</p>
      </div>

      {/* Form Fields */}
      <div className="space-y-6">{renderFields()}</div>
    </div>
  );
}

interface FormFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  hint?: string;
  isLarge?: boolean;
  isCode?: boolean;
}

function FormField({
  label,
  placeholder,
  value,
  onChange,
  hint,
  isLarge,
  isCode,
}: FormFieldProps) {
  const inputClass =
    'w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-sans transition-colors placeholder-gray-500 dark:placeholder-gray-400';

  return (
    <div>
      <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-gray-100">{label}</label>
      {isLarge ? (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${inputClass} h-40 resize-none ${isCode ? 'font-mono text-sm' : ''}`}
        />
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={inputClass}
        />
      )}
      {hint && <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{hint}</p>}
    </div>
  );
}
