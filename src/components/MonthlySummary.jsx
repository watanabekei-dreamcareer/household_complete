import React from 'react';
import './MonthlySummary.css';

const MonthlySummary = ({ expenses }) => {
  const totalAmount = expenses.reduce((acc, expense) => acc += expense.amount, 0);

  return (
    <div>
      <h2>合計金額</h2>
      <p>{totalAmount.toLocaleString()}円</p>
    </div>
  );
};

export default MonthlySummary;

