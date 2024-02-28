import { useRef, useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {

  const [x, setx] = useState([])
  
  const inputRef = useRef()

  const add = () => {
    const value = inputRef.current.value
    console.log(value);
    if (value !=="") {
      const newData = { completed: false, value }
    setx([...x, newData])
    inputRef.current.value = ""
    }
  }

  const toDelete = (index) => {
    const newx = [...x]
    newx.splice(index, 1)

    setx(newx)
  }
  const itemDone = (index) => {

    const newx = [...x]

    newx[index].completed = !newx[index].completed

    setx(newx)
  }

  return (
    <div className="App">
      <div className='container'>
        <h2>To do List</h2>
        <div className='tasks'>
          {
            x.map(({ value, completed }, index) => {
              return <div className='task' key={index}>
                <div className={completed ? "col-10 tasktext diffstyle" : "col-10 tasktext"}>
                  {value}
                </div>
                <div className=' col-2 spans '>
                  <span onClick={() => itemDone(index)} >{completed ? "✅ " : "⬜ " }</span>
                  <span onClick={() => toDelete(index)} >❌</span>
                </div>
              </div>
            })
          }
        </div>

        <input ref={inputRef} placeholder='Enter new task...' />

        <button onClick={add} >Add</button>

      </div>
    </div>
  );
}

export default App;
