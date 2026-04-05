import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
  PieChart, Pie, Cell, BarChart, Bar,
} from "recharts";
import { monthlyData, getCategoryTotals } from "../data/transactions";
import { useApp } from "../context/AppContext";

const COLORS = ["#6366f1","#f59e0b","#10b981","#ef4444","#8b5cf6","#06b6d4","#f97316","#84cc16"];

const fmt = (v) => "₹" + Number(v).toLocaleString("en-IN");

export function BalanceTrendChart() {
  return (
    <div className="chart-card">
      <h3 className="chart-title">💹 Balance Trend</h3>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={monthlyData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis dataKey="month" stroke="var(--text-muted)" />
          <YAxis tickFormatter={(v) => "₹" + (v / 1000) + "k"} stroke="var(--text-muted)" />
          <Tooltip formatter={(v) => fmt(v)} contentStyle={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: "8px", color: "var(--text)" }} />
          <Legend />
          <Line type="monotone" dataKey="income" stroke="#10b981" strokeWidth={2.5} dot={{ r: 5 }} name="Income" />
          <Line type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={2.5} dot={{ r: 5 }} name="Expenses" />
          <Line type="monotone" dataKey="balance" stroke="#6366f1" strokeWidth={2.5} dot={{ r: 5 }} name="Balance" strokeDasharray="5 3" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function SpendingBreakdownChart() {
  const { transactions } = useApp();
  const data = getCategoryTotals(transactions).slice(0, 6);

  const renderLabel = ({ name, percent }) =>
    percent > 0.06 ? `${(percent * 100).toFixed(0)}%` : "";

  return (
    <div className="chart-card">
      <h3 className="chart-title">🥧 Spending Breakdown</h3>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" outerRadius={90} dataKey="value" label={renderLabel} labelLine={false}>
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(v) => fmt(v)} contentStyle={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: "8px", color: "var(--text)" }} />
          <Legend formatter={(v) => <span style={{ color: "var(--text)", fontSize: "12px" }}>{v}</span>} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function MonthlyComparisonChart() {
  return (
    <div className="chart-card">
      <h3 className="chart-title">📊 Monthly Comparison</h3>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={monthlyData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis dataKey="month" stroke="var(--text-muted)" />
          <YAxis tickFormatter={(v) => "₹" + (v / 1000) + "k"} stroke="var(--text-muted)" />
          <Tooltip formatter={(v) => fmt(v)} contentStyle={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: "8px", color: "var(--text)" }} />
          <Legend />
          <Bar dataKey="income" fill="#10b981" name="Income" radius={[4, 4, 0, 0]} />
          <Bar dataKey="expenses" fill="#ef4444" name="Expenses" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
