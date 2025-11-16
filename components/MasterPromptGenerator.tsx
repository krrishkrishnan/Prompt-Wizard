'use client';

import React from 'react';
import { usePromptWizard } from '@/lib/store';

export function MasterPromptGenerator() {
  const formData = usePromptWizard((state) => state.getFormData());

  const generateMasterPrompt = (): string => {
    const parts: string[] = [];

    // Introduction
    parts.push('Here is a description for an application I need you to create. Please think of the right implementation, architecture, dependencies and resources needed and propose a plan. Do not include any time estimations in your proposed plan. You must NOT start coding and creating files until the user has approved your plan.\n');
    parts.push('');

    // Title
    if (formData.applicationTitle) {
      parts.push(`# ${formData.applicationTitle}\n`);
    }

    // Purpose & Description
    if (formData.purpose || formData.highLevelDescription) {
      parts.push('## Purpose & Overview\n');
      if (formData.purpose) {
        parts.push(`**Purpose:** ${formData.purpose}\n`);
      }
      if (formData.highLevelDescription) {
        parts.push(`\n**Description:**\n${formData.highLevelDescription}\n`);
      }
      parts.push('');
    }

    // Look & Feel
    if (formData.lookAndFeel || formData.colorScheme) {
      parts.push('## Look & Feel\n');
      if (formData.lookAndFeel) {
        parts.push(`**Visual Design:**\n${formData.lookAndFeel}\n`);
      }
      if (formData.colorScheme) {
        parts.push(`\n**Color Scheme:**\n${formData.colorScheme}\n`);
      }
      parts.push('');
    }

    // UI Elements
    if (formData.uiElements) {
      parts.push('## UI Elements Required\n');
      parts.push(`${formData.uiElements}\n\n`);
    }

    // User Flows
    if (formData.userFlows) {
      parts.push('## User Flows\n');
      parts.push(`${formData.userFlows}\n\n`);
    }

    // User Inputs
    if (formData.userInputs || formData.inputExamples) {
      parts.push('## User Inputs\n');
      if (formData.userInputs) {
        parts.push(`${formData.userInputs}\n`);
      }
      if (formData.inputExamples) {
        parts.push(`\n**Examples:**\n${formData.inputExamples}\n`);
      }
      parts.push('');
    }

    // Actions & Data Processing
    if (formData.actions || formData.dataProcessing) {
      parts.push('## Actions & Data Processing\n');
      if (formData.actions) {
        parts.push(`**User Actions:**\n${formData.actions}\n`);
      }
      if (formData.dataProcessing) {
        parts.push(`\n**Data Processing & Rules:**\n${formData.dataProcessing}\n`);
      }
      parts.push('');
    }

    // Closing reminder
    parts.push('Machine used to run this app: I\'m using a Macbook and Google Chrome, both updated to the latest version\n');
    parts.push('');
    parts.push('As a reminder, your task is to think of the right implementation, architecture, dependencies and resources needed and propose a plan. Do not include any time estimations in your proposed plan. You must NOT start coding and creating files until the user has approved your plan.');

    return parts.join('\n').trim();
  };

  const masterPrompt = generateMasterPrompt();

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Generated Master Prompt</h3>
        <button
          onClick={() => {
            navigator.clipboard.writeText(masterPrompt);
            alert('Copied to clipboard!');
          }}
          className="px-4 py-2 bg-brand-500 text-white rounded-lg text-sm font-medium hover:bg-brand-600 transition-colors"
        >
          📋 Copy
        </button>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 font-mono text-sm overflow-auto max-h-96 transition-colors">
        <pre className="whitespace-pre-wrap break-words text-gray-800 dark:text-gray-200">{masterPrompt}</pre>
      </div>

      {!masterPrompt.trim() && (
        <p className="text-center text-gray-500 dark:text-gray-400 py-8">
          Fill in the form sections to generate your master prompt
        </p>
      )}
    </div>
  );
}
