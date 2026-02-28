# Maniama's Civics Test Helper - Setup Guide

A bilingual (English/Malayalam) civics test helper website designed for your grandmother Maniama! 🙏🇺🇸

## Features

- ✅ **42 Bilingual Questions** - All questions available in English and മലയാളം
- ✅ **Quiz Mode** - Test your knowledge with all 42 questions
- ✅ **Practice Mode** - Practice by topic (Government, Rights, History, Symbols)
- ✅ **Mistake Tracking** - Review questions you got wrong
- ✅ **Text-to-Speech** - Listen to questions and answers in both languages
- ✅ **Progress Dashboard** - Track scores and improvement over time
- ✅ **Multi-Device Sync** - Access from any device with cloud sync
- ✅ **Large Touch Targets** - Grandmother-friendly UI with big buttons
- ✅ **Simple PIN Login** - No complex passwords, just a 4-digit PIN

## Quick Start (5 Minutes)

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Supabase (Backend Database)

1. Go to [https://supabase.com](https://supabase.com) and create a free account
2. Click "New Project"
3. Fill in:
   - **Project Name**: `Maniama-civics`
   - **Database Password**: (save this somewhere safe)
   - **Region**: Choose closest to your location
4. Wait 2-3 minutes for project to be created

### 3. Create Database Tables

1. In your Supabase project dashboard, click **SQL Editor** (left sidebar)
2. Click **New Query**
3. Copy the entire contents of `supabase-schema.sql` file
4. Paste into the SQL editor
5. Click **Run** button

This will create:

- **users** table (with default user: มणิയമ്മ, PIN: 1234)
- **mistakes** table (to track incorrect answers)
- **quiz_attempts** table (to track scores and progress)

### 4. Get Your Supabase Credentials

1. Go to **Project Settings** (gear icon in left sidebar)
2. Click **API** tab
3. You'll see:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon public** key (long string starting with `eyJ...`)

### 5. Configure Environment Variables

1. Open `.env.local` file in the project root
2. Replace the placeholder values:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.your-actual-key-here
```

### 6. Run the Development Server

```bash
npm run dev
```

The app will open at [http://localhost:3000](http://localhost:3000)

### 7. Login and Test

1. Click **Login** button
2. Enter PIN: **1234**
3. Start practicing! 🎉

## Default User

The database comes with a default user:

- **Name**: മണിയമ്മ (Maniama)
- **PIN**: 1234

## Deployment (Optional)

### Deploy to Vercel (Recommended - Free)

1. Push your code to GitHub
2. Go to [https://vercel.com](https://vercel.com)
3. Click **New Project**
4. Import your GitHub repository
5. Add Environment Variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
6. Click **Deploy**

Your app will be live at `https://your-project.vercel.app`

## How Maniama Can Use It

### On Her First Device

1. Open the website
2. Click the **Login** button (🙏🇺🇸)
3. Enter PIN: `1234`
4. Start practicing!

### On Additional Devices

Just repeat the login steps on any phone, tablet, or computer. All progress syncs automatically! 🌟

### Toggling Language

- Large button at the top switches between **EN** and **മ**
- Works on any page
- Preference is saved

### Dashboard Features

- Recent quiz scores
- Average score percentage
- Total attempts counter
- Topics that need more practice

## Troubleshooting

### "Database error" or "Connection failed"

- Check that `.env.local` has correct Supabase URL and key
- Verify the database tables were created (check Supabase Table Editor)
- Make sure environment variables start with `NEXT_PUBLIC_`

### "Invalid PIN" error

- Default PIN is `1234`
- User name must be exactly: **മണിയമ്മ**
- Check the `users` table in Supabase to verify the user exists

### Questions not loading

- Clear browser cache and reload
- Check browser console for errors (F12 key)

### Text-to-speech not working

- Only works in modern browsers (Chrome, Safari, Edge)
- Check browser permissions for audio
- Some browsers require user interaction before playing audio

## Project Structure

```
ManiAmam/
├── app/                    # Next.js pages
│   ├── page.tsx           # Home page
│   ├── quiz/              # Quiz mode
│   ├── practice/          # Practice mode
│   ├── mistakes/          # Review mistakes
│   ├── dashboard/         # Progress tracking
│   └── login/             # PIN login
├── components/            # Reusable UI components
├── data/                  # 42 bilingual questions
├── lib/                   # Core utilities
│   ├── storage.ts        # Database functions
│   ├── supabase.ts       # Supabase client
│   └── i18n.ts           # Translations
├── supabase-schema.sql   # Database setup script
└── .env.local            # Configuration (don't commit!)
```

## Questions Breakdown

- **Government** (15 questions): Structure, branches, powers
- **Rights** (8 questions): Bill of Rights, freedoms
- **History** (12 questions): Founding, wars, amendments
- **Symbols** (7 questions): Flag, anthem, motto

## Support

If Maniama needs help or you want to:

- Add more questions
- Change the default PIN
- Add more family members as users
- Customize the UI colors/sizing

Just let me know! This was built with love for your grandmother's success! 🙏❤️

---

**Built with:**

- Next.js 14 (React framework)
- TypeScript (type safety)
- Tailwind CSS (styling)
- Supabase (database & auth)
- Web Speech API (text-to-speech)

**Made with ❤️ for മണിയമ്മ**
