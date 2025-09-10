import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";

// Header Component
function Header({ title, taskCount }) {
  return _jsx("header", {
    className: "bg-blue-600 text-white p-6 shadow-lg",
    children: _jsxs("div", {
      className: "container mx-auto",
      children: [
        _jsx("h1", {
          className: "text-3xl font-bold text-center",
          children: title
        }),
        _jsx("p", {
          className: "text-center mt-2 text-blue-100",
          children: taskCount === 0 ? "Nenhuma tarefa cadastrada" : `${taskCount} tarefa${taskCount > 1 ? "s" : ""} cadastrada${taskCount > 1 ? "s" : ""}`
        })
      ]
    })
  });
}

// TaskItem Component
function TaskItem({ task, onToggle, onDelete }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return _jsx("div", {
    className: `flex items-center justify-between p-4 bg-white rounded-lg shadow-md border-l-4 transition-all duration-200 ${
      task.completed ? "border-green-500 bg-green-50" : "border-blue-500 hover:shadow-lg"
    } ${isHovered ? "transform scale-105" : ""}`,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    children: _jsxs("div", {
      className: "flex items-center space-x-3",
      children: [
        _jsx("input", {
          type: "checkbox",
          checked: task.completed,
          onChange: () => onToggle(task.id),
          className: "w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
        }),
        _jsx("span", {
          className: `text-lg ${task.completed ? "line-through text-gray-500" : "text-gray-800"}`,
          children: task.text
        })
      ]
    })
  });
}

// TaskList Component
function TaskList({ onTaskCountChange }) {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Aprender React", completed: false },
    { id: 2, text: "Configurar TailwindCSS", completed: true },
    { id: 3, text: "Criar componentes", completed: false }
  ]);
  const [newTask, setNewTask] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      const task = {
        id: Date.now(),
        text: newTask.trim(),
        completed: false
      };
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;

  useEffect(() => {
    if (onTaskCountChange) {
      onTaskCountChange(totalTasks);
    }
  }, [totalTasks, onTaskCountChange]);

  return _jsx("div", {
    className: "max-w-2xl mx-auto p-6",
    children: _jsxs(_Fragment, {
      children: [
        _jsx("form", {
          onSubmit: addTask,
          className: "mb-8",
          children: _jsxs("div", {
            className: "flex space-x-4",
            children: [
              _jsx("input", {
                type: "text",
                value: newTask,
                onChange: (e) => setNewTask(e.target.value),
                placeholder: "Digite uma nova tarefa...",
                className: "flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              }),
              _jsx("button", {
                type: "submit",
                className: "px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 font-medium",
                children: "Adicionar"
              })
            ]
          })
        }),
        _jsx("div", {
          className: "mb-6 p-4 bg-gray-100 rounded-lg",
          children: _jsxs("div", {
            className: "flex justify-between items-center",
            children: [
              _jsx("span", {
                className: "text-gray-700 font-medium",
                children: `Progresso: ${completedTasks}/${totalTasks}`
              }),
              _jsx("div", {
                className: "w-32 bg-gray-200 rounded-full h-2",
                children: _jsx("div", {
                  className: "bg-blue-600 h-2 rounded-full transition-all duration-300",
                  style: { width: `${totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0}%` }
                })
              })
            ]
          })
        }),
        _jsx("div", {
          className: "space-y-3",
          children: tasks.length === 0 ? _jsx("div", {
            className: "text-center py-12 text-gray-500",
            children: _jsxs(_Fragment, {
              children: [
                _jsx("p", { className: "text-lg", children: "Nenhuma tarefa cadastrada" }),
                _jsx("p", { className: "text-sm", children: "Adicione uma nova tarefa acima para começar!" })
              ]
            })
          }) : tasks.map(task => _jsx(TaskItem, {
            key: task.id,
            task: task,
            onToggle: toggleTask,
            onDelete: deleteTask
          }))
        })
      ]
    })
  });
}

// App Component
function App() {
  const [taskCount, setTaskCount] = useState(0);

  useEffect(() => {
    console.log("Aplicação carregada com sucesso!");
  }, []);

  return _jsx("div", {
    className: "min-h-screen bg-gray-100",
    children: _jsxs(_Fragment, {
      children: [
        _jsx(Header, {
          title: "📝 Lista de Tarefas",
          taskCount: taskCount
        }),
        _jsx("main", {
          className: "py-8",
          children: _jsx(TaskList, { onTaskCountChange: setTaskCount })
        })
      ]
    })
  });
}

// Render the app
const { createRoot } = await import("react-dom/client");
const root = createRoot(document.getElementById("root"));
root.render(_jsx(App, {}));
