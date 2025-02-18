import React from 'react'
import { useState } from 'react'
import { addTodo, deleteTodo } from "./redux/actionType"
import { useDispatch, useSelector } from "react-redux"


const ToDo = () => {
  const [input, setInput] = useState("");
  const toDoData = useSelector((state) => state.todo || []);

  console.log(toDoData, "toDoData")
  const dispatch = useDispatch()

  return (
    <div>
      {/* <h1>{name}</h1> */}

      {toDoData.length === 0 ? <p>No tasks yet.</p> : 
        toDoData.map((e, index) => {

        return <div key={index} style={{ backgroundColor: "coral", color: "white", marginTop: 10, padding: 10 }}>{e}

          <button onClick={() => dispatch(deleteTodo(index))} style={{ backgroundColor: "white", color: "coral", marginLeft: 50, padding: 10 }} >delete</button>
        </div>
      })}
      <input style={{ color: "grey", padding: 10 }} type="text" placeholder="Enter name" value={input} onChange={(e) => setInput(e.target.value)} />
      <button style={{ backgroundColor: "blue", color: "white", marginleft: 10, padding: 10 }} onClick={() => dispatch(addTodo(input))}>submit</button>
    </div>
  )
}

export default ToDo
