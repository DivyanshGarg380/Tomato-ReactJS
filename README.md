# Tomato — Zomato-style Food Ordering Frontend

A modern, responsive food-ordering web app built with **React.js** that mimics the core frontend features of Zomato. The app ("Tomato") focuses on slick UI, easy ordering flows, and a seamless checkout experience — perfect for demos, portfolio projects, or as a starter for a full-stack food delivery platform.

---

## Features

* Order your favourite foods
* Add food items to cart (supports quantity).
* Cart summary with subtotal, delivery fee calculation, coupon input, and final total.
* Checkout flow with address selection, delivery instructions, and payment option stub.
* Responsive, mobile-first UI with modern design patterns (cards, modals, sticky cart, animations).
* Login/Sign-up page (UI only — feature present but not functional, no backend or Firebase integration).
* Mock data used for restaurants & menus (no backend).
* Accessibility-friendly components and keyboard support for key flows.

---

## Tech stack

* **Frontend:** React (Vite or Create React App), React Router
* **State management:** React Context API
* **Styling:** CSS
* **Mock API:** Local JSON files
* **Deployment:** Netlify / Vercel / GitHub Pages

---

## Getting started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/Tomato-ReactJS.git
cd Tomato-ReactJS
```

### 2. Install dependencies

```bash
npm install
# or
yarn
```

### 3. Run the app locally

```bash
npm run dev
# or for CRA
npm start
```

Open [http://localhost:3000](http://localhost:3000) (or the port printed by Vite) to view the app.

---

## Authentication (UI only)

* Includes Login and Sign-up pages with form fields and validation.
* No backend or Firebase integration — forms are non-functional and for demo purposes only.
* Will be integrated in the future :)

---

## Deployment

* Build the app with `npm run build` and deploy to Netlify/Vercel.

---

## Extending the app (ideas)

* Add a working backend for orders, restaurants, and user accounts.
* Connect to a payment gateway (Stripe/PayPal).
* Add real-time order tracking with WebSockets.
* Add ratings & reviews for restaurants and dishes.


## License

MIT License — feel free to use this repo for learning and portfolio projects.

---
