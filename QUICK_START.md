# 🚀 Prompt Wizard - Quick Start Guide

## What is Prompt Wizard?

Prompt Wizard helps you create detailed application specifications by guiding you through a 7-section form. It generates a comprehensive "master prompt" that you can send to AI agents (Claude, ChatGPT, etc.) to get architecture and planning recommendations **before** you start coding.

**Why?** Because AI can plan better when it understands your full requirements upfront.

---

## ⚡ 5-Minute Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the App
```bash
npm run dev
```

### 3. Open in Browser
Navigate to: **http://localhost:3000**

You should see the form wizard with 7 tabs on the left and a preview on the right.

---

## 📝 How to Use (Step by Step)

### Tab 1: Application Title
**What to do:** Enter the name of your app
- Example: "Todo App", "E-commerce Store", "Fitness Tracker"
- This appears at the top of your generated prompt

### Tab 2: Purpose & Description
**What to do:** Describe what the app does
- **Purpose:** "Task management for busy professionals"
- **Target Users:** "Busy developers and managers"
- **Problem Solved:** "Helps organize and prioritize daily tasks"

### Tab 3: Look & Feel
**What to do:** Describe the visual design
- **Design Style:** "Modern and minimal" / "Dark and corporate" / "Playful and colorful"
- **Color Scheme:** "Dark blue, white, and green accents"
- **Mood:** "Professional yet approachable"

### Tab 4: UI Elements Required
**What to do:** List all the components you need
```
- Header with logo and navigation
- Sidebar with menu
- Task input field
- Add button
- Task list
- Delete button per task
- Filter by status
- Search box
```

Be specific! More components = better AI recommendations.

### Tab 5: User Flows
**What to do:** Describe how users navigate
```
1. User lands on home page
2. Sees list of existing tasks
3. Clicks "Add Task" button
4. Modal/form appears
5. User enters task details
6. Clicks save
7. Returns to list, sees new task
```

Think about the main flows: create, read, update, delete.

### Tab 6: User Inputs
**What to do:** List what data users provide
```
- Task title (text, required, max 100 chars)
- Task description (text, optional, max 500 chars)
- Due date (date picker)
- Priority (dropdown: Low, Medium, High)
- Tags (text input, multiple)
- Assign to (user selector)
```

Include data types and constraints!

### Tab 7: Actions & Data Processing
**What to do:** Describe what happens when users interact
```
When user clicks "Add Task":
- Validate input (title required, description max 500 chars)
- Save to database
- Refresh task list on UI
- Show success toast notification
- Clear input fields

When user clicks "Delete":
- Show confirmation modal
- If confirmed, remove from DB
- Update UI
- Show "Task deleted" message
```

---

## 🎯 Watch It Work

As you fill in each section:
- ✅ The right side panel updates in **real-time**
- ✅ Your master prompt grows with each section
- ✅ Header includes planning reminder for AI
- ✅ Footer includes environment context

---

## 📋 Master Prompt Preview

Your generated prompt will look like:

```
[PLANNING PHASE]
Before writing code, create a detailed architecture plan.
Include: tech stack, database schema, API endpoints, component structure.
Get human approval before building.

[APPLICATION SPECIFICATION]

## Application Title
Todo App

## Purpose & Description
Task management for busy professionals...
[continues with all your form data]

## Look & Feel
Modern and minimal...

## UI Elements
- Header, Sidebar, Input field, Add button...

## User Flows
1. User lands on home...

## User Inputs
- Task title (text, required)...

## Actions & Data Processing
When user clicks add task...

[ENVIRONMENT CONTEXT]
Development Machine: MacBook with Chrome
```

---

## 🎬 What to Do Next

### 1. Copy the Prompt
Click the **"Copy Prompt"** button in the preview section.

### 2. Paste into ChatGPT or Claude
```
1. Go to chatgpt.com or claude.ai
2. Paste your master prompt
3. Ask: "Create an architecture plan for this app"
```

### 3. Get Architecture Recommendations
The AI will suggest:
- Tech stack (frontend, backend, database)
- Database schema and relationships
- API endpoints and structure
- Component structure
- Security considerations
- Performance optimizations

### 4. Review & Approve
Read through the AI's plan and approve it.

### 5. Start Building
Follow the AI-suggested architecture and start coding!

---

## 🌙 Dark Mode

Click the **moon/sun icon** in the top-right corner to toggle dark mode.
Your preference is saved automatically.

---

## 💡 Pro Tips

1. **Be Specific** - Don't say "login form", say "Login with email/password, remember me checkbox, forgot password link"
2. **Use Examples** - Shows in user inputs section helps AI understand edge cases
3. **Think Mobile** - Mention if the app needs mobile responsiveness
4. **List All UI** - Even small things like loading spinners, empty states, error messages
5. **Describe Flows** - More detail = better architecture plan
6. **Review Your Prompt** - Before sending to AI, read through and make sure it's complete

---

## 🔧 Development Commands

```bash
npm run dev      # Start dev server (hot reload)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Check code quality
```

---

## 📚 Learn More

- **`README.md`** - Full documentation
- **`PROJECT_STATUS.md`** - Technical architecture details
- **`COMMIT_SUMMARY.md`** - What's been built

---

## 🆘 Troubleshooting

**"The form isn't saving my input"**
- Check browser console (F12) for errors
- Refresh the page
- Clear browser cache

**"Dark mode looks weird"**
- Check if you have browser extensions blocking CSS
- Try a different browser
- Clear cache and hard refresh (Cmd+Shift+R on Mac)

**"Can't copy the prompt"**
- Make sure you have filled at least one field
- Check browser permissions for clipboard
- Try again or use Cmd+A to select and Cmd+C to copy manually

---

## 🎓 Example: Building a Todo App

### 1. Fill the Form
```
Title: Todo App
Purpose: Task management for busy professionals
Design: Clean and minimal, dark theme
UI Elements: Input, Add button, Todo list, Delete button, Filter
Flows: Type task → Click add → See in list → Click delete
Inputs: Task text (string), Completed (boolean)
Actions: Add saves to DB, Delete removes from list
```

### 2. Copy Prompt
Click copy button → Prompt is in your clipboard

### 3. Ask Claude
Paste in Claude and ask: "Create an architecture plan for this app"

### 4. Claude Responds
```
Tech Stack:
- Frontend: React with TypeScript
- Backend: Node.js + Express
- Database: PostgreSQL
- ORM: Prisma

Database Schema:
- users table (id, email, name, created_at)
- todos table (id, user_id, title, completed, created_at, updated_at)

API Endpoints:
- GET /api/todos - List all todos
- POST /api/todos - Create todo
- PATCH /api/todos/:id - Update todo
- DELETE /api/todos/:id - Delete todo

Components:
- TodoList (displays todos)
- TodoItem (individual todo)
- AddTodoForm (input and button)
- etc.
```

### 5. Build It!
Use Claude's plan as your architecture blueprint.

---

## 🚀 Ready to Start?

1. Open http://localhost:3000
2. Start filling the form
3. Copy the generated prompt
4. Share with your favorite AI
5. Get architecture recommendations
6. Build amazing things! 🎉

---

**Happy building! 🧙‍♂️**

*Questions? Check the README.md or PROJECT_STATUS.md for more details.*
