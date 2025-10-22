import './App.css'

function App() {

  function AddTodo() {
    console.log()
  }

  return (
    <>
      <h1>Welcome to my TODO app made with react !</h1>
      <form onSubmit={AddTodo}>
        <input type="text" placeholder='Your task'/>
        <button type='submit'>Add</button>
      </form>
      <div>
        <ul></ul>
      </div>
    </>
  )
}

export default App
