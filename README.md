<div align="center">

  <!-- Roach SVG Logo -->
  <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Antennae -->
    <path d="M 46.5 37.5 C 38.5 25.5 24.5 16.5 6 13.5" stroke="#8B0000" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M 53.5 37.5 C 61.5 25.5 75.5 16.5 94 13.5" stroke="#8B0000" stroke-width="2.5" stroke-linecap="round"/>

    <!-- Head -->
    <path d="M 44.5 43.5 C 44.5 38.5 55.5 38.5 55.5 43.5 Z" fill="#8B0000"/>

    <!-- Legs Left -->
    <path d="M 41.5 45.5 L 32.5 35.5 L 35.5 42" stroke="#8B0000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M 38.5 53.5 L 29.5 53.5 L 26.5 61.5" stroke="#8B0000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M 39.5 64.5 L 34.5 67.5 L 32.5 78.5" stroke="#8B0000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>

    <!-- Legs Right -->
    <path d="M 58.5 45.5 L 67.5 35.5 L 64.5 42" stroke="#8B0000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M 61.5 53.5 L 70.5 53.5 L 73.5 61.5" stroke="#8B0000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M 60.5 64.5 L 65.5 67.5 L 67.5 78.5" stroke="#8B0000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>

    <!-- Body (D, R, F Letter Silhouette) -->
    <!-- D Wing -->
    <path d="M 45.5 45.5 C 39.5 47 38.5 54 38.5 62 C 38.5 70 39.5 76 45.5 79.5 Z M 42.5 52 C 40 54 39.5 58 39.5 62 C 39.5 66 40 69 42.5 71 Z" fill="#8B0000"/>
    <!-- R Core -->
    <path d="M 47.5 45.5 L 47.5 81.5 L 49.5 81.5 L 49.5 63.5 H 50.5 L 52 81.5 H 54 L 52 61.5 C 52.8 59.5 53.2 57 53.2 54.5 C 53.2 49 51 45.5 47.5 45.5 Z M 49.5 50.5 H 51 C 51.8 50.5 52.2 51.5 52.2 54 C 52.2 56.5 51.8 57.5 51 57.5 H 49.5 Z" fill="#8B0000"/>
    <!-- F Wing -->
    <path d="M 54.5 45.5 C 60.5 47 61.5 54 61.5 62 C 61.5 70 60.5 76 54.5 79.5 Z M 56.5 52 H 60.5 V 57.5 H 56.5 Z M 56.5 62.5 H 60.5 V 74.5 C 58.5 72.5 56.5 67.5 56.5 62.5 Z" fill="#8B0000"/>
  </svg>

  # DEMOCRATIC ROACH FRONT
  
  <p><strong>A Clean, Cyber-Political Activism Platform Designed for the Indian Youth.</strong></p>

  <p>
    <a href="#-design-aesthetic"><b>Design Aesthetic</b></a> •
    <a href="#-technical-stack"><b>Tech Stack</b></a> •
    <a href="#-features"><b>Key Features</b></a> •
    <a href="#-repository-structure"><b>Architecture</b></a> •
    <a href="#-local-setup"><b>Setup Guide</b></a>
  </p>

  <img src="https://img.shields.io/badge/Next.js-15.5-000000?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TailwindCSS-v4-38BDF8?style=flat-square&logo=tailwind-css" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Framer_Motion-Dynamic-F107A3?style=flat-square&logo=framer" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Secure_Node-ACTIVE-8B0000?style=flat-square" alt="DRF ID Active" />

</div>

---

## 🔴 Design Aesthetic

The visual system is engineered to feel **minimalist, cinematic, and responsive**. It draws inspiration from Apple-like hardware cleanliness, Swiss grid typography, and cyber-political activism branding.

- **Background Palette**: Primary Light `#F8F8F6` and Secondary Card `#FFFFFF`.
- **Accent Palette**: Solid Dark Crimson `#8B0000` paired with Deep Crimson Shadows `#5E0B15`.
- **Visual Filters**: Sub-pixel animated noise overlays, glowing high-contrast red highlights, and absolute minimalist glassmorphism containers.

---

## 🛠️ Technical Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router + Turbopack compilation engine)
- **Styling**: [TailwindCSS](https://tailwindcss.com/) + Custom CSS variables (`src/app/globals.css`)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (Smooth hover transitions, custom magnetic cursor, and element entries)
- **Database Engine**: [MongoDB](https://www.mongodb.com/) via [Mongoose](https://mongoosejs.com/) models
- **Client Geo-IP Lookup**: `ipapi.co` API (High speed, zero-prompt background geo-coordinate analysis)

---

## ⚡ Key Features

* **Official Member Enlistment**: A compact 2x2 grid form registering Name, Email, State, and Age brackets.
* **Auto-Generated Roach IDs**: Auto-calculates unique sequential member IDs (e.g. `DRF-001001`, `DRF-001002`) based on registration count.
* **Automated Geolocation Tracking**: Silently logs incoming members' public IPv4/IPv6 address, resolved city, state/region, country name, and exact latitude/longitude coordinates to the database.
* **Realtime Terminal Display**: Displays verified member blocks, resolved IP, and geological coordinates inside an interactive terminal UI upon registration success.
* **Global Custom Cursor**: A custom red glow magnetic dot cursor tracing interactive elements on the screen.

---

## 📂 Repository Structure

```text
Democratic-Roach-Front/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── enlist/
│   │   │       └── route.ts       # Database transactional handler & IP parser
│   │   ├── globals.css            # Custom design tokens, grids & animation properties
│   │   ├── icon.svg               # Custom brand vector favicon
│   │   ├── layout.tsx             # Document head, layout & custom cursor setup
│   │   └── page.tsx               # Main assembly page
│   │
│   ├── components/
│   │   ├── Navbar.tsx             # Sticky cyber-navigation header
│   │   ├── Hero.tsx               # Cinematic header showing logo badge
│   │   ├── Ticker.tsx             # Running youth voice announcement strip
│   │   ├── WhyDRF.tsx             # Civic mission checklist section
│   │   ├── JoinForm.tsx           # Geolocation-enriched secure registration form
│   │   └── Footer.tsx             # Swiss minimalist bottom layout
│   │
│   ├── lib/
│   │   └── db.ts                  # Cached connection manager for Mongoose
│   │
│   └── models/
│       └── Roacher.ts             # Mongoose database validation schema
```

---

## 🚀 Local Setup

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/iam-rbaskey/Democratic-Roach-Front.git
cd Democratic-Roach-Front
npm install
```

### 2. Configure Database Connection
Open `src/lib/db.ts` and ensure the live MongoDB connection URI is configured:
```typescript
const MONGODB_URI = "mongodb+srv://rbaskeyofficial:rbaskeyofficial@cluster0.lnstw.mongodb.net/drf?appName=Cluster0";
```

### 3. Run Dev Server
```bash
npm run dev
```
Open **`http://localhost:3000`** in your browser to view the application.

---

<div align="center">
  <sub>DEMOCRATIC ROACH FRONT © 2026. CO-OPTED CIVIC REFORMS.</sub>
</div>
