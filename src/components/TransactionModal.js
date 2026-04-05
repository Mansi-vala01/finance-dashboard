import React, { useState, useEffect } from "react";
import { CATEGORIES } from "../data/transactions";

const emptyForm = {
  description: "", amount: "", category: "Food & Dining",
  type: "expense", date: new Date().toISOString().split("T")[0],
};

export default function TransactionModal({ onClose, onSave, existing }) {
  const [form, setForm] = useState(existing || emptyForm);

  useEffect(() => {
    if (existing) setForm(existing);
  }, [existing]);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = () => {
    if (!form.description.trim() || !form.amount || Number(form.amount) <= 0) {
      alert("Please fill in all fields correctly.");
      return;
    }
    onSave(form);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{existing ? "Edit Transaction" : "Add Transaction"}</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">
          <label className="form-label">Description</label>
          <input className="form-input" name="description" value={form.description} onChange={handle} placeholder="e.g. Salary Credit" />

          <label className="form-label">Amount (₹)</label>
          <input className="form-input" name="amount" type="number" value={form.amount} onChange={handle} placeholder="0" min="1" />

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Type</label>
              <select className="form-input" name="type" value={form.type} onChange={handle}>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Date</label>
              <input className="form-input" name="date" type="date" value={form.date} onChange={handle} />
            </div>
          </div>

          <label className="form-label">Category</label>
          <select className="form-input" name="category" value={form.category} onChange={handle}>
            {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>

        <div className="modal-footer">
          <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={submit}>
            {existing ? "Save Changes" : "Add Transaction"}
          </button>
        </div>
      </div>
    </div>
  );
}
