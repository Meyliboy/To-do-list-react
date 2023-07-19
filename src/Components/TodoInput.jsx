// style
// import { useState } from "react";
import "./TodoInput.css";

import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";

const TodoInput = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {
  const updatedTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) => 
      todo.id === id ? {title, id, completed} : todo
    )
    setTodos(newTodo)
    setEditTodo('')
  }
  useEffect(() => {
    if(editTodo) {
      setInput(editTodo.title)
    } else {
      setInput('')
    }
  }, [setInput, editTodo])
 const handleChange = (event) => {
    setInput(event.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!editTodo) {
      setTodos([...todos, {id: uuidv4(), title: input, completed: false}])
      setInput('')
    } else {
      updatedTodo(input, editTodo.id, editTodo.completed)
    }
    
  }

  return (
    <div className="todoinput-box">
      <form onSubmit={handleSubmit}>
        <div className="ui labeled input">
          <div className="ui primary button mr">
            <i className="fa fa-book"></i>
          </div>
          <input
            type="text"
            placeholder="New todo"
            required
            value={input}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={`ui ${editTodo ? 'green' : 'primary'} button w100`}> {editTodo ? 'Ok' : 'Add new task'}
        </button>
      </form>
    </div>
  );
}

export default TodoInput;
