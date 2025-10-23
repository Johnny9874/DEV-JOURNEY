import './App.css'
import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = React.useState([])
  const [taskInput, setTaskInput] = React.useState('')
  
  function handleTask(e) {
    e.preventDefault()
    if (taskInput === '') return
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
      <form onSubmit={handleTask}>
        <input type="text" placeholder='Your task' onChange={handleInputChange}/>
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