import React, { createContext, useContext, useState, useCallback } from "react";

// Global app state using React Context API
// Handles: transactions, filters, role-based access, dark mode
// Note: using Context instead of Redux since state is simple enough
// Global app state using React Context API
// Handles: transactions, filters, role-based access, dark mode
// Note: using Context instead of Redux since state is simple enoughimport React, { createContext, useContext, useState, useCallback } from "react";
import { transactions as initialTransactions } from "../data/transactions";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [role, setRole] = useState("viewer"); // "viewer" | "admin"
  const [transactions, setTransactions] = useState(initialTransactions);
  const [darkMode, setDarkMode] = useState(false);
  const [filters, setFilters] = useState({
    search: "",
    type: "all",
    category: "all",
    sortBy: "date-desc",
  });
  const [activeTab, setActiveTab] = useState("dashboard");

  const addTransaction = useCallback((txn) => {
    setTransactions((prev) => [
      { ...txn, id: Date.now(), amount: Number(txn.amount) },
      ...prev,
    ]);
  }, []);

  const editTransaction = useCallback((id, updated) => {
    setTransactions((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updated, amount: Number(updated.amount) } : t))
    );
  }, []);

  const deleteTransaction = useCallback((id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const filteredTransactions = transactions
    .filter((t) => {
      const matchSearch =
        t.description.toLowerCase().includes(filters.search.toLowerCase()) ||
        t.category.toLowerCase().includes(filters.search.toLowerCase());
      const matchType = filters.type === "all" || t.type === filters.type;
      const matchCategory = filters.category === "all" || t.category === filters.category;
      return matchSearch && matchType && matchCategory;
    })
    .sort((a, b) => {
      if (filters.sortBy === "date-desc") return new Date(b.date) - new Date(a.date);
      if (filters.sortBy === "date-asc") return new Date(a.date) - new Date(b.date);
      if (filters.sortBy === "amount-desc") return b.amount - a.amount;
      if (filters.sortBy === "amount-asc") return a.amount - b.amount;
      return 0;
    });

  const totalIncome = transactions.filter((t) => t.type === "income").reduce((s, t) => s + t.amount, 0);
  const totalExpenses = transactions.filter((t) => t.type === "expense").reduce((s, t) => s + t.amount, 0);
  const totalBalance = totalIncome - totalExpenses;

  return (
    <AppContext.Provider
      value={{
        role, setRole,
        darkMode, setDarkMode,
        filters, setFilters,
        activeTab, setActiveTab,
        transactions, filteredTransactions,
        addTransaction, editTransaction, deleteTransaction,
        totalIncome, totalExpenses, totalBalance,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
