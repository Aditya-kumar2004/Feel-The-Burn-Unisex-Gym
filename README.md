<div align="center">

<img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3" alt="Feel The Burn Gym Banner" width="100%" style="border-radius: 12px;" />

<br/>
<br/>

# 🔥 Feel The Burn — Unisex Gym

### A modern, high-performance gym website with a fully integrated backend for contact & email management.

<br/>

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-e11d48?style=for-the-badge&logo=vercel&logoColor=white)](https://github.com/Aditya-kumar2004/Feel-The-Burn-Unisex-Gym)
[![GitHub Stars](https://img.shields.io/github/stars/Aditya-kumar2004/Feel-The-Burn-Unisex-Gym?style=for-the-badge&color=e11d48)](https://github.com/Aditya-kumar2004/Feel-The-Burn-Unisex-Gym/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/Aditya-kumar2004/Feel-The-Burn-Unisex-Gym?style=for-the-badge&color=e11d48)](https://github.com/Aditya-kumar2004/Feel-The-Burn-Unisex-Gym/forks)
[![License: MIT](https://img.shields.io/badge/License-MIT-e11d48?style=for-the-badge)](LICENSE)

</div>

---

## 🚀 Overview

**Feel The Burn Unisex Gym** is a production-ready, full-stack gym website built for a real gym located in Ranchi, Jharkhand. It is engineered to deliver a premium digital presence — from buttery smooth animations to a working contact form that fires real emails to both the gym admin and the customer, all in real time.

> Built with modern web technologies, deployed on Vercel, and designed to convert visitors into gym members.

---

## ✨ Key Features

- 🎨 **Premium UI/UX** — Dark/Light mode, glassmorphism effects, and smooth micro-animations via Framer Motion.
- 📱 **Fully Responsive** — Flawlessly optimized for mobile, tablet, and desktop.
- 📬 **Functional Contact Form**:
  - Real-time email delivery to admin (New Lead Alert) and customer (Auto-Reply).
  - Robust server-side email validation with strict regex.
  - Professional branded HTML email templates.
- ⚡ **Optimistic UI** — Success feedback is instant; emails are sent in the background (fire-and-forget).
- 🗺️ **Interactive Elements** — Embedded Google Maps, one-tap calling, and clickable trainer cards.
- 🔒 **Serverless Backend** — Express.js API deployed as a Vercel Serverless Function (`api/index.js`).

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18, Vite, Tailwind CSS, Framer Motion |
| **UI Components** | Shadcn UI, Radix UI, Lucide React |
| **Backend** | Node.js, Express.js (Vercel Serverless) |
| **Email** | Nodemailer + Gmail SMTP |
| **Deployment** | Vercel (Frontend + Serverless API) |
| **Routing** | React Router DOM v6 |

---

## 📁 Project Structure

```
Feel-The-Burn-Unisex-Gym/
├── api/
│   └── index.js          # Express Serverless Function (Vercel API)
├── public/
│   └── assets/           # Static assets (icons, images)
├── src/
│   ├── components/       # All page sections (Hero, Trainers, Contact…)
│   ├── hooks/            # Custom React hooks
│   ├── assets/           # Images, logo, SVGs
│   └── main.jsx          # App entry point
├── vercel.json           # Vercel deployment config
├── vite.config.js        # Vite build config
└── package.json          # Frontend + Backend dependencies
```

---

## ⚙️ Installation & Setup

To run the project locally, follow the steps below.

### Prerequisites
- **Node.js** (v18 or above) installed on your machine.
- A **Gmail account** with an [App Password](https://myaccount.google.com/apppasswords) enabled.

### 1. Clone the Repository
```bash
git clone https://github.com/Aditya-kumar2004/Feel-The-Burn-Unisex-Gym.git
cd Feel-The-Burn-Unisex-Gym
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory:
```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-16-digit-app-password
```

### 4. Run the App
```bash
npm run dev
# App runs on http://localhost:8080
```

> The `/api/contact` endpoint is proxied to port 5000 in development via `vite.config.js`.

---

## 🌐 Deployment on Vercel

This project is pre-configured for one-click Vercel deployment.

1. Push to GitHub.
2. Go to [Vercel Dashboard](https://vercel.com) → **Add New Project**.
3. Import your repository.
4. Set **Root Directory** → `frontend` (if using the monorepo layout).
5. Add the following **Environment Variables** in Vercel:
   - `EMAIL_USER`
   - `EMAIL_PASS`
6. Click **Deploy** 🚀

The `vercel.json` handles all routing — static frontend pages AND the `/api/*` serverless backend routes automatically.

---

## 🏋️ About Feel The Burn Gym

**Feel The Burn Unisex Gym** is a state-of-the-art fitness facility located at:

📍 Lower Chutia Samlong, Namkum, Ranchi, Jharkhand – 834010  
📞 +91 081026 66661  
🕐 Mon–Sat: 5:15 AM – 10:00 PM | Sunday: Open

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to open an [issue](https://github.com/Aditya-kumar2004/Feel-The-Burn-Unisex-Gym/issues) or submit a pull request.

---

## 📄 License

Released under the [MIT License](LICENSE).

---

<div align="center">

*Created with ❤️ by **[Aditya Kumar](https://github.com/Aditya-kumar2004)***

</div>
