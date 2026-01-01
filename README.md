# Lumen Vision 🕶️

![Project Status](https://img.shields.io/badge/Status-Active-green)
![License](https://img.shields.io/badge/License-MIT-blue)
![Tech](https://img.shields.io/badge/Built%20With-React%20%7C%20TypeScript%20%7C%20Tailwind-black)

**Lumen Vision** is a high-performance, cinematic landing page for next-generation AR Smart Glasses. It features a premium dark-themed UI, immersive parallax effects, and smooth scroll-driven animations designed to showcase hardware products with elegance.

🔗 **Live Demo:** [Insert Your Vercel/Netlify Link Here]

---

## ✨ Key Features

* **Cinematic Hero Section**: Full-screen video backgrounds with gradient overlays.
* **Immersive Animations**: Powered by **Framer Motion** for scroll-triggered reveals, magnetic buttons, and smooth transitions.
* **Interactive 3D Elements**:
    * **360° Product Carousel**: A feature-rich slider with lens-focus effects.
    * **Parallax Scroll**: Depth-based scrolling layers for a premium feel.
* **Bento Grid Layout**: A modern, Apple-style grid to showcase technical specifications.
* **Wall of Love**: An infinite scrolling marquee for testimonials.
* **Custom Loader**: A "System Boot" style loading screen with scanning animations.
* **Responsive Design**: Fully optimized for mobile, tablet, and desktop with a custom full-screen mobile menu.

---

## 🛠️ Tech Stack

This project is built using modern web development best practices:

* **Framework**: [React](https://react.dev/) (Vite)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Animations**: [Framer Motion](https://www.framer.com/motion/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Routing**: React Router (if applicable) / Single Page Architecture

---

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

* Node.js (v16 or higher)
* npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/Codewithhaider29/lumen-vision.git](https://github.com/Codewithhaider29/lumen-vision.git)
    cd lumen-vision
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Visit `http://localhost:5173` to view the application.

---

## 📂 Project Structure

```bash
src/
├── assets/          # Images, Videos, and SVGs (dark logo.svg, etc.)
├── components/      # Reusable UI Components
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── ProductCard.tsx
│   ├── BentoGrid.tsx
│   ├── Loader.tsx
│   └── ...
├── App.tsx          # Main Application Entry
├── main.tsx         # DOM Rendering
└── index.css        # Tailwind directives & global styles
🎨 UI Highlights
1. The "Lens" Loader
A custom entry animation that mimics a camera lens focusing and systems calibrating before revealing the website content.

2. Parallax Banner
A scroll-driven section where the background image moves at a different speed than the text, creating a true 3D depth effect without using heavy 3D libraries.

3. Interactive Pricing
Glassmorphism cards that highlight the "Best Value" option with a glow effect and staggered entry animations.

🤝 Contributing
Contributions are welcome! If you have suggestions for improvements or bug fixes:

Fork the repository.

Create a new branch (git checkout -b feature/YourFeature).

Commit your changes (git commit -m 'Add some feature').

Push to the branch (git push origin feature/YourFeature).

Open a Pull Request.

📄 License
This project is open source and available under the MIT License.

👤 Author
Haider Ali

GitHub: @Codewithhaider29