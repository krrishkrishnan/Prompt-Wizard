# Prompt Wizard - Project Status & Implementation Guide

**Last Updated:** November 16, 2025  
**Project:** Prompt Wizard Application Generator  
**Status:** ✅ Running (localhost:3001)

---

## 📋 Project Overview

**Prompt Wizard** is a web application that helps users create comprehensive application specifications by filling out a structured 7-section form. The application generates a master prompt that can be sent to AI agents for planning and architecture design.

### Core Purpose
- Guide users through a structured process to define their application requirements
- Generate a comprehensive master prompt for AI planning (before any coding)
- Include machine environment context (MacBook + Chrome)
- Emphasis on architecture planning before implementation

---

## 🏗️ Architecture & Tech Stack

### Frontend Stack
- **Framework:** Next.js 15.5.6 with App Router
- **UI Library:** React 18.3.0
- **Language:** TypeScript 5.4
- **Styling:** Tailwind CSS 3.4.13
- **State Management:** Zustand 4.4.0
- **HTTP Client:** React Query (TanStack)
- **Authentication:** NextAuth.js 4.24.10 (optional, not gating access)

### Backend Stack
- **Database ORM:** Prisma 5.8.0
- **Database:** PostgreSQL (configured but optional)
- **API:** Next.js API Routes

### Development Tools
- **Package Manager:** npm
- **Version Control:** Git
- **Environment:** Node.js with TypeScript

---

## 📁 Project Structure

```
/Users/krrishkrishnan/Desktop/Prompt-Wizard-1/
├── app/
│   ├── page.tsx                 # Main wizard layout (2-column form + preview)
│   ├── layout.tsx               # Root layout with metadata
│   ├── globals.css              # Global Tailwind styles
│   └── api/
│       └── auth/[...nextauth]/  # NextAuth configuration
├── components/
│   ├── FormSection.tsx          # Dynamic form fields (7 sections)
│   ├── WizardNavigation.tsx      # Tab navigation + progress bar
│   ├── MasterPromptGenerator.tsx # Prompt compilation & copy
│   └── ProtectedRoute.tsx        # Auth wrapper (optional)
├── lib/
│   ├── store.ts                 # Zustand state management
│   └── auth.ts                  # NextAuth config
├── prisma/
│   └── schema.prisma            # Database schema
├── public/                       # Static assets
├── .env.example                 # Environment variables template
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript config
├── tailwind.config.js           # Tailwind config
├── next.config.js               # Next.js config
└── PROJECT_STATUS.md            # This file
```

---

## 🎯 Form Structure (7 Sections)

### Section 1: Application Title
- **Field:** Application Title
- **Purpose:** Name of the application
- **Example Input:** "Task Management Dashboard"

### Section 2: Purpose & Description
- **Fields:** 
  - Purpose (single line)
  - High-Level Description (large text area)
- **Purpose:** Define main purpose and what users can do
- **Example Input:** 
  - Purpose: "Help teams manage and track projects efficiently"
  - Description: "Enable teams to create projects, add tasks, set priorities, track progress..."

### Section 3: Look & Feel
- **Fields:**
  - Look & Feel (visual design style)
  - Color Scheme (palette and styling)
- **Purpose:** Describe visual design and appearance
- **Example Input:**
  - Look & Feel: "Modern, minimalist with focus on usability"
  - Color Scheme: "Blue and white theme with accent colors"

### Section 4: UI Elements Required
- **Field:** UI Elements (large text area)
- **Purpose:** List all UI components needed
- **Example Input:** "Navigation bar, sidebar, buttons, forms, cards, modals, tables, filters"

### Section 5: User Flows
- **Field:** User Flows (large text area)
- **Purpose:** Describe how users navigate through application
- **Example Input:** "Login → Dashboard → Create Project → Add Tasks → View Reports"

### Section 6: User Inputs
- **Fields:**
  - User Inputs (what users provide)
  - Input Examples (realistic examples)
- **Purpose:** Define user input requirements
- **Example Input:**
  - Inputs: "Project name, task description, due dates, priority levels"
  - Examples: "Project: 'Website Redesign', Task: 'Design homepage', Due: '2025-01-15'"

### Section 7: Actions & Data Processing
- **Fields:**
  - Actions (what users can do)
  - Data Processing & Rules (how data is processed)
- **Purpose:** Define interactions and business logic
- **Example Input:**
  - Actions: "Create, edit, delete, archive, filter, sort, search, export"
  - Rules: "Validate inputs, auto-calculate timelines, send notifications on updates"

---

## 🔧 State Management (Zustand)

### Store Location
`lib/store.ts`

