import React from "react";
import { useApp } from "../context/AppContext";
import { getCategoryTotals, monthlyData } from "../data/transactions";
import { MonthlyComparisonChart } from "./Charts";

const fmt = (n) => "₹" + Number(n).toLocaleString("en-IN");

export default function Insights() {
  const { transactions, totalIncome, totalExpenses } = useApp();

  const categoryTotals = getCategoryTotals(transactions);
  const topCategory = categoryTotals[0];
  const savingsRate = totalIncome > 0 ? ((totalIncome - totalExpenses) / totalIncome * 100).toFixed(1) : 0;

  const latestMonth = monthlyData[monthlyData.length - 1];
  const prevMonth = monthlyData[monthlyData.length - 2];
  const expenseChange = prevMonth ? (((latestMonth.expenses - prevMonth.expenses) / prevMonth.expenses) * 100).toFixed(1) : 0;
  const incomeChange = prevMonth ? (((latestMonth.income - prevMonth.income) / prevMonth.income) * 100).toFixed(1) : 0;

  const avgMonthlyExpense = monthlyData.reduce((s, m) => s + m.expenses, 0) / monthlyData.length;
  const avgMonthlyIncome = monthlyData.reduce((s, m) => s + m.income, 0) / monthlyData.length;

  const insights = [
    {
      icon: "🔥",
      title: "Top Spending Category",
      value: topCategory ? topCategory.name : "N/A",
      detail: topCategory ? `${fmt(topCategory.value)} spent total` : "",
      color: "insight-red",
    },
    {
      icon: "💹",
      title: "Savings Rate",
      value: savingsRate + "%",
      detail: savingsRate > 20 ? "Great job! Above 20% target" : "Try to save more than 20%",
      color: savingsRate > 20 ? "insight-green" : "insight-yellow",
    },
    {
      icon: "📅",
      title: "Avg Monthly Expense",
      value: fmt(avgMonthlyExpense),
      detail: "Across all tracked months",
      color: "insight-blue",
    },
    {
      icon: "💰",
      title: "Avg Monthly Income",
      value: fmt(avgMonthlyIncome),
      detail: "Across all tracked months",
      color: "insight-purple",
    },
  ];

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2 className="page-title">Insights</h2>
          <p className="page-sub">Smart observations from your financial data</p>
        </div>
      </div>

      <div className="insights-grid">
        {insights.map((ins) => (
          <div key={ins.title} className={`insight-card ${ins.color}`}>
            <div className="insight-icon">{ins.icon}</div>
            <div className="insight-title">{ins.title}</div>
            <div className="insight-value">{ins.value}</div>
            <div className="insight-detail">{ins.detail}</div>
          </div>
        ))}
      </div>

      <MonthlyComparisonChart />

      <div className="insight-observations">
        <h3 className="obs-title">📌 Key Observations</h3>
        <ul className="obs-list">
          <li className={expenseChange > 0 ? "obs-bad" : "obs-good"}>
            Expenses in {latestMonth.month} were{" "}
            <strong>{Math.abs(expenseChange)}% {expenseChange > 0 ? "higher ↑" : "lower ↓"}</strong> compared to {prevMonth?.month}.
          </li>
          <li className={incomeChange > 0 ? "obs-good" : "obs-bad"}>
            Income in {latestMonth.month} was{" "}
            <strong>{Math.abs(incomeChange)}% {incomeChange > 0 ? "higher ↑" : "lower ↓"}</strong> compared to {prevMonth?.month}.
          </li>
          <li className={savingsRate > 20 ? "obs-good" : "obs-bad"}>
            Overall savings rate is <strong>{savingsRate}%</strong> —{" "}
            {savingsRate > 20 ? "you are meeting the 20% savings goal! 🎉" : "consider reducing expenses to hit the 20% goal."}
          </li>
          {topCategory && (
            <li className="obs-neutral">
              <strong>{topCategory.name}</strong> is your highest expense category at{" "}
              <strong>{fmt(topCategory.value)}</strong>. Look for ways to optimise here.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
