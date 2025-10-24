import './App.css'
import { useState, useEffect } from "react"

function App() {

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks')
    return saved ? JSON.parse(saved) : []
  })

  const [taskInput, setTaskInput] = useState('')

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  function addTask(e) {
    e.preventDefault()
    if (taskInput.trim() === '') return
    setTasks([...tasks, taskInput])
    setTaskInput('')
  }

  function handleInputChange(e) {
    setTaskInput(e.target.value)
  }

  function handleDelete(index) {
    const newTasks = tasks.filter((_, i) => index !== i)
    setTasks(newTasks)
  }

  return ( 
    <>
      <h1>Welcome to my TODO app made with react !</h1>
      <form onSubmit={addTask}>
        <input type="text" placeholder='Your task' onChange={handleInputChange} value={taskInput}/>
        <button type='submit'>Add</button>
      </form>
      <div>
        {tasks.map((t, index) => (
          <div key={index}>
            <li>{t}</li>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default App