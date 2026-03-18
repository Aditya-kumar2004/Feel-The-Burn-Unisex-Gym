// ============================================================
//  Centralised API configuration
//  Change BASE_URL here ONCE to update all API calls across
//  the entire frontend.
// ============================================================

// In production this points to the deployed Render backend.
// In local development Vite's dev server serves on localhost:8080.
const BASE_URL = import.meta.env.VITE_API_URL || "https://feel-the-burn-unisex-gym.onrender.com";

export default BASE_URL;
