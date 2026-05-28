<div align="center">

```
 ░█████╗░██╗░░░██╗██╗░░░██╗░██████╗██╗░░██╗
 ██╔══██╗╚██╗░██╔╝██║░░░██║██╔════╝██║░░██║
 ███████║░╚████╔╝░██║░░░██║╚█████╗░███████║
 ██╔══██║░░╚██╔╝░░██║░░░██║░╚═══██╗██╔══██║
 ██║░░██║░░░██║░░░╚██████╔╝██████╔╝██║░░██║
 ╚═╝░░╚═╝░░░╚═╝░░░╚═════╝░╚═════╝░╚═╝░░╚═╝
```

# 🌐 Ayush Prabhavale — Cyberpunk Portfolio

**`Front End Developer · AI Intern · Lifelong Learner`**

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-00f0ff?style=for-the-badge&logoColor=black)](https://ayush71071.github.io)
[![GitHub](https://img.shields.io/badge/GitHub-Ayush71071-ff007f?style=for-the-badge&logo=github)](https://github.com/Ayush71071)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Ayush_Prabhavale-00ff66?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/ayush-prabhavale-67b2052b4/)
[![Twitter](https://img.shields.io/badge/Twitter-@AyushPrabhavale-ffea00?style=for-the-badge&logo=twitter)](https://twitter.com/AyushPrabhavale)

</div>

---

## ⚡ Overview

> *"Building the future, one line at a time — from PUNE to the Digital Universe."*

A high-performance, cyberpunk-aesthetic portfolio website for **Ayush Prabhavale**, a B.Tech CSE student at VIT Bhopal University. The site features immersive canvas animations, glassmorphism UI, particle systems, and a fully responsive layout that screams **neon-noir** vibes straight out of a sci-fi universe.

---

## 🖥️ Live Preview

```
╔══════════════════════════════════════════╗
║  ayush@portfolio:~$ ./launch-website.sh  ║
║  > Initializing neon grid...      [OK]   ║
║  > Loading particle engine...     [OK]   ║
║  > Rendering matrix rain...       [OK]   ║
║  > Booting glassmorphism UI...    [OK]   ║
║  > Website is LIVE. 🚀             [OK]  ║
╚══════════════════════════════════════════╝
```

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎆 **Particle System** | Interactive particles.js canvas on the Hero section |
| 🌧️ **Matrix Rain** | Custom canvas-rendered Matrix-style character fall |
| 💾 **Binary Rain** | Animated binary rain effect on the Contact section |
| ⚡ **Circuit Lines** | Cyber circuit path animations drawn on canvas |
| ✍️ **Typewriter Effect** | Hero subtitle animates through multiple role titles |
| 🔮 **Glassmorphism Cards** | Frosted glass cards with depth, blur & neon borders |
| 🌈 **Neon Design System** | Custom CSS tokens: `--neon-blue`, `--neon-pink`, `--neon-green`, `--neon-yellow` |
| 📜 **AOS Scroll Animations** | Sections animate into view on scroll via AOS |
| 🔵 **Scroll Dot Indicator** | Fixed right-side dot navigation highlights active section |
| 📱 **Fully Responsive** | Mobile-first layout with hamburger nav |
| ⏳ **Preloader** | Spinning neon loader before page reveal |
| 🎨 **Gradient Animations** | Animated `background-position` gradient on hero title |

---

## 🗂️ Project Structure

```
portfolio/
│
├── index.html        # Main HTML — all sections & layout
├── style.css         # Custom design system, neon tokens, animations
├── script.js         # All JS: particles, matrix rain, typewriter, scroll
└── avatar.png        # Profile image (cyberpunk avatar)
```

---

## 🧱 Tech Stack

```js
const stack = {
  markup:     [ "HTML5" ],
  styling:    [ "CSS3", "Tailwind CSS v2", "Custom Neon Design Tokens" ],
  scripting:  [ "Vanilla JavaScript (ES6+)" ],
  libraries:  [ "Particles.js", "AOS (Animate On Scroll)", "Font Awesome 5" ],
  animations: [ "Canvas API", "CSS Keyframes", "CSS Transitions" ],
  design:     [ "Glassmorphism", "Neumorphism accents", "Cyberpunk Aesthetic" ],
};
```

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Ayush71071/portfolio.git
cd portfolio
```

### 2. Run Locally
No build step needed — just open in a browser:
```bash
# Option A: Open directly
open index.html

# Option B: Use a local dev server (recommended)
npx serve .
# or
python3 -m http.server 8080
```

### 3. Visit
```
http://localhost:8080
```

> ⚠️ **Note:** Some CDN-based features (particles, AOS) require an internet connection. Use a live server for best results — do NOT open as a raw `file://` URL.

---

## 🎨 Design System

The entire color palette is driven by CSS custom properties:

```css
:root {
  --neon-blue:   #00f0ff;   /* Cyan — primary accent     */
  --neon-pink:   #ff007f;   /* Magenta — secondary accent */
  --neon-green:  #00ff66;   /* Lime — success / code      */
  --neon-yellow: #ffea00;   /* Yellow — highlights        */
}
```

### Typography
- **Body Font:** System sans-serif stack (Tailwind default)
- **Code/Terminal blocks:** Monospace (`font-mono`)
- **Headings:** Bold + gradient clip (`bg-clip-text`)

### Key Components
- `.glass-card` — Glassmorphism panel with `backdrop-filter: blur(12px)`
- `.glow-avatar` — Profile image with dual-color radial glow
- `.scroll-dot` / `.scroll-dot.active` — Right-side section dots
- `.cursor` — Blinking typewriter cursor
- `.loading-animation` — Full-screen preloader overlay

---

## 📌 Sections

| Section | Description |
|---|---|
| **Hero** | Avatar, animated name, typewriter roles, social links, particles |
| **About** | Terminal-style developer profile, skills list, education timeline |
| **Skills** | Skill cards with neon borders and matrix rain background |
| **Projects** | Project cards — UI Suite, web apps, and more |
| **Contact** | Terminal-styled contact card with email, phone & social links |

---

## 👤 About the Developer

```json
{
  "name":     "Ayush Prabhavale",
  "title":    "Front End Developer",
  "education":"B.Tech CSE — VIT Bhopal University (2024–2028)",
  "location": "Pune, Maharashtra, India",
  "focus":    ["Full Stack Development", "Artificial Intelligence", "Entrepreneurship"],
  "mantra":   "EAT. SLEEP. CODE. REPEAT."
}
```

---

## 📬 Contact

| Channel | Details |
|---|---|
| 📧 **Email** | [ayusshworks710@gmail.com](mailto:ayusshworks710@gmail.com) |
| 📞 **Phone** | +91-7888274303 |
| 💼 **LinkedIn** | [ayush-prabhavale-67b2052b4](https://www.linkedin.com/in/ayush-prabhavale-67b2052b4/) |
| 🐙 **GitHub** | [Ayush71071](https://github.com/Ayush71071) |
| 🐦 **Twitter** | [@AyushPrabhavale](https://twitter.com/AyushPrabhavale) |

---

<div align="center">

```
while (true) {
  await messages.receive();
  return response.quick();
}
```

**Built with ☕ + 💻 + neon lights in Pune, India**

</div>
