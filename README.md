# Prompt Wizard 🧙‍♂️

**A web application for creating comprehensive application specifications through a guided 7-section form. Generate master prompts for AI agents to plan and architect your applications.**

Visit: `http://localhost:3000`

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm package manager

### Installation
```bash
git clone <repository-url>
cd Prompt-Wizard-1
npm install
```

### Start Development Server
```bash
npm run dev
```

The app will open at `http://localhost:3000` with hot-reload enabled.

---

## 📋 How to Use This Tool

### Step 1: Fill Out Each Section
Navigate through the 7 form sections using the tabs on the left:

1. **Application Title** — What's your app called?
2. **Purpose & Description** — What does it do? Why build it?
3. **Look & Feel** — Visual style, colors, design direction
4. **UI Elements Required** — Buttons, modals, inputs, lists, etc.
5. **User Flows** — How do users navigate through the app?
6. **User Inputs** — What data do users provide?
7. **Actions & Data Processing** — What happens when users interact? How is data handled?

### Step 2: Watch the Master Prompt Update
- Live preview on the right side shows your generated prompt
- Updates in real-time as you fill in sections
- Header reminds AI to plan before coding
- Footer includes environment context (MacBook + Chrome)

### Step 3: Copy & Share
- Click **Copy Prompt** button to copy entire prompt
- Paste into Claude, ChatGPT, or your preferred AI
- Use in any AI tool for application planning

### Step 4: Get Architecture Plan
- Share prompt with AI to get architecture recommendations
- AI will suggest tech stack, database design, API structure
- Review plan before building

### Example Workflow
```
1. Open http://localhost:3000
2. Fill "Todo App" in Application Title
3. Describe: "Simple task management app"
4. Choose: "Clean, minimal design"
5. List: "Input field, add button, todo list, delete button"
6. Explain: "User types task, clicks Add, sees in list, can delete"
7. Define: "Task text input (string), completed checkbox (boolean)"
8. Explain: "Add action saves to DB, delete removes from list"
9. Copy prompt → Paste into ChatGPT
10. Get AI-suggested architecture
```

---

## ✨ Features

### ✅ Implemented
- **7-Section Form Builder** - All form fields for app specification
- **Zustand State Management** - Form data synced across sections
- **Live Master Prompt Generation** - Real-time preview of compiled prompt
- **Light/Dark Mode** - Toggle in header, persists to localStorage
- **Copy to Clipboard** - One-click prompt copying
- **Responsive Design** - Works on mobile & desktop
- **TypeScript** - Full type safety throughout

### ⏳ Coming Soon
- Save to database - Persist your specs
- Template library - Pre-built templates for common apps
- Export formats - Download as JSON, Markdown, PDF
- AI refinement - Suggestions via OpenAI API

---

## 🎯 Form Fields Explained

| Section | Fields | Purpose |
|---------|--------|---------|
| **Title** | App Name | Single identifier for your app |
| **Purpose** | Purpose, Target Users, Problem Solved | Why the app exists |
| **Look & Feel** | Design Style, Color Scheme, Mood | Visual direction |
| **UI Elements** | Required Components | All buttons, inputs, displays needed |
| **User Flows** | Navigation Paths, Key Flows | How users move through app |
| **User Inputs** | Input Types, Examples | What users type/select/enter |
| **Actions** | User Actions, Data Processing | What happens, how data flows |

---

## 🔧 Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 15.5.6 (React 18.3) |
| **Language** | TypeScript 5.4 |
| **Styling** | Tailwind CSS 3.4.13 |
| **State** | Zustand 4.4.0 |
| **Database** | PostgreSQL + Prisma (optional) |
| **Auth** | NextAuth.js (optional) |

---

## 🌓 Dark Mode

Built-in light/dark mode with:
- 🌙 Toggle button in top-right header
- 💾 Preference saved to localStorage
- 🎨 System preference detected on first visit
- ⚡ Smooth transitions between modes

Click the moon/sun icon to toggle anytime.

---

## 📁 Project Structure

```
Prompt-Wizard-1/
├── app/
│   ├── page.tsx                    # Main wizard UI
│   ├── layout.tsx                  # Root layout
│   ├── globals.css                 # Global styles
│   ├── providers.tsx               # Context providers
│   └── api/                        # API routes
├── components/
│   ├── FormSection.tsx             # All form fields
│   ├── WizardNavigation.tsx         # Tab navigation
│   ├── MasterPromptGenerator.tsx    # Prompt builder
│   └── ThemeToggle.tsx              # Dark mode toggle
├── lib/
│   ├── store.ts                    # Zustand store
│   ├── theme-provider.tsx          # Theme context
│   └── types.ts                    # TypeScript types
├── prisma/                         # Database schema
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

---

## 💻 Development Commands

```bash
npm run dev      # Start dev server on localhost:3000
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

---

## 🎓 Tips for Better Results

1. **Be Specific** - More detail = better AI recommendations
2. **Use Examples** - Include sample user inputs and flows
3. **List Everything** - Don't miss UI elements
4. **Think Mobile** - Consider mobile responsiveness
5. **Plan First** - Use AI recommendations before coding
6. **Review** - Read the generated prompt before sending to AI

---

## 📚 Documentation

- `PROJECT_STATUS.md` - Technical architecture details
- `COMMIT_SUMMARY.md` - Latest changes and features
- `PRE_COMMIT_CHECKLIST.md` - Verification checklist

---

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/awesome-feature`)
2. Make your changes
3. Test thoroughly
4. Commit with clear messages (`git commit -m 'feat: add awesome feature'`)
5. Push to branch (`git push origin feature/awesome-feature`)
6. Create Pull Request

---

## 📄 License

MIT License - feel free to use, modify, and share

---

## 🚀 Ready to Build?

1. Open http://localhost:3000
2. Fill out the form for your app
3. Copy the generated prompt
4. Share with ChatGPT/Claude
5. Get architecture plan
6. Start building! 🎉

**Questions?** Check `PROJECT_STATUS.md` for technical details or try again with more specific app details.
