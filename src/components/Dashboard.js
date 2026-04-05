import React from "react";
import SummaryCards from "./SummaryCards";
import { BalanceTrendChart, SpendingBreakdownChart } from "./Charts";
import { useApp } from "../context/AppContext";

const fmt = (n) => "₹" + Number(n).toLocaleString("en-IN");

export default function Dashboard() {
  const { transactions, role } = useApp();
  const recent = [...transactions]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2 className="page-title">Dashboard</h2>
          <p className="page-sub">Welcome back! Here's your financial overview.</p>
        </div>
        {role === "admin" && (
          <span className="admin-badge">🔧 Admin Mode</span>
        )}
      </div>

      <SummaryCards />

      <div className="charts-grid">
        <BalanceTrendChart />
        <SpendingBreakdownChart />
      </div>

      <div className="recent-section">
        <h3 className="section-title">🕐 Recent Transactions</h3>
        {recent.length === 0 ? (
          <div className="empty-state">
            <span className="empty-icon">📭</span>
            <p>No transactions yet.</p>
          </div>
        ) : (
          <div className="recent-list">
            {recent.map((txn) => (
              <div key={txn.id} className="recent-item">
                <div className="recent-left">
                  <span className="recent-category-dot" style={{ background: txn.type === "income" ? "#10b981" : "#ef4444" }} />
                  <div>
                    <div className="recent-desc">{txn.description}</div>
                    <div className="recent-meta">{txn.category} · {new Date(txn.date).toLocaleDateString("en-IN", { day: "2-digit", month: "short" })}</div>
                  </div>
                </div>
                <span className={`recent-amount ${txn.type}`}>
                  {txn.type === "income" ? "+" : "-"}{fmt(txn.amount)}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
