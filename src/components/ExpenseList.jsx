import React, { useState } from 'react';
import './ExpenseList.css';

const ExpenseList = ({ expenses, selectedMonth, editExpense, deleteExpense }) => {
  const [isEditing, setIsEditing] = useState(null);
  const [editedItem, setEditedItem] = useState('');
  const [editedCategory, setEditedCategory] = useState('');
  const [editedAmount, setEditedAmount] = useState('');

  const filteredExpenses = expenses.filter(
    (expense) => new Date(expense.date).getMonth() === selectedMonth
  );

  const handleEdit = (index) => {
    const expense = filteredExpenses[index];
    setIsEditing(index);
    setEditedItem(expense.item);
    setEditedCategory(expense.category);
    setEditedAmount(expense.amount);
  };

  const handleSave = (index) => {
    editExpense(index, {
      item: editedItem,
      category: editedCategory,
      amount: parseFloat(editedAmount),
    });
    setIsEditing(null);
  };

  return (
    <div>
      <h2>購入品一覧</h2>
      <ul className="expense-list">
        {filteredExpenses.map((expense, index) => (
          <li key={index} className="expense-item">
            {isEditing === index ? (
              <>
                <input
                  type="text"
                  value={editedItem}
                  onChange={(e) => setEditedItem(e.target.value)}
                />
                <input
                  type="text"
                  value={editedCategory}
                  onChange={(e) => setEditedCategory(e.target.value)}
                />
                <input
                  type="number"
                  value={editedAmount}
                  onChange={(e) => setEditedAmount(e.target.value)}
                />
                <div className="expense-actions">
                  <button onClick={() => handleSave(index)}>保存</button>
                  <button onClick={() => setIsEditing(null)}>キャンセル</button>
                </div>
              </>
            ) : (
              <>
                {expense.item} - {expense.category} - ¥{expense.amount}
                <div className="expense-actions">
                  <button onClick={() => handleEdit(index)}>編集</button>
                  <button onClick={() => deleteExpense(index)}>削除</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;

