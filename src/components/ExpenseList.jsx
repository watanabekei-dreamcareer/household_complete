import React, { useState } from 'react';
import './ExpenseList.css';

const ExpenseList = ({ expenses, editExpense, deleteExpense }) => {
  const [isEditing, setIsEditing] = useState(null);
  const [editedItem, setEditedItem] = useState('');
  const [editedCategory, setEditedCategory] = useState('');
  const [editedAmount, setEditedAmount] = useState('');
  const [editedDate, setEditedDate] = useState('');

  const handleEdit = (index) => {
    setIsEditing(index);
    const expense = expenses[index];
    setEditedItem(expense.item);
    setEditedCategory(expense.category);
    setEditedAmount(expense.amount);
    setEditedDate(expense.date);
  };

  const handleSave = (index) => {
    editExpense(index, {
      item: editedItem,
      category: editedCategory,
      amount: parseFloat(editedAmount),
      date: editedDate,
    });
    setIsEditing(null);
  };

  return (
    <div>
      <h2>購入品一覧</h2>
      <ul>
        {expenses.map((expense, index) => (
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
                <input
                  type="date"
                  value={editedDate}
                  onChange={(e) => setEditedDate(e.target.value)}
                />
                <div className="expense-actions">
                  <button className="edit-btn" onClick={() => handleSave(index)}>保存</button>
                  <button className="delete-btn" onClick={() => setIsEditing(null)}>キャンセル</button>
                </div>
              </>
            ) : (
              <>
                <span>{expense.item}</span>
                <span>{expense.category}</span>
                <span>{expense.amount}円</span>
                <span>{new Date(expense.date).toLocaleDateString()}</span>
                <div className="expense-actions">
                  <button className="edit-btn" onClick={() => handleEdit(index)}>編集</button>
                  <button className="delete-btn" onClick={() => deleteExpense(index)}>削除</button>
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

