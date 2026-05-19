<div align="center">

  <!-- Roach SVG Logo -->
  

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
