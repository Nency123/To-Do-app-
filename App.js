import React, { useState } from 'react'
import "./App.css";

const App = () => {

  const[todo,SetTodo]=useState("");
  const[todos,SetTodos]=useState([]);  
  const[editId, setEditId]=useState(0);
 
const handleSubmit = (e)=>{
   e.preventDefault();

   if(editId){
     const editTodo=todos.find((i)=>i.id===editId);
     const updatedTodos = todos.map((t)=>t.id===editTodo.id 
     ? (t = {id:t, todo}): {id:t.id, todo:t.todo});
     SetTodos(updatedTodos);
     setEditId(0);
     SetTodo("")
     return;
   }


   if(todo !== " "){
     SetTodos([{id: `${todo}-${Date.now()}`,todo},...todos])
     SetTodo(" ");
    //  todo.current.value.reset()
   }
 }
 const handleEdit = (id) => {
  const edtTodo = todos.find((t)=>t.id===id)
  SetTodo(edtTodo.todo);
  setEditId(id)

  // SetTodos[[todos,...edtTodo]]
 }
const handleDelete = (id) => {
  const delTodo = todos.filter((to)=>to.id!==id);
  SetTodos([...delTodo])
} 
  return (
    <div className='App' >
     <div className="container"><h1>TO-DO App</h1>
     <form className='todoForm' onSubmit={handleSubmit}>
      <input type='text' value={todo} onChange={(e)=>SetTodo(e.target.value)}></input>
      <button type='submit'>{editId ? "Edit" : "Go"}</button>
     </form>
     <ul className='order'>
      {todos.map((t)=>(<li className='myList'>
        <span className='todoText'key={t.id}>{t.todo}</span>
        <button onClick={()=>handleEdit(t.id)}>Edit</button>
        <button onClick={()=>handleDelete(t.id)}>Delete</button>
      </li>))
      }
      <li className='myList'>
        <span>
          Set daily routine
        </span>
        <button>Edit</button>
        <button>Delete</button>
      </li>
     </ul>
     </div>
    </div>
  )
}

export default App;
