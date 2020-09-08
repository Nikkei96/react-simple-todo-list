import React, { useState, useEffect } from 'react'
import TodoList from './components/TodoList'
import Context from './context'
import AddTodo from './components/AddTodo'

function App() {
  const defaultTodos = [
    { id: 1, completed: false, task: 'Купить молоко' },
    { id: 2, completed: true, task: 'Купить хлеб' },
    { id: 3, completed: false, task: 'Купить яйца' }
  ]

  const [todos, setTodos] = useLocalStorage(defaultTodos)
  console.log(todos)
  function useLocalStorage(defaultValue) {
    const [value, setValue] = useState(() => {
      const ls = localStorage.getItem('todos')
      return ls !== null
        ? JSON.parse(ls)
        : defaultValue
    })

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(value))
    })

    return [value, setValue]
  }

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className='wrapper'>
        <h1>Todo List!</h1>
        <AddTodo
          addTodo={text =>
            setTodos([
              ...todos,
              {
                id: todos[todos.length - 1].id + 1,
                completed: false,
                task: text
              }])
            }
        />
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} /> : <p>У вас нет todo!</p>}
      </div>
    </Context.Provider>
  )
}

export default App