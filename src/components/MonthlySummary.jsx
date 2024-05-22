import React from 'react';
import './MonthlySummary.css';

const MonthlySummary = ({ expenses, selectedMonth }) => {
  const currentMonthExpenses = expenses.filter(
    (expense) => new Date(expense.date).getMonth() === selectedMonth
  );
  const previousMonthExpenses = expenses.filter(
    (expense) => new Date(expense.date).getMonth() === (selectedMonth - 1 + 12) % 12
  );

  const currentMonthTotal = currentMonthExpenses.reduce((sum, expense) => sum + expense.amount, 0);
  const previousMonthTotal = previousMonthExpenses.reduce((sum, expense) => sum + expense.amount, 0);

  const compareWithLastMonth = previousMonthTotal === 0 ? 'N/A' : `${((currentMonthTotal - previousMonthTotal) / previousMonthTotal * 100).toFixed(2)}%`;

  return (
    <div className="monthly-summary">
      <h2>月ごとの合計</h2>
      <p>今月の合計: ¥{currentMonthTotal}</p>
      <p>先月比: {compareWithLastMonth}</p>
    </div>
  );
};

export default MonthlySummary;


