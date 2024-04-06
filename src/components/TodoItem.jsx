import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  const handleCheckboxClick = () => {
    toggleComplete(todo.id);
  };

  const handleDeleteClick = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleCheckboxClick}
      />
      <p>{todo.text}</p>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
};

export default TodoItem;
