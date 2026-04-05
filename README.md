# MyFinance — Personal Finance Dashboard

A clean and interactive personal finance dashboard built with **React.js**, **Recharts**, and **CSS Variables** for full dark mode support.

## 🚀 Live Demo
> https://finance-dashboard-omega-dusky-65.vercel.app/

---

## 📦 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React.js 18 (Create React App) |
| Charts | Recharts |
| Icons | Emoji-based (no dependency) |
| Styling | Custom CSS with CSS Variables |
| State | React Context API |
| Fonts | Poppins + Fira Code (Google Fonts) |

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
git clone https://github.com/your_actual_name/finance-dashboard.git

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

## 🎨 Why I Made These Choices
 
- I used **React** because I wanted to learn component-based thinking and 
  it is what most companies use.
- I chose **Context API** instead of Redux because the data is not that 
  complex. Redux felt like too much setup for a small project.
- I used **Recharts** for charts because it was easy to integrate with 
  React and had good documentation.
- For styling I used plain CSS with variables — I avoided Tailwind because 
  I wanted to practice writing CSS myself.
- I added **dark mode** using CSS variables which was my first time doing 
  it this way and I liked how clean it turned out.
- I struggled initially with Recharts tooltip not picking up CSS 
  variables in dark mode — fixed it by passing contentStyle as 
  inline props directly to the Tooltip component.
- This was my first React project where I used Context API properly 
  and it helped me understand how state flows between components.


---

## ⚠️ Known Limitations

- Data is not persisted (resets on page refresh) — localStorage integration is straightforward to add
- Only 3 months of mock data available for trend charts
- No backend or authentication — role switching is frontend-only for demo. 
  In a real app I would use JWT tokens stored in httpOnly cookies.

---

## 🐛 Known Issues / Things I Would Improve
 
- Data resets when page is refreshed — would add localStorage next
- Charts don't look great on very small screens (below 360px width)
- The role switcher is just a dropdown — in real app would use JWT auth
- Would like to add a monthly budget feature where user can set limits
- Dark mode flickers slightly on first load

---

## 🧠 What I Learned Building This

- How React Context API works for sharing state across components 
  without prop drilling
- Using CSS variables for theming — much simpler than I expected 
  for dark mode
- Recharts library API and how to make charts responsive
- How to structure a multi-page React app without React Router 
  (using conditional rendering instead)
- Git commit discipline — making small meaningful commits instead 
  of one big commit at the end



## 📝 License
This project was built as a frontend assignment submission.