### Form State Interface
```typescript
PromptFormState {
  // Section 1
  applicationTitle: string;
  
  // Section 2
  purpose: string;
  highLevelDescription: string;
  
  // Section 3
  lookAndFeel: string;
  colorScheme: string;
  
  // Section 4
  uiElements: string;
  
  // Section 5
  userFlows: string;
  
  // Section 6
  userInputs: string;
  inputExamples: string;
  
  // Section 7
  actions: string;
  dataProcessing: string;
  
  // Metadata
  promptName: string;
  currentSection: number;
}
```

### Store Methods
- `updateField(field, value)` - Update form field
- `setCurrentSection(section)` - Switch active section
- `resetForm()` - Clear all form data
- `getFormData()` - Get current form state
- `loadFormData(data)` - Load saved form data

### Hook Usage
```typescript
const { purpose, updateField, currentSection } = usePromptWizard();
```

---

## 🎨 Components

### 1. FormSection.tsx
**Location:** `components/FormSection.tsx`

**Purpose:** Renders form fields for the active section

**Features:**
- Dynamic section rendering (7 cases in switch statement)
- Text inputs for single-line fields
- Textareas for large text fields
- Hint text for guidance
- Form validation helpers

**Key Code:**
```typescript
const renderFields = () => {
  switch (currentSection) {
    case 0: // Application Title
    case 1: // Purpose & Description
    case 2: // Look & Feel
    case 3: // UI Elements
    case 4: // User Flows
    case 5: // User Inputs
    case 6: // Actions & Data Processing
    default: return null;
  }
};
```

### 2. WizardNavigation.tsx
**Location:** `components/WizardNavigation.tsx`

**Purpose:** Tab-based navigation with progress tracking

**Features:**
- 7 section buttons (Title, Purpose, Look & Feel, UI Elements, User Flows, User Inputs, Actions & Data)
- Dynamic progress bar (width = (currentSection + 1) / 7 * 100%)
- Progress counter (e.g., "3 of 7")
- Active section highlighting

**Key Code:**
```typescript
const SECTIONS = [
  'Title',
  'Purpose',
  'Look & Feel',
  'UI Elements',
  'User Flows',
  'User Inputs',
  'Actions & Data',
];
```

### 3. MasterPromptGenerator.tsx
**Location:** `components/MasterPromptGenerator.tsx`

**Purpose:** Compiles form sections into coherent master prompt

**Features:**
- Header instruction block (planning before coding)
- Conditional section rendering
- Markdown formatting with ## headers
- Machine environment context (MacBook + Chrome)
- Footer reminder about planning approval
- Copy to clipboard functionality
- Real-time preview updates

**Generated Prompt Structure:**
```
Here is a description for an application I need you to create. 
Please think of the right implementation, architecture, 
dependencies and resources needed and propose a plan...

# [Application Title]

## Purpose & Overview
**Purpose:** [Purpose]
**Description:** [High-Level Description]

## Look & Feel
**Visual Design:** [Look & Feel]
**Color Scheme:** [Color Scheme]

## UI Elements Required
[UI Elements]

## User Flows
[User Flows]

## User Inputs
[User Inputs]
**Examples:** [Input Examples]

## Actions & Data Processing
**User Actions:** [Actions]
**Data Processing & Rules:** [Data Processing]

Machine used to run this app: I'm using a Macbook and Google Chrome, 
both updated to the latest version

As a reminder, your task is to think of the right implementation, 
architecture, dependencies and resources needed and propose a plan...
```

### 4. app/page.tsx
**Location:** `app/page.tsx`

**Purpose:** Main layout combining all components

**Features:**
- 2-column layout on desktop (form + preview)
- Single column on mobile
- Prompt name input field
- WizardNavigation component
- FormSection component
- MasterPromptGenerator preview (sticky on desktop)

**Layout:**
```
┌─────────────────────────────────────────────────────┐
│          WizardNavigation (7 tabs)                  │
│          Progress bar                               │
├──────────────────────┬────────────────────────────┐
│   Form Section       │  Master Prompt Preview     │
│   (FormSection)      │  (MasterPromptGenerator)   │
│                      │  [Copy Button]             │
│                      │  [Generated Prompt]        │
└──────────────────────┴────────────────────────────┘
```

---

## 🚀 Running the Application

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- MacBook with Google Chrome (as per prompt context)

### Installation & Setup
```bash
cd /Users/krrishkrishnan/Desktop/Prompt-Wizard-1
npm install
```

### Start Development Server
```bash
npm run dev
```

**Output:**
```
   ▲ Next.js 15.5.6
   - Local:        http://localhost:3001
   - Network:      http://192.168.6.44:3001
   ✓ Ready in 2.9s
```

### Access the Application
- **Local:** http://localhost:3000 (or :3001 if port in use)
- **Network:** http://192.168.6.44:3000

---

## 💾 Data Flow

### 1. User Fills Form
```
User Input → FormSection Component → updateField()
```

