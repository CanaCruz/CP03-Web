import React from 'react';

const Header = ({ title, taskCount }) => {
  return (
    <header className="bg-blue-600 text-white p-6 shadow-lg">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center">
          {title}
        </h1>
        <p className="text-center mt-2 text-blue-100">
          {taskCount === 0 
            ? 'Nenhuma tarefa cadastrada' 
            : `${taskCount} tarefa${taskCount > 1 ? 's' : ''} cadastrada${taskCount > 1 ? 's' : ''}`
          }
        </p>
      </div>
    </header>
  );
};

export default Header;
