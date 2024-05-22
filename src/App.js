import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import CategorySummary from './components/CategorySummary';
import MonthlySummary from './components/MonthlySummary';
import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState(['食費', '光熱費', '交通費','アパレル','美容','生活雑貨','旅行']);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  useEffect(() => {
    // 月ごとの合計計算ロジックをここに追加
  }, [expenses, selectedMonth]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const addCategory = (category) => {
    setCategories([...categories, category]);
  };

  const editExpense = (index, updatedExpense) => {
    const newExpenses = [...expenses];
    newExpenses[index] = { ...newExpenses[index], ...updatedExpense };
    setExpenses(newExpenses);
  };

  const deleteExpense = (index) => {
    const newExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(newExpenses);
  };

  return (
    <div className="app-container">
      <h1 className="header">家計簿アプリ</h1>
      <ExpenseForm addExpense={addExpense} categories={categories} addCategory={addCategory} />
      <div className="summary-container">
        <div className="expense-list-container">
          <ExpenseList
            expenses={expenses}
            selectedMonth={selectedMonth}
            editExpense={editExpense}
            deleteExpense={deleteExpense}
          />
        </div>
        <div className="category-summary-container">
          <CategorySummary expenses={expenses} />
        </div>
        <div className="monthly-summary-container">
          <MonthlySummary expenses={expenses} selectedMonth={selectedMonth} />
        </div>
      </div>
    </div>
  );
};

export default App;

