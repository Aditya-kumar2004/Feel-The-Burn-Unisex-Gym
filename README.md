# Feel The Burn Unisex Gym

![Feel The Burn Banner](https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop)

**Feel The Burn Unisex Gym** is a modern, high-performance fitness website designed to showcase gym facilities, trainers, and services. It features a fully functional backend for handling contact inquiries with automated email notifications.

## 🚀 Key Features

- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop.
- **Modern UI/UX**: Premium aesthetic with dark/light mode support, smooth scroll animations (Framer Motion), and glassmorphism effects.
- **Functional Contact Form**:
  - **Backend Integration**: Powered by Node.js, Express, and Nodemailer.
  - **Secure Validation**: Robust email validation (Regex) on the server side.
  - **Instant Feedback**: Professional "Success Modal" with animations upon submission.
- **Smart Email Notifications**:
  - **Admin Alert**: Immediate "New Lead Alert" email sent to the gym admin with structured details.
  - **Auto-Reply**: Professional automated email sent to the user confirming their inquiry.
- **Interactive Elements**:
  - **Trainer Cards**: Clean, structured cards for trainer profiles.
  - **Clickable Location**: Integrated Google Maps link for easy navigation.
  - **Clickable Phone**: One-tap calling functionality.

## 🛠️ Technology Stack

### Frontend
- **[React](https://reactjs.org/)**: Component-based UI library.
- **[Vite](https://vitejs.dev/)**: Fast build tool and development server.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS for custom designs.
- **[Framer Motion](https://www.framer.com/motion/)**: Production-ready animation library.
- **[Lucide React](https://lucide.dev/)**: Clean and consistent icons.
- **[Shadcn UI](https://ui.shadcn.com/)**: Accessible and customizable UI components.

### Backend
- **[Node.js](https://nodejs.org/)**: JavaScript runtime environment.
- **[Express.js](https://expressjs.com/)**: Web framework for handling API requests.
- **[Nodemailer](https://nodemailer.com/)**: Module for sending emails.
- **[Dotenv](https://www.npmjs.com/package/dotenv)**: Environmental variable management.

## 📦 Installation & Setup

To get the project running locally, you need to set up both the **Frontend** and the **Backend**.

### Prerequisites
- Node.js installed on your machine.
- A Gmail account with an **App Password** (for email functionality).

### 1. Clone the Repository
```bash
git clone https://github.com/Aditya-kumar2004/Gym-fitness.git
cd Gym-fitness
```

### 2. Backend Setup
Navigate to the backend folder and install dependencies:
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory with your email credentials:
```env
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-digit-app-password
```

Start the backend server:
```bash
npm run dev
# Server will run on http://localhost:5000
```

### 3. Frontend Setup
Open a new terminal, navigate to the root directory, and install dependencies:
```bash
# Return to root directory if you are in backend
cd ..
npm install
```

Start the frontend development server:
```bash
npm run dev
# App will run on http://localhost:8080 (or similar)
```

## 🚀 Deployment

### Frontend
The frontend can be deployed on **Vercel**, **Netlify**, or **GitHub Pages**. Only the `dist` folder needs to be hosted.

### Backend
The backend needs to be hosted on a service that supports Node.js, such as **Glitch**, **Render**, **Railway**, or **Heroku**.
- **Important**: You must update the `fetch` URL in `src/components/ContactSection.jsx` to point to your deployed backend URL instead of `http://localhost:5000`.

## 👤 Author

**Aditya Kumar**

- GitHub: [@Aditya-kumar2004](https://github.com/Aditya-kumar2004)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
