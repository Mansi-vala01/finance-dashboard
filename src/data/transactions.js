export const CATEGORIES = [
  "Food & Dining",
  "Shopping",
  "Transport",
  "Entertainment",
  "Health",
  "Housing",
  "Utilities",
  "Salary",
  "Freelance",
  "Investment",
];

export const transactions = [
  { id: 1,  date: "2024-01-05", description: "Salary Credit",          category: "Salary",        amount: 85000, type: "income"  },
  { id: 2,  date: "2024-01-06", description: "Swiggy Order",           category: "Food & Dining",  amount: 450,   type: "expense" },
  { id: 3,  date: "2024-01-08", description: "Uber Ride",              category: "Transport",      amount: 220,   type: "expense" },
  { id: 4,  date: "2024-01-10", description: "Amazon Shopping",        category: "Shopping",       amount: 3200,  type: "expense" },
  { id: 5,  date: "2024-01-12", description: "Netflix Subscription",   category: "Entertainment",  amount: 649,   type: "expense" },
  { id: 6,  date: "2024-01-14", description: "Electricity Bill",       category: "Utilities",      amount: 1800,  type: "expense" },
  { id: 7,  date: "2024-01-15", description: "Freelance Project",      category: "Freelance",      amount: 25000, type: "income"  },
  { id: 8,  date: "2024-01-17", description: "Doctor Visit",           category: "Health",         amount: 800,   type: "expense" },
  { id: 9,  date: "2024-01-18", description: "Grocery Store",          category: "Food & Dining",  amount: 2100,  type: "expense" },
  { id: 10, date: "2024-01-20", description: "Rent Payment",           category: "Housing",        amount: 18000, type: "expense" },
  { id: 11, date: "2024-01-22", description: "Stock Dividend",         category: "Investment",     amount: 5000,  type: "income"  },
  { id: 12, date: "2024-01-25", description: "Zomato Order",           category: "Food & Dining",  amount: 380,   type: "expense" },
  { id: 13, date: "2024-01-26", description: "Petrol",                 category: "Transport",      amount: 2500,  type: "expense" },
  { id: 14, date: "2024-01-28", description: "Gym Membership",        category: "Health",         amount: 1500,  type: "expense" },
  { id: 15, date: "2024-01-30", description: "Movie Tickets",          category: "Entertainment",  amount: 600,   type: "expense" },

  { id: 16, date: "2024-02-05", description: "Salary Credit",          category: "Salary",        amount: 85000, type: "income"  },
  { id: 17, date: "2024-02-07", description: "Restaurant Dinner",      category: "Food & Dining",  amount: 1200,  type: "expense" },
  { id: 18, date: "2024-02-09", description: "Bus Pass",               category: "Transport",      amount: 500,   type: "expense" },
  { id: 19, date: "2024-02-11", description: "Myntra Purchase",        category: "Shopping",       amount: 2800,  type: "expense" },
  { id: 20, date: "2024-02-13", description: "Spotify Premium",        category: "Entertainment",  amount: 119,   type: "expense" },
  { id: 21, date: "2024-02-14", description: "Water Bill",             category: "Utilities",      amount: 400,   type: "expense" },
  { id: 22, date: "2024-02-16", description: "Freelance Project",      category: "Freelance",      amount: 18000, type: "income"  },
  { id: 23, date: "2024-02-18", description: "Pharmacy",               category: "Health",         amount: 650,   type: "expense" },
  { id: 24, date: "2024-02-20", description: "Grocery Store",          category: "Food & Dining",  amount: 1900,  type: "expense" },
  { id: 25, date: "2024-02-22", description: "Rent Payment",           category: "Housing",        amount: 18000, type: "expense" },
  { id: 26, date: "2024-02-24", description: "Mutual Fund Return",     category: "Investment",     amount: 3200,  type: "income"  },
  { id: 27, date: "2024-02-26", description: "Coffee Shop",            category: "Food & Dining",  amount: 280,   type: "expense" },
  { id: 28, date: "2024-02-28", description: "Auto Rickshaw",          category: "Transport",      amount: 180,   type: "expense" },

  { id: 29, date: "2024-03-05", description: "Salary Credit",          category: "Salary",        amount: 85000, type: "income"  },
  { id: 30, date: "2024-03-06", description: "Swiggy Order",           category: "Food & Dining",  amount: 520,   type: "expense" },
  { id: 31, date: "2024-03-08", description: "Ola Cab",                category: "Transport",      amount: 310,   type: "expense" },
  { id: 32, date: "2024-03-10", description: "Flipkart Order",         category: "Shopping",       amount: 4500,  type: "expense" },
  { id: 33, date: "2024-03-12", description: "Prime Video",            category: "Entertainment",  amount: 299,   type: "expense" },
  { id: 34, date: "2024-03-15", description: "Electricity Bill",       category: "Utilities",      amount: 2100,  type: "expense" },
  { id: 35, date: "2024-03-17", description: "Freelance Project",      category: "Freelance",      amount: 32000, type: "income"  },
  { id: 36, date: "2024-03-19", description: "Dental Checkup",         category: "Health",         amount: 1200,  type: "expense" },
  { id: 37, date: "2024-03-21", description: "Grocery Store",          category: "Food & Dining",  amount: 2400,  type: "expense" },
  { id: 38, date: "2024-03-22", description: "Rent Payment",           category: "Housing",        amount: 18000, type: "expense" },
  { id: 39, date: "2024-03-25", description: "SIP Investment",         category: "Investment",     amount: 10000, type: "expense" },
  { id: 40, date: "2024-03-28", description: "Concert Tickets",        category: "Entertainment",  amount: 1500,  type: "expense" },
];

export const monthlyData = [
  { month: "Jan", income: 115000, expenses: 31199, balance: 83801 },
  { month: "Feb", income: 106200, expenses: 25847, balance: 80353 },
  { month: "Mar", income: 117000, expenses: 40829, balance: 76171 },
];

export const getCategoryTotals = (txns) => {
  const totals = {};
  txns
    .filter((t) => t.type === "expense")
    .forEach((t) => {
      totals[t.category] = (totals[t.category] || 0) + t.amount;
    });
  return Object.entries(totals)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);
};
