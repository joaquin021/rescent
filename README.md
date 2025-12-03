# 🌸 Rescent - Olfactory Training App

**Rescent** is a web app designed for olfactory training and smell recovery.

> **Name meaning:** *Rescent* is a wordplay combining **Re** (to return/recover) + **Scent** (aroma), representing the journey to regain your sense of smell.

---

## ✨ Features

- 🎯 **Guided olfactory training** with 4 essential scents
- ⏱️ **Structured sessions**: 60s stimulation + 30s sniffing
- 📱 **Mobile-first design** (feels like a native app)
- 🌓 **Dark mode** for comfortable viewing
- 🖼️ **Immersive visual design** with curated imagery
- ✨ **Smooth view transitions** between pages
- 📊 **3-phase training method** based on neuroplasticity

---

## 🚀 Tech Stack

- **Framework:** Astro 4.x
- **Styling:** Tailwind CSS
- **Interactivity:** React (Islands)
- **Transitions:** Astro View Transitions
- **Deploy:** GitHub Pages + GitHub Actions

---

## 📦 Installation

```bash
npm install
```

## 🏃 Development

```bash
npm run dev
```

The app will be available at `http://localhost:4321`

## 🏗️ Build for Production

```bash
npm run build
npm run preview
```

---

## 🌐 Deploy to GitHub Pages

This app is configured for automatic deployment to GitHub Pages.

### Option 1: Complete Guide
Read **[DEPLOY.md](./DEPLOY.md)** for step-by-step instructions.

### Option 2: Quick Commands
Check **[DEPLOY_COMMANDS.md](./DEPLOY_COMMANDS.md)** for copy-paste commands.

### Option 3: Automated Script
```bash
# Make script executable (first time only)
chmod +x deploy.sh

# Deploy with one command
./deploy.sh "Your commit message"
```

**Live URL:** https://joaquin021.github.io/rescent/

---

## 📂 Project Structure

```
rescent/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── TrainingSession.jsx    # React component with timer logic
│   ├── data/
│   │   └── aromas.json            # Aroma database
│   ├── layouts/
│   │   └── Layout.astro           # Base layout
│   ├── pages/
│   │   ├── index.astro            # Home page with grid
│   │   └── train/
│   │       └── [id].astro         # Dynamic training page
│   └── styles/
│       └── global.css             # Global Tailwind styles
├── .github/
│   └── workflows/
│       └── deploy.yml             # GitHub Actions workflow
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## 🎨 The 4 Essential Scents

The app includes training sessions for 4 scientifically-selected scents:

| Scent | Category | Purpose |
|-------|----------|---------|
| 🍊 **Orange** | Citrus | Energizing, sharp, acidic |
| 🌿 **Eucalyptus** | Medicinal | Cooling, penetrating, menthol |
| 🌺 **Geranium** | Floral | Sweet, herbaceous, powdery |
| 🍂 **Cinnamon** | Spicy | Warm, woody, comforting |

---

## 🎯 How It Works

### Phase 1: Stimulation (60 seconds)
- View curated images
- Read sensory adjectives
- Read evocative descriptions
- Reflect on episodic memory questions
- **Do NOT smell yet** - prepare your mind first

### Phase 2: Action (30 seconds)
- Visual cue: "Smell Now!"
- Take short, gentle sniffs (not deep breaths)
- Focus on the sensations

### Phase 3: Completion
- Session summary
- Options to repeat or return to menu

---

## 🧠 Scientific Background

This app follows the olfactory training method based on neuroplasticity research:

- **Frequency:** 2 times per day
- **Duration:** Minimum 3 months
- **Method:** Episodic memory activation before smelling
- **Breathing:** Short, gentle sniffs (not deep inhalations)

Studies show that combining visual stimuli, memory recall, and consistent practice can help recover smell loss (anosmia/hyposmia) caused by various conditions.

---

## 📱 Mobile PWA

Add Rescent to your home screen for a native app experience:

**iOS (Safari):**
1. Tap the share icon
2. Select "Add to Home Screen"

**Android (Chrome):**
1. Menu (3 dots) → "Add to Home screen"

---

## 🛠️ Customization

### Change Scent Data
Edit `src/data/aromas.json` to modify:
- Images (Unsplash URLs)
- Adjectives
- Evocative texts
- Questions

### Adjust Phase Timing
Edit `src/components/TrainingSession.jsx` (lines 4-7):
```javascript
const PHASE_DURATIONS = {
  STIMULATION: 60,  // Change this
  ACTION: 30,       // Change this
};
```

### Modify Colors
Edit `tailwind.config.mjs` (lines 6-26) for custom color palette.

---

## 🌍 Responsive Design

- **Mobile:** Vertical layout, touch-optimized
- **Desktop:** Split-screen immersive experience
- **Breakpoints:** Fully responsive from 375px to 2560px+

---

## 📄 License

MIT License - Free to use and modify

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve translations

---

## 💡 Inspiration

This app was created to help people recovering from smell loss (anosmia) through structured olfactory training, combining modern web technologies with evidence-based therapeutic techniques.

**Rescent** = **Re**covering your sense of **scent** 🌸

---

Built with ❤️ using Astro, React, and Tailwind CSS
