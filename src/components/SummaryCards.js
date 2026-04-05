import React from "react";
import { useApp } from "../context/AppContext";

const fmt = (n) =>
  "₹" + Math.abs(n).toLocaleString("en-IN", { minimumFractionDigits: 0 });

export default function SummaryCards() {
  const { totalBalance, totalIncome, totalExpenses } = useApp();

  const cards = [
    {
      title: "Total Balance",
      value: fmt(totalBalance),
      icon: "💰",
      color: "card-balance",
      sub: "Current net worth",
    },
    {
      title: "Total Income",
      value: fmt(totalIncome),
      icon: "📈",
      color: "card-income",
      sub: "Total money received",
    },
    {
      title: "Total Expenses",
      value: fmt(totalExpenses),
      icon: "📉",
      color: "card-expense",
      sub: "Total money spent",
    },
    {
      title: "Savings Rate",
      value: totalIncome > 0 ? Math.round(((totalIncome - totalExpenses) / totalIncome) * 100) + "%" : "0%",
      icon: "🎯",
      color: "card-savings",
      sub: "% of income saved",
    },
  ];

  return (
    <div className="summary-grid">
      {cards.map((card) => (
        <div key={card.title} className={`summary-card ${card.color}`}>
          <div className="card-header">
            <span className="card-icon">{card.icon}</span>
            <span className="card-title">{card.title}</span>
          </div>
          <div className="card-value">{card.value}</div>
          <div className="card-sub">{card.sub}</div>
        </div>
      ))}
    </div>
  );
}
