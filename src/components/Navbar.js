import React from "react";
import { useApp } from "../context/AppContext";

const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: "📊" },
  { id: "transactions", label: "Transactions", icon: "💳" },
  { id: "insights", label: "Insights", icon: "💡" },
];

export default function Navbar() {
  const { activeTab, setActiveTab, role, setRole, darkMode, setDarkMode } = useApp();

  return (
    <header className="navbar">
      <div className="navbar-brand">
        <span className="brand-icon">₹</span>
        <span className="brand-text">FinTrack</span>
      </div>

      <nav className="navbar-nav">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className={`nav-btn ${activeTab === item.id ? "active" : ""}`}
            onClick={() => setActiveTab(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="navbar-actions">
        <div className="role-switcher">
          <span className="role-label">Role:</span>
          <select
            className="role-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="viewer">👁 Viewer</option>
            <option value="admin">🔧 Admin</option>
          </select>
        </div>

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
          title="Toggle dark mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
}