### 2. State Updates (Zustand)
```
updateField('purpose', value) → Store State Updated → Components Re-render
```

### 3. All Components Sync
```
WizardNavigation reads currentSection
FormSection reads form fields for currentSection
MasterPromptGenerator reads entire getFormData() and generates prompt
```

### 4. Prompt Generation
```
Form Data → generateMasterPrompt() → Markdown String → Display Preview
```

### 5. Copy to Clipboard
```
Copy Button → navigator.clipboard.writeText() → Alert Confirmation
```

---

## ✨ Key Features Implemented

### ✅ Sprint 1: Foundation Setup
- [x] Next.js 15 with App Router
- [x] TypeScript strict mode
- [x] Tailwind CSS with custom brand colors
- [x] Prisma ORM + PostgreSQL schema
- [x] NextAuth.js configuration
- [x] Environment configuration

### ✅ Sprint 2: Multi-Section Form Builder
- [x] 7-section form wizard
- [x] Zustand state management
- [x] Tab-based navigation
- [x] Progress tracking
- [x] Form field validation hints
- [x] Large and small text inputs
- [x] State persistence across sections

### ✅ Sprint 3: Master Prompt Generator
- [x] Prompt compilation from form sections
- [x] Real-time preview
- [x] Markdown formatting
- [x] Copy to clipboard functionality
- [x] Header instruction block (planning before coding)
- [x] Footer with environment context
- [x] Conditional section rendering

### ⏳ Sprint 4: Prompt Templates (Not Started)
- [ ] Pre-built templates (API docs, tool creation, etc.)
- [ ] Template library UI
- [ ] Template customization

### ⏳ Sprint 5: AI Refinement (Optional, Not Started)
- [ ] OpenAI API integration
- [ ] Prompt improvement suggestions
- [ ] Quality scoring

### ⏳ Sprint 6: Prompt Management (Not Started)
- [ ] Save prompts to database
- [ ] Load/edit saved prompts
- [ ] Version history
- [ ] Search and filter

### ⏳ Sprint 7: Testing & Deployment (Not Started)
- [ ] Unit tests
- [ ] E2E tests
- [ ] Production build optimization
- [ ] Vercel deployment

---

## 🔐 Authentication (Optional)

**Status:** Configured but not required to access form

### Current Setup
- NextAuth.js with JWT strategy
- No Prisma adapter (simplified config)
- Authentication optional for form access
- Can be enabled later for saving/loading prompts

### Why Optional?
User requested form-first approach without auth barrier - users can immediately generate prompts without creating accounts

---

## 📊 File Changes Summary

### Core Application Files
| File | Status | Purpose |
|------|--------|---------|
| `lib/store.ts` | ✅ Complete | Zustand state management (13 form fields) |
| `components/FormSection.tsx` | ✅ Complete | 7-section form rendering |
| `components/WizardNavigation.tsx` | ✅ Complete | Tab navigation + progress bar |
| `components/MasterPromptGenerator.tsx` | ✅ Complete | Prompt generation + copy feature |
| `app/page.tsx` | ✅ Complete | Main layout (2-column: form + preview) |
| `app/layout.tsx` | ✅ Complete | Root layout with metadata |
| `app/globals.css` | ✅ Complete | Tailwind styles + custom classes |

### Configuration Files
| File | Status | Purpose |
|------|--------|---------|
| `tailwind.config.js` | ✅ Complete | Brand colors: `brand-500`, `brand-600` |
| `tsconfig.json` | ✅ Complete | TypeScript strict mode enabled |
| `next.config.js` | ✅ Complete | Next.js 15 configuration |
| `package.json` | ✅ Complete | Dependencies (780 packages) |

---

## 🐛 Known Issues & Resolutions

### Issue 1: Tailwind Plugin Errors
**Error:** `Cannot find module '@tailwindcss/forms'`
**Resolution:** Removed non-existent plugins from `tailwind.config.js` → `plugins: []`

### Issue 2: NextAuth Adapter Missing
**Error:** `Can't resolve '@auth/prisma-adapter'`
**Resolution:** Switched to JWT strategy, removed Prisma adapter dependency

### Issue 3: React Version Conflict
**Error:** `@headlessui/react requires React ^16 || ^17 || ^18`
**Resolution:** Downgraded React from ^19.0.0 to ^18.3.0

### Issue 4: Port 3000 In Use
**Solution:** Next.js auto-falls back to :3001 when :3000 is occupied

### Issue 5: Old Form Cases Still Referenced
**Error:** `ReferenceError: goal is not defined`
**Resolution:** Cleared `.next` cache and restarted dev server to pick up new form sections

---

## 📝 Master Prompt Features

### Header Block
```
Here is a description for an application I need you to create. 
Please think of the right implementation, architecture, 
dependencies and resources needed and propose a plan. 
Do not include any time estimations in your proposed plan. 
You must NOT start coding and creating files until the user 
has approved your plan.
```

