import React, { useState } from 'react';

const TaskItem = ({ task, onToggle, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className={`flex items-center justify-between p-4 bg-white rounded-lg shadow-md border-l-4 transition-all duration-200 ${
        task.completed 
          ? 'border-green-500 bg-green-50' 
          : 'border-blue-500 hover:shadow-lg'
      } ${isHovered ? 'transform scale-105' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
        />
        <span className={`text-lg ${
          task.completed 
            ? 'line-through text-gray-500' 
            : 'text-gray-800'
        }`}>
          {task.text}
        </span>
      </div>
      
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-700 hover:bg-red-100 p-2 rounded-full transition-colors duration-200"
        title="Excluir tarefa"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  );
};

export default TaskItem;
