import React from "react";
import { AppProvider, useApp } from "./context/AppContext";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Transactions from "./components/Transactions";
import Insights from "./components/Insights";
import "./App.css";

function AppContent() {
  const { activeTab, darkMode } = useApp();

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <Navbar />
      <main className="main-content">
        {activeTab === "dashboard" && <Dashboard />}
        {activeTab === "transactions" && <Transactions />}
        {activeTab === "insights" && <Insights />}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
