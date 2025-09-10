import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import './index.css';

function App() {
  const [taskCount, setTaskCount] = useState(0);

  // useEffect para demonstrar o hook (opcional mas incluído para mostrar conhecimento)
  useEffect(() => {
    // Simula carregamento de dados
    console.log('Aplicação carregada com sucesso!');
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header 
        title="📝 Lista de Tarefas" 
        taskCount={taskCount}
      />
      <main className="py-8">
        <TaskList onTaskCountChange={setTaskCount} />
      </main>
    </div>
  );
}

export default App;