**Purpose:** Instruct AI to focus on planning/architecture before implementation

### Closing Block
```
Machine used to run this app: I'm using a Macbook and Google Chrome, 
both updated to the latest version

As a reminder, your task is to think of the right implementation, 
architecture, dependencies and resources needed and propose a plan. 
Do not include any time estimations in your proposed plan. 
You must NOT start coding and creating files until the user 
has approved your plan.
```

**Purpose:** 
- Provide environment context for AI
- Reinforce planning-first approach
- Prevent premature implementation

---

## 🎓 How to Use the Application

### Step 1: Fill Application Title
Enter the name of your application (e.g., "Task Management Dashboard")

### Step 2: Add Purpose & Description
- Provide the main purpose
- Write a comprehensive description of what users can do

### Step 3: Define Look & Feel
- Describe visual style (modern, minimalist, etc.)
- Specify color scheme and design approach

### Step 4: List UI Elements
List all required UI components:
- Navigation bar, buttons, forms, cards, modals, tables, etc.

### Step 5: Outline User Flows
Describe how users navigate:
- "Login → Dashboard → Create Project → Add Tasks → View Reports"

### Step 6: Specify User Inputs
- What inputs will users provide?
- Include realistic examples

### Step 7: Define Actions & Data Processing
- What can users do? (Create, edit, delete, etc.)
- How is data processed? (Validation, calculations, notifications)

### Step 8: Review Generated Prompt
- See real-time preview on the right
- Click "Copy" to copy entire prompt to clipboard

### Step 9: Send to AI Agent
- Paste the prompt into your AI (ChatGPT, Claude, etc.)
- AI will propose architecture and plan
- Review plan and get approval before building

---

## 🔄 Development Workflow

### Making Changes
1. Edit component or store file
2. Save changes
3. Next.js hot-reload automatically updates browser
4. Check for TypeScript errors in terminal

### Testing
```bash
# Check for TypeScript errors
npx tsc --noEmit

# Check for build errors
npm run build
```

### Building for Production
```bash
npm run build
npm start
```

---

## 📦 Dependencies

### Core Dependencies (Key packages)
- next@15.5.6
- react@18.3.0
- typescript@5.4.0
- zustand@4.4.0
- @headlessui/react@1.7.18
- tailwindcss@3.4.13
- prisma@5.8.0
- next-auth@4.24.10

### Development Dependencies
- @types/node, @types/react, etc.
- autoprefixer
- postcss

**Total Installed:** 780 packages

---

## 🚀 Next Steps (Not Yet Implemented)

### Priority 1: Template Library (Sprint 4)
- Create pre-built templates for common use cases
- Examples: API Documentation, Tool Creation, Agent System Prompt
- Allow users to load template and customize

### Priority 2: Database Persistence (Sprint 6)
- Save form data to PostgreSQL
- Load previously saved prompts
- Version history tracking

### Priority 3: Export Formats (Sprint 3 Enhancement)
- Export as JSON
- Export as plain text
- Export as PDF

### Priority 4: AI Suggestions (Sprint 5)
- OpenAI integration to refine prompts
- Quality scoring based on completeness
- Auto-suggestions for missing fields

---

## 🎯 Success Metrics

✅ **Form Functionality:** All 7 sections working, state syncing correctly  
✅ **Prompt Generation:** Master prompt includes all required elements + headers/footers  
✅ **User Experience:** Clean UI, 2-column layout, responsive design  
✅ **Development:** TypeScript strict mode, hot-reload working, no build errors  
✅ **Architecture:** Zustand for state, modular components, separation of concerns  

---

## 📞 Support & Debugging

### Common Issues & Solutions

**Q: Form fields not updating?**
- Check Zustand hook usage: `const { field } = usePromptWizard()`
- Verify `updateField()` call: `updateField('fieldName', value)`

**Q: Prompt not generating?**
- Ensure form fields have values
- Check MasterPromptGenerator.tsx for conditional rendering
- Verify `getFormData()` returns all fields

**Q: Port already in use?**
- Next.js automatically falls back to :3001
- Or manually kill process: `pkill -f "next dev"`

**Q: TypeScript errors?**
- Verify field names match PromptFormState interface
- Check component prop types (FormFieldProps)
- Run: `npx tsc --noEmit`

---

## 📄 Document Metadata

- **Created:** November 16, 2025
- **Last Updated:** November 16, 2025
- **Project:** Prompt Wizard
- **Version:** 1.0 (Sprint 1-3 Complete)
- **Status:** ✅ Production Ready (Core Features)
- **Next Milestone:** Sprint 4 - Template Library

---

**Ready to generate application specifications and send to AI agents for planning! 🚀**
