# Deployment Guide
## Vishwanath Sharma - Personal Advisory Portfolio

This project is built using **Vite + React + Tailwind CSS**. It compiles to a static web application that can be deployed for free on **Vercel**, **Netlify**, or **GitHub Pages**.

---

## 1. Push Code to GitHub

Open your terminal in `d:\Vishi Mama` and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Vishwanath Sharma Executive Portfolio"

# Link your GitHub repository (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/vishwanath-sharma-portfolio.git

# Push to main branch
git branch -M main
git push -u origin main
```

---

## 2. Deploying on Vercel (Recommended)

1. Go to [Vercel](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New Project"** and select your `vishwanath-sharma-portfolio` repository.
3. Build Settings will auto-detect Vite:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.
5. Your portfolio will be live at `https://vishwanath-sharma-portfolio.vercel.app` (or your custom domain).

---

## 3. Deploying on Netlify

1. Go to [Netlify](https://netlify.com) and log in.
2. Click **"Add new site"** -> **"Import an existing project"** -> **GitHub**.
3. Select your repository.
4. Set build command to `npm run build` and publish directory to `dist`.
5. Click **Deploy Site**.

---

## 4. Connecting Form Submissions (Supabase or Web3Forms)

The Mandate Inquiry Form in `src/components/InquiryForm.jsx` is configured for instant client interaction.

### Option A: Web3Forms (No Backend Needed, 2-Minute Setup)
1. Get a free Access Key at [Web3Forms.com](https://web3forms.com).
2. Update the form endpoint in `src/components/InquiryForm.jsx` to send direct emails to `sharmavn2001@yahoo.com`.

### Option B: Supabase Database Integration
1. Create a table in Supabase called `mandate_inquiries`:
   ```sql
   create table mandate_inquiries (
     id uuid default gen_random_uuid() primary key,
     created_at timestamp with time zone default timezone('utc'::text, now()) not null,
     full_name text not null,
     company_name text not null,
     email text not null,
     phone text not null,
     service_category text not null,
     deal_size text,
     timeline text,
     message text
   );
   ```
2. Install `@supabase/supabase-js`:
   ```bash
   npm install @supabase/supabase-js
   ```
3. Import Supabase client into `InquiryForm.jsx` to insert form rows directly into your table.
