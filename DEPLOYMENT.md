# 🚀 Deployment Guide - Prompt Wizard

## One-Click Deployment to Vercel

### Prerequisites
- GitHub account (already connected: `krrishkrishnan/Prompt-Wizard`)
- Vercel account (free at vercel.com)

### Step 1: Go to Vercel
1. Visit https://vercel.com
2. Click **"New Project"**
3. Connect GitHub
4. Select **`Prompt-Wizard`** repository
5. Click **Import**

### Step 2: Configure Environment (Optional)
If you plan to use database persistence:
```
DATABASE_URL=your_postgresql_url_here
NEXTAUTH_SECRET=your_random_secret_here
NEXTAUTH_URL=https://your-domain.vercel.app
```

If you skip this, the form still works without database storage.

### Step 3: Deploy
1. Click **Deploy**
2. Wait 2-3 minutes for build
3. Get your live URL: `https://prompt-wizard-xxx.vercel.app`

Done! Your app is live. 🎉

---

## Local Development

### Start Dev Server
```bash
npm run dev
```
Open http://localhost:3000

### Build for Production
```bash
npm run build
npm start
```

---

## Environment Variables (Optional)

Create `.env.local` for database features:

```env
# Database (PostgreSQL)
DATABASE_URL="postgresql://user:password@localhost:5432/prompt_wizard"

# Authentication
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# Optional: OpenAI Integration (future)
OPENAI_API_KEY="sk-..."
```

Without these, the form works perfectly as a stateless tool.

---

## Database Setup (Optional)

If you want to add database persistence:

### 1. Create PostgreSQL Database
Use one of:
- Supabase (recommended for Vercel): https://supabase.com
- Railway: https://railway.app
- Neon: https://neon.tech

### 2. Get Connection String
Copy your `DATABASE_URL` from your database provider.

### 3. Add to Vercel
In Vercel project settings:
- Go to **Settings → Environment Variables**
- Add `DATABASE_URL=your_connection_string`

### 4. Run Migrations
```bash
npx prisma migrate deploy
```

### 5. Generate Prisma Client
```bash
npx prisma generate
```

---

## File Structure After Deployment

Your repository has:

```
✅ Form - Works immediately (no database needed)
✅ Dark mode - Works immediately
✅ Prompt generation - Works immediately
⏳ Database storage - Optional (add when ready)
⏳ Authentication - Optional (add when ready)
```

---

## Monitoring

### View Logs
```bash
vercel logs
```

### Check Build Status
Go to Vercel dashboard → Project → Deployments

---

## Custom Domain (Optional)

1. In Vercel: Settings → Domains
2. Add your domain
3. Update DNS records
4. Done!

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
vercel build --prod
```

### Port 3000 Already in Use
```bash
# Kill process on port 3000
lsof -i :3000
kill -9 <PID>
```

### Database Connection Error
- Check `DATABASE_URL` in environment variables
- Verify database is online
- Check IP whitelist (if using cloud database)

---

## Performance Tips

1. **Caching** - Static pages cached by Vercel
2. **Dark Mode** - Uses CSS, no JavaScript rendering
3. **State** - Zustand is lightweight, minimal bundle size
4. **Images** - Optimize with `next/image` (if added)

---

## Security

✅ **What's Protected**
- No sensitive data in code
- Environment variables used for secrets
- TypeScript prevents runtime errors

⚠️ **What You Should Know**
- Forms data is NOT stored unless you configure database
- No authentication required (form is public)
- HTTPS enforced on Vercel

---

## Next Steps

### Phase 1: Core (Now ✅)
- Form builder ✅
- Dark mode ✅
- Prompt generation ✅
- Copy to clipboard ✅

### Phase 2: Persistence (Optional)
- Save prompts to database
- Load saved prompts
- User accounts

### Phase 3: AI Features (Optional)
- OpenAI integration for suggestions
- Prompt quality scoring
- Template library

---

## Support

**Questions?** Check:
- `README.md` - Overview
- `QUICK_START.md` - Usage guide
- `PROJECT_STATUS.md` - Technical details

---

## Production Checklist

Before going fully public:

- [ ] Test on mobile (iOS Safari, Android Chrome)
- [ ] Test dark mode toggle
- [ ] Verify form validation
- [ ] Test copy button
- [ ] Check all 7 sections work
- [ ] Verify prompt generation
- [ ] Test in different browsers (Chrome, Safari, Firefox)
- [ ] Check build succeeds: `npm run build`
- [ ] Check no console errors: Press F12 in browser
- [ ] Verify deployment on Vercel

---

## Live Demo

Your app is now live and ready for users!

**Share:** `https://your-deployment-url.vercel.app`

---

**Happy deploying! 🚀**
