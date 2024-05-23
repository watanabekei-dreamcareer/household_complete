import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import CategorySummary from './components/CategorySummary';
import MonthlySummary from './components/MonthlySummary';
import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState(['食費', '光熱費', '交通費']);
  const [selectedMonth, setSelectedMonth] = useState(new Date().toISOString().substring(0, 7));

  useEffect(() => {
  
  }, []);

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

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const filteredExpenses = expenses.filter(expense => {
    const expenseDate = new Date(expense.date);
    const selectedMonthDate = new Date(selectedMonth);
    return expenseDate.getFullYear() === selectedMonthDate.getFullYear() && expenseDate.getMonth() === selectedMonthDate.getMonth();
  });

  return (
    <div className="app-container">
      <h1 className="header">家計簿アプリ</h1>
      <ExpenseForm addExpense={addExpense} categories={categories} addCategory={addCategory} />
      <div className="month-selector">
        <label htmlFor="month">年月を選択: </label>
        <input type="month" id="month" value={selectedMonth} onChange={handleMonthChange} />
      </div>
      <div className="summary-container">
        <div className="expense-list-container">
          <ExpenseList
            expenses={filteredExpenses}
            editExpense={editExpense}
            deleteExpense={deleteExpense}
          />
        </div>
        <div className="category-summary-container">
          <CategorySummary expenses={filteredExpenses} />
        </div>
        <div className="monthly-summary-container">
          <MonthlySummary expenses={filteredExpenses} />
        </div>
      </div>
    </div>
  );
};

export default App;
