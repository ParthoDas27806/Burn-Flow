# ⚡ BurnFlow

### *Flow with purpose. Burn with intention.*

> A personalised fitness web app for **every body and every goal** — built with pure HTML, CSS, and JavaScript. No frameworks, no dependencies, no build step. Just open and use.

---

## 🌐 Live Demo

**[View Live App →](https://YOUR-USERNAME.github.io/burnflow)**

*(Replace `YOUR-USERNAME` with your GitHub username after deployment)*

---

## 🎯 What BurnFlow Does

BurnFlow is a **goal-adaptive** fitness app. Pick your goal and every section — the step-by-step plan, daily meal plan, weekly workout schedule, habit tracker, and expert tips — instantly personalises to match.

| Goal | Who It's For |
|---|---|
| 🔥 **Lose Fat** | Burn fat, reduce weight, get leaner |
| 💪 **Gain Weight** | Build muscle mass & healthy weight |
| ⚖️ **Maintain** | Keep your current physique & fitness |
| 🥗 **Balance Diet** | Fix eating habits, improve nutrition |
| 🏃 **Build Endurance** | Improve stamina, cardio & energy |
| 🧘 **Flexibility & Wellness** | Reduce stress, improve mobility |

---

## ✨ Features

- **Goal Selector** — switch goals and the whole app updates instantly
- **BMI & TDEE Calculator** — personalised calorie targets per goal
- **Daily Meal Plans** — full macro breakdowns for each goal
- **Weekly Workout Schedules** — strength, cardio, recovery structured by goal
- **Habit Tracker** — goal-specific daily habits with progress bars
- **Weight Log** — weekly progress journal
- **Expert Tips** — evidence-based advice per goal
- **Fully responsive** — works on mobile, tablet, and desktop
- **Zero dependencies** — no npm, no build step, no framework

---

## 📁 Project Structure

```
burnflow/
│
├── index.html          ← Main app (entry point)
│
├── css/
│   └── styles.css      ← All styles
│
├── js/
│   └── app.js          ← All goal data + interactivity
│
├── assets/
│   ├── icon.svg        ← Full app icon (512×512)
│   └── favicon.svg     ← Browser tab icon (192×192)
│
├── .nojekyll           ← Required for GitHub Pages
└── README.md           ← This file
```

---

## 🚀 How to Launch on GitHub Pages (Step by Step)

### Step 1 — Create a GitHub Account
Go to [github.com](https://github.com) and sign up for a free account if you don't have one.

### Step 2 — Create a New Repository
1. Click the **+** icon (top right) → **New repository**
2. Name it: `burnflow` (or any name you like)
3. Set visibility to **Public**
4. Leave everything else as default
5. Click **Create repository**

### Step 3 — Upload Your Files
**Option A — Via GitHub Website (easiest):**
1. On your new repo page, click **Add file** → **Upload files**
2. Drag and drop the entire `burnflow/` folder contents
3. Make sure the folder structure is maintained:
   - `index.html` at the root
   - `css/styles.css`
   - `js/app.js`
   - `assets/icon.svg`
   - `assets/favicon.svg`
   - `.nojekyll`
4. Add a commit message like `Initial launch 🚀`
5. Click **Commit changes**

**Option B — Via Git (if you have Git installed):**
```bash
# In your terminal, inside the burnflow folder:
git init
git add .
git commit -m "Initial launch 🚀"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/burnflow.git
git push -u origin main
```

### Step 4 — Enable GitHub Pages
1. Go to your repo on GitHub
2. Click **Settings** (top navigation bar)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **Deploy from a branch**
5. Set branch to **main** and folder to **/ (root)**
6. Click **Save**

### Step 5 — Visit Your Live App 🎉
After 1–2 minutes, your app will be live at:
```
https://YOUR-USERNAME.github.io/burnflow
```

GitHub will show you the exact URL in the Pages settings.

---

## 🛠️ Customisation

### Change the App Name / Tagline
Open `index.html` and find:
```html
<span class="nav-name">BURNFLOW</span>
<span class="nav-tagline">Your Body. Your Goal. Your Plan.</span>
```

### Change Colours
Open `css/styles.css` and edit the `:root` variables:
```css
:root {
  --accent: #FF4500;   /* Main brand colour */
  --accent2: #FFB300;  /* Secondary colour */
  --dark: #0D0D0D;     /* Background */
}
```

### Add / Edit Goal Content
Open `js/app.js` and find the `GOALS` object. Each goal has:
- `steps[]` — the 8-step plan
- `meals[]` — daily meal cards
- `workouts[]` — weekly workout cards
- `tips[]` — expert tip cards

---

## 🔧 Local Development

No build step needed. Just open `index.html` in your browser:

```bash
# Option 1 — Direct open
open index.html

# Option 2 — With a local server (recommended)
npx serve .
# or
python3 -m http.server 8080
```

---

## 📱 Browser Support

Works in all modern browsers: Chrome, Firefox, Safari, Edge.

---

## 📄 License

MIT License — free to use, modify, and distribute.

---

*Built with pure HTML, CSS & JavaScript. No frameworks harmed.*
