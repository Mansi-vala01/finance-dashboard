import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { CATEGORIES } from "../data/transactions";
import TransactionModal from "./TransactionModal";

const fmt = (n) => "₹" + Number(n).toLocaleString("en-IN");

export default function Transactions() {
  const { role, filters, setFilters, filteredTransactions, addTransaction, editTransaction, deleteTransaction } = useApp();
  const [showModal, setShowModal] = useState(false);
  const [editTarget, setEditTarget] = useState(null);

  const openAdd = () => { setEditTarget(null); setShowModal(true); };
  const openEdit = (txn) => { setEditTarget(txn); setShowModal(true); };

  const exportCSV = () => {
    const header = "Date,Description,Category,Type,Amount\n";
    const rows = filteredTransactions.map((t) => `${t.date},${t.description},${t.category},${t.type},${t.amount}`).join("\n");
    const blob = new Blob([header + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "transactions.csv"; a.click();
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h2 className="page-title">Transactions</h2>
          <p className="page-sub">{filteredTransactions.length} records found</p>
        </div>
        <div className="page-actions">
          <button className="btn btn-ghost" onClick={exportCSV}>⬇ Export CSV</button>
          {role === "admin" && (
            <button className="btn btn-primary" onClick={openAdd}>＋ Add Transaction</button>
          )}
        </div>
      </div>

      {/* Filters */}
      <div className="filters-bar">
        <input
          className="filter-input"
          placeholder="🔍 Search transactions..."
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        />
        <select className="filter-select" value={filters.type} onChange={(e) => setFilters({ ...filters, type: e.target.value })}>
          <option value="all">All Types</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <select className="filter-select" value={filters.category} onChange={(e) => setFilters({ ...filters, category: e.target.value })}>
          <option value="all">All Categories</option>
          {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
        </select>
        <select className="filter-select" value={filters.sortBy} onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}>
          <option value="date-desc">Date ↓</option>
          <option value="date-asc">Date ↑</option>
          <option value="amount-desc">Amount ↓</option>
          <option value="amount-asc">Amount ↑</option>
        </select>
      </div>

      {/* Table */}
      {filteredTransactions.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon">📭</span>
          <p>No transactions found. Try adjusting your filters.</p>
        </div>
      ) : (
        <div className="table-wrapper">
          <table className="txn-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Type</th>
                <th>Amount</th>
                {role === "admin" && <th>Actions</th>}
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((txn) => (
                <tr key={txn.id} className="txn-row">
                  <td className="txn-date">{new Date(txn.date).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}</td>
                  <td className="txn-desc">{txn.description}</td>
                  <td><span className="category-badge">{txn.category}</span></td>
                  <td><span className={`type-badge ${txn.type}`}>{txn.type === "income" ? "↑ Income" : "↓ Expense"}</span></td>
                  <td className={`txn-amount ${txn.type}`}>{txn.type === "income" ? "+" : "-"}{fmt(txn.amount)}</td>
                  {role === "admin" && (
                    <td className="txn-actions">
                      <button className="action-btn edit" onClick={() => openEdit(txn)}>✏️</button>
                      <button className="action-btn delete" onClick={() => { if (window.confirm("Delete this transaction?")) deleteTransaction(txn.id); }}>🗑️</button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showModal && (
        <TransactionModal
          onClose={() => setShowModal(false)}
          onSave={editTarget ? (d) => editTransaction(editTarget.id, d) : addTransaction}
          existing={editTarget}
        />
      )}
    </div>
  );
}
