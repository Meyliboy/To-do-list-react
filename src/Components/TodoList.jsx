// style
import './TodoList.css'

import TodoItem from './TodoItem'

function TodoList({todos, setTodos, editTodo, setEditTodo, updateTodosToShow, items}) {
  return (
    <div className='todolist-box'>
      <h2> Todo List </h2>
      <div className="todolist__btns">
          <div className="todolist__btn">
              <button type="button" className="ui primary button btn" onClick={() => updateTodosToShow("all")}> All </button>
          </div>
          <div className="todolist__btn">
              <button type="button" className="ui primary button btn" onClick={() => updateTodosToShow("done")}> Done </button>
          </div>
          <div className="todolist__btn">
              <button type="button" className="ui primary button btn last-btn" onClick={() => updateTodosToShow("todo")}>Todo</button>
          </div>
      </div>
        <TodoItem todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo} items={items} />
    </div>
  )
}

export default TodoList