'use client';

import React from 'react';
import { usePromptWizard } from '@/lib/store';

// Coding standards constant - extracted for maintainability
const CODING_STANDARDS = `
## Coding Standards

Use these standards when writing code. Keep it practical and maintainable.

### Core Principles
- **Readability > Cleverness** - Future you will thank present you
- **Consistency > Perfection** - Pick a style, stick to it
- **Simple > Complex** - Use the simplest solution that works
- **Make it work, then make it right** - Ship and iterate

### Naming Conventions
- Use descriptive names: \`getUserData()\` not \`getData()\`
- Booleans start with is/has/can: \`isActive\`, \`hasPermission\`
- Be consistent with camelCase or snake_case per language
- Files match their content: \`userService.js\`, \`string_utils.py\`
- Classes use PascalCase: \`UserManager\`

### Code Organization
- One main responsibility per function (< 50 lines ideal)
- Group related code together, separate concerns with folders/modules
- Import order: standard library → third-party → your code
- Keep project structure clean: src/, tests/, docs/, config/

### Comments & Documentation
**DO comment:** Why you made non-obvious decisions, workarounds, complex logic
**DON'T comment:** What code obviously does, or leave commented-out code
**README must have:** What it does, how to run it, key dependencies

### Error Handling
- Validate inputs early, fail fast
- Log errors meaningfully: \`console.error('Failed to process data:', e)\`
- Don't catch errors just to rethrow them

### Code Hygiene
- Extract repeated code into functions (DRY principle)
- Replace magic numbers with named constants: \`LEGAL_AGE = 18\`
- Delete unused code, imports, and variables - trust version control

### Version Control
**Commits:** Use format \`type: brief description\`
- Types: feat, fix, refactor, docs, style, test
- Examples: \`feat: add user auth\`, \`fix: resolve memory leak\`
- Commit small and often, one logical change per commit

**Branches:** main (stable) → dev (active) → feature/thing (new work)

### Testing
- Test critical logic, bug fixes, and complex algorithms
- Name tests descriptively: \`test('returns empty array when no users exist')\`

### Security
- Never commit API keys, passwords, or secrets (use env variables)
- Validate and sanitize all user input
- Use parameterized queries for databases

### Language-Specific
**Python:** Use venvs, follow PEP 8, type hints for public functions, f-strings
**JavaScript:** Use const/let (never var), async/await over .then(), arrow functions for callbacks
**All languages:** Use your language's formatter (Black, Prettier, etc.)

### When to Break Rules
Break these when you have a good reason, you're prototyping, or the alternative is worse. Just be intentional about it.
`;

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

    // Add Coding Standards section
    parts.push(CODING_STANDARDS);
    parts.push('');

    // Closing reminder
    parts.push('---\n');
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