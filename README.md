# 📝 Lista de Tarefas

## Objetivo da Aplicação

A Lista de Tarefas é uma aplicação web moderna para gerenciamento de tarefas pessoais. A aplicação permite aos usuários:

- ✅ Adicionar novas tarefas
- ✅ Marcar tarefas como concluídas
- ✅ Excluir tarefas
- ✅ Visualizar progresso das tarefas
- ✅ Interface responsiva e intuitiva

## Tecnologias Usadas

- **React 18** - Biblioteca para construção da interface
- **Vite** - Build tool e servidor de desenvolvimento
- **TailwindCSS** - Framework CSS para estilização
- **JavaScript (ES6+)** - Linguagem de programação

## Funcionalidades Implementadas

### Componentes React
- **Header**: Componente que recebe props (`title` e `taskCount`) e exibe o título da aplicação e contador de tarefas
- **TaskItem**: Componente individual de tarefa com state interno para controle de hover e interações
- **TaskList**: Componente principal que gerencia o estado das tarefas usando o hook `useState`

### Hooks Utilizados
- **useState**: Para gerenciar estado das tarefas, formulário e interações
- **useEffect**: Para demonstrar conhecimento do hook (opcional no checkpoint)

### Props e State
- **Props**: Header recebe `title` e `taskCount`, TaskItem recebe `task`, `onToggle` e `onDelete`
- **State**: TaskList gerencia array de tarefas, TaskItem controla estado de hover

### Estilização TailwindCSS
- Layout responsivo com grid e flexbox
- Cores e gradientes personalizados
- Animações e transições suaves
- Estados de hover e focus
- Design moderno com sombras e bordas arredondadas

## Como Executar Localmente

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação e Execução

1. **Clone o repositório** (se aplicável):
   ```bash
   git clone <url-do-repositorio>
   cd task-manager-app
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

4. **Acesse a aplicação**:
   Abra seu navegador e acesse `http://localhost:5173`

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter

## Estrutura do Projeto

```
src/
├── components/
│   ├── Header.jsx      # Cabeçalho da aplicação
│   ├── TaskItem.jsx    # Item individual de tarefa
│   └── TaskList.jsx    # Lista principal de tarefas
├── App.jsx             # Componente principal
├── main.jsx           # Ponto de entrada da aplicação
└── index.css          # Estilos globais com TailwindCSS
```

## Critérios de Avaliação Atendidos

✅ **Projeto React com Vite configurado e rodando**  
✅ **Mínimo 3 componentes diferentes** (Header, TaskItem, TaskList)  
✅ **Cada componente recebe props e controla state interno**  
✅ **Uso do hook useState** (e useEffect opcional)  
✅ **Estilização com TailwindCSS** em toda a aplicação  
✅ **README.md completo** com instruções de execução  

## Demonstração dos Conceitos

### Uso de Props
- Header recebe `title` e `taskCount` como props
- TaskItem recebe `task`, `onToggle` e `onDelete` como props

### Uso de State
- TaskList gerencia array de tarefas com `useState`
- TaskItem controla estado de hover com `useState`
- App gerencia contagem total de tarefas

### Hooks
- `useState` para gerenciamento de estado
- `useEffect` para efeitos colaterais

### Organização do Código
- Estrutura clara com pasta `src/components`
- Componentes bem separados e reutilizáveis
- Código limpo e legível

---

**Desenvolvedores:**
**Arthur Canaverde RM:563029**
**Lucas Zago RM:562028**