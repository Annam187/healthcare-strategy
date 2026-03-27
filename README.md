# ⚕️ Healthcare BA Intelligence Platform

> A comprehensive, interactive learning platform for Business Analysts and Digital Strategists to master the US Healthcare domain — workflows, stakeholders, strategy, and terminology.

🌐 **Live App:** [fluffy-taiyaki-ddc1f5.netlify.app](https://fluffy-taiyaki-ddc1f5.netlify.app)

[![Deploy to Netlify](https://github.com/Annam187/healthcare-strategy/actions/workflows/deploy.yml/badge.svg)](https://github.com/Annam187/healthcare-strategy/actions/workflows/deploy.yml)
[![Scheduled Deploy](https://github.com/Annam187/healthcare-strategy/actions/workflows/scheduled-deploy.yml/badge.svg)](https://github.com/Annam187/healthcare-strategy/actions/workflows/scheduled-deploy.yml)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Auto-Deploy Setup](#auto-deploy-setup)
- [Module Guide](#module-guide)

---

## Overview

The **Healthcare BA Intelligence Platform** is built for Business Analysts and Digital Strategists entering or growing within the US Healthcare industry. It provides:

- **Domain expertise** across the full healthcare ecosystem
- **Interactive workflow exploration** from patient journey to revenue cycle
- **Stakeholder intelligence** with goals, pain points and digital needs
- **Digital strategy frameworks** with real use cases and ROI data
- **Scenario simulations** to test decision-making in real-world situations
- **Searchable glossary** of 30+ critical healthcare terms

---

## Features

| Module | Description |
|--------|-------------|
| 🏠 **Dashboard** | Industry overview — $4.5T market stats, 8 ecosystem segments, 6 key trends |
| 🔄 **Workflow Explorer** | 4 complete workflows: Patient Journey · RCM · Clinical Ops · Value-Based Care |
| 🌐 **Stakeholder Map** | 8 stakeholders with goals, pain points, digital needs — grid & list views |
| 🚀 **Digital Strategy Canvas** | 6 transformation domains with use cases, ROI, and strategic considerations |
| 🎮 **Scenario Simulator** | 3 real-world scenarios with expert-level questions and explanations |
| 📖 **Glossary Hub** | 30 essential terms — searchable, filterable, with critical terms highlighted |

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | React 18 |
| **Build Tool** | Vite 4 |
| **Styling** | Pure CSS with CSS Variables (dark theme) |
| **State** | React Hooks (useState, useMemo) |
| **Hosting** | Netlify (free tier) |
| **CI/CD** | GitHub Actions |
| **Version Control** | Git + GitHub |

---

## Project Structure

```
healthcare-strategy/
│
├── .github/
│   └── workflows/
│       ├── deploy.yml              # Auto-deploy on every push to main
│       └── scheduled-deploy.yml   # Scheduled deploy every 23 hours
│
├── public/
│   └── vite.svg
│
├── src/
│   ├── assets/                    # Static assets
│   │
│   ├── components/                # React page components
│   │   ├── Dashboard.jsx
│   │   ├── WorkflowExplorer.jsx
│   │   ├── StakeholderMap.jsx
│   │   ├── DigitalStrategy.jsx
│   │   ├── ScenarioSimulator.jsx
│   │   └── GlossaryHub.jsx
│   │
│   ├── constants/
│   │   └── theme.js               # Colors, nav items, design tokens
│   │
│   ├── data/
│   │   └── healthcareData.js      # All domain data
│   │
│   ├── styles/
│   │   ├── App.css                # Component & layout styles
│   │   └── index.css              # Global CSS variables & reset
│   │
│   ├── utils/
│   │   └── helpers.js             # Shared utility functions
│   │
│   ├── App.jsx                    # Root app + sidebar navigation
│   └── main.jsx                   # React entry point
│
├── .claude/
│   └── launch.json                # Local dev config (port 3001)
│
├── index.html
├── netlify.toml                   # Netlify build + SPA redirect + headers
├── package.json
├── vite.config.js
└── README.md
```

---

## Getting Started

### Prerequisites
- Node.js v18+
- npm v9+

### Installation

```bash
# Clone the repository
git clone https://github.com/Annam187/healthcare-strategy.git
cd healthcare-strategy

# Install dependencies
npm install

# Start local dev server (port 3001)
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser.

### Build for Production

```bash
npm run build     # Builds to /dist
npm run preview   # Preview production build locally
```

---

## Deployment

### Live URL
🌐 [https://fluffy-taiyaki-ddc1f5.netlify.app](https://fluffy-taiyaki-ddc1f5.netlify.app)

### Auto Deploy on Push
Every `git push` to `main` triggers an automatic Netlify deployment:

```bash
git add .
git commit -m "describe your change"
git push
# ✅ Site updates live within ~60 seconds
```

---

## Auto-Deploy Setup

Two GitHub Actions workflows keep the site always live:

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| `deploy.yml` | Every push to `main` | Deploy latest code changes |
| `scheduled-deploy.yml` | Every 23 hours (cron) | Keep site alive & verified |

### Required GitHub Secrets

Add these in **GitHub repo → Settings → Secrets → Actions**:

| Secret | Where to Get |
|--------|-------------|
| `NETLIFY_AUTH_TOKEN` | [app.netlify.com/user/applications](https://app.netlify.com/user/applications) → Personal access tokens |
| `NETLIFY_SITE_ID` | Netlify Dashboard → Site → Site configuration → Site ID |

---

## Module Guide

### 🔄 Workflow Explorer
Four end-to-end healthcare workflows — click any step to see actors, systems, pain points, digital opportunities, and KPIs:
- **Patient Journey** — 7 steps from awareness to post-care
- **Revenue Cycle Management (RCM)** — 7 steps from scheduling to collections
- **Clinical Operations** — 6 steps from staffing to care coordination
- **Value-Based Care (VBC)** — 6 steps from population identification to shared savings

### 🌐 Stakeholder Map
8 key healthcare stakeholders with deep-dive profiles:
Patients · Providers · Hospitals & Health Systems · Payers · CMS · Pharma · Health IT Vendors · Employers

### 🚀 Digital Strategy Canvas
6 transformation areas with use case tables (impact, complexity, ROI):
AI/Automation · Interoperability · Virtual Care · Analytics · Patient Experience · Cybersecurity

### 🎮 Scenario Simulator
3 real-world BA scenarios with scored questions and expert explanations:
- ED Overcrowding Crisis (Hard)
- Value-Based Care Transition (Medium)
- RCM Turnaround (Easy)

### 📖 Glossary Hub
30 essential terms across 8 categories — searchable and filterable:
VBC · RCM · Clinical · Technology · Regulatory · Quality · Payer · Administrative

---

## License

MIT — free to fork and adapt for personal or educational use.

---

<div align="center">
  Built with ⚕️ for Healthcare Business Analysts & Digital Strategists
  <br/><br/>
  <a href="https://fluffy-taiyaki-ddc1f5.netlify.app">🌐 Live App</a> &nbsp;·&nbsp;
  <a href="https://github.com/Annam187/healthcare-strategy">📦 GitHub Repo</a>
</div>
