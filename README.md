**Emoji Hub**

Welcome to **Emoji Hub** — a web application for searching, browsing, and exploring thousands of emojis!


### 📌 **Project Overview**

**Emoji Hub** is a modern web app that allows users to:

* Browse a large collection of emojis sorted by category
* Search emojis by name
* Filter emojis by category
* Sort emojis alphabetically (A–Z and Z–A)
* View detailed emoji information, including LLM-generated vibe-based descriptions
* Add emojis to a local favorites list

---

### ⚙️ **Installation and Running Instructions**

```bash
git clone https://github.com/zhanerkemy/emojihub.git
cd emojihub
npm install
cd client
npm install
```

To run both server and client:

```bash
npm run dev
```

Then open your browser and go to: [http://localhost:5173](http://localhost:5173)

---

### 🧩 **Tech Stack and Development Process**

* **Backend (server):** Built with **Node.js** and **Express**, handles API requests and generates emoji descriptions using LLMs.
* **Frontend (client):** Built with **React** and **Vite** for fast development and performance.
* **Design:** Minimalist and modern, focused on clean user experience.
* **Responsive Grid:** Implemented using **CSS Grid** and media queries for mobile and desktop adaptability.
* **Typing animation** on the homepage is powered by `react-simple-typewriter` to create an engaging intro.

---

### 💡 **Unique Features and Approaches**

* Typewriter animation for interactive homepage experience
* Incremental emoji loading (“More emojis…”) to optimize performance
* Combined filtering and sorting system (by category and alphabet)
* Secure API key management using `.env` files (excluded via `.gitignore`)

---

### ❓ **Why This Tech Stack?**

* **React + Vite:** Fast development and excellent performance
* **Node.js + Express:** Lightweight setup for custom API services
* **Axios:** Simplifies HTTP requests
* **Vercel:** Easy and fast frontend deployment
* **OpenAI API:** Enables creative and context-rich emoji descriptions
