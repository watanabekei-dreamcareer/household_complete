import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ addExpense, categories, addCategory }) => {
  const [item, setItem] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [newCategory, setNewCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ item, category, amount: parseFloat(amount), date: new Date(date) });
    setItem('');
    setCategory('');
    setAmount('');
    setDate('');
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    addCategory(newCategory);
    setNewCategory('');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="購入品"
          required
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="">カテゴリを選択</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>{cat}</option>
          ))}
        </select>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="金額"
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">追加</button>
      </form>
      <form onSubmit={handleAddCategory}>
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="新しいカテゴリ"
          required
        />
        <button type="submit">カテゴリ追加</button>
      </form>
    </div>
  );
};

export default ExpenseForm;

