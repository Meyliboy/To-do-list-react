// style
import "./App.css";
// React import
import { useState, useEffect } from "react";
// Components
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import Footer from "./Components/Footer";


const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState );
  const [editTodo, setEditTodo] = useState(null);
  // const [items, setItems] = useState([])
  // Git test

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  
  const updateTodosToShow = string => {

    let items = []
    if (string === "all") {
      items = todos;
      // console.log(items);
    } else if (string === "done") {
      items = todos.filter(item => item.completed === true)
      // console.log(items);
    } else if (string === "todo") {
      items = todos.filter((item) => item.completed !== true)
      // console.log(items);
    }
	};
  
  return (
    <div className="container">
      <div className="box-todo">
        <h2>Todo Input</h2>
        <TodoInput
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          />
        <TodoList
          items={items}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          updateTodosToShow={updateTodosToShow}
          />
      </div>
      <Footer />
    </div>
  );
};

export default App;
