import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app';

// import AppHeader from './components/app-header/app-header';
// import SearchPanel from './components/search-panel';
// import TodoList from './components/todo-list';


// const App = () => {

//   const todoData = [
//     { label: 'Drink Coffee', important: false },
//     { label: 'Make Awseome App', important: true},
//     { label: 'Have a lunch', important: false}
//   ];

//  return (
//   <div>
//     <AppHeader />
//     <SearchPanel />
//     <TodoList todos={todoData}/>
//   </div>
//  );
// };

const root = ReactDOM.createRoot(
document.getElementById('root'));
root.render(<App />)