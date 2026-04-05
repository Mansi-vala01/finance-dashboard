# FinTrack — Finance Dashboard

A clean and interactive personal finance dashboard built with **React.js**, **Recharts**, and **CSS Variables** for full dark mode support.

## 🚀 Live Demo
> [Add your Vercel/Netlify URL here after deployment]

---

## 📦 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React.js 18 (Create React App) |
| Charts | Recharts |
| Icons | Emoji-based (no dependency) |
| Styling | Custom CSS with CSS Variables |
| State | React Context API |
| Fonts | DM Sans + DM Mono (Google Fonts) |

---

## ✅ Features Implemented

- **Dashboard Overview** — Summary cards (Balance, Income, Expenses, Savings Rate)
- **Time-Based Visualization** — Line chart showing income/expense/balance trend over months
- **Categorical Visualization** — Pie chart showing spending breakdown by category
- **Transaction List** — Full list with date, amount, category, type
- **Transaction Filtering** — Filter by type (income/expense) and category
- **Transaction Sorting & Search** — Search by name/category, sort by date or amount
- **Role-Based UI** — Viewer (read-only) vs Admin (add/edit/delete transactions)
- **Insights Section** — Highest spending category, savings rate, monthly comparison, key observations
- **State Management** — React Context API for transactions, filters, role, dark mode
- **Responsive Design** — Works on mobile, tablet, and desktop
- **Dark Mode** — Full dark/light theme toggle
- **Export CSV** — Download filtered transactions as CSV

---

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 16+ installed ([download here](https://nodejs.org))
- npm (comes with Node.js)

### Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/finance-dashboard.git

# 2. Navigate into the project
cd finance-dashboard

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

The app will open at **http://localhost:3000**

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `/build` folder.

---

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Top navigation with role switcher & dark mode
│   ├── Dashboard.js       # Main dashboard overview
│   ├── SummaryCards.js    # 4 financial summary cards
│   ├── Charts.js          # Line, Pie, Bar charts using Recharts
│   ├── Transactions.js    # Transaction list with filter/sort/search
│   ├── TransactionModal.js# Add/Edit transaction modal (Admin only)
│   └── Insights.js        # Insights & observations section
├── context/
│   └── AppContext.js      # Global state (Context API)
├── data/
│   └── transactions.js    # Mock transaction data & helpers
├── App.js                 # Root component
├── App.css                # All styles with CSS variables
└── index.js               # Entry point
```

---

## 🎭 Role-Based UI

| Feature | Viewer | Admin |
|---------|--------|-------|
| View Dashboard | ✅ | ✅ |
| View Transactions | ✅ | ✅ |
| View Insights | ✅ | ✅ |
| Add Transaction | ❌ | ✅ |
| Edit Transaction | ❌ | ✅ |
| Delete Transaction | ❌ | ✅ |
| Export CSV | ✅ | ✅ |

Switch roles using the dropdown in the navbar.

---

## 🎨 Design Decisions

- **CSS Variables** were used for theming instead of a CSS-in-JS library to keep bundle size small and demonstrate CSS skills
- **React Context API** was chosen over Redux because the app state is simple enough — using Redux here would be over-engineering
- **Recharts** was selected for its React-first API and good responsiveness out of the box
- **Mock data** uses realistic Indian Rupee amounts and Indian-style transactions to feel authentic
- **DM Sans + DM Mono** fonts chosen for a modern, financial-app aesthetic

---

## ⚠️ Known Limitations

- Data is not persisted (resets on page refresh) — localStorage integration is straightforward to add
- Only 3 months of mock data available for trend charts
- No backend or authentication — role switching is frontend-only for demo purposes

---

## 📝 License
This project was built as a frontend assignment submission.
