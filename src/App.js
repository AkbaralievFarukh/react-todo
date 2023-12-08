import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getTodos, addTodo, deleteTodo } from './redux/action/todoAction'
import { useSelector } from'react-redux'

function App() {
  const dispatch = useDispatch()
  const todos = useSelector(s => s.todos)
  const [newTodo, setNewTodo] = useState('')

  useEffect(() => {
    dispatch(getTodos()) 
  }, [])

  const handleAddTodo = () => {
    const obj = {
      title: newTodo,
      completed: false
    }
    setNewTodo('')
    dispatch(addTodo(obj))
  }

  const handleDeleteTodo = (todo) => {
    dispatch(deleteTodo(todo))
  }



  return (
    <div className='container'>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      {
        todos.map(todo => (
          <div key={todo.id} className='todo-wrapper'>
            <h2>{todo.title}</h2>
            <input type="checkbox" checked={todo.completed} />
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </div>
        ))
      }
    </div>
  )
}

export default App