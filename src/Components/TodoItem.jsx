// style
import DeleteBtn from "./DeleteBtn";
import "./TodoItem.css";

function TodoItem({ todos, setTodos, setEditTodo, items}) {

  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if(item.id === todo.id) {
          return {...item, completed: !item.completed}
        }
        return item;
      })
    )
  }
  const handleDoneDelete = () => {
    setTodos(
      todos.filter((item) => {
        return item.completed === false
      })
    )
  }
  const handleEdit = ({id}) => {
    const findTodo = todos.find((todo) => todo.id === id)
    setEditTodo(findTodo)
  }

  const handleAllDelete = () => {
    setTodos([])
  }
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="todoitem-box">
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`${todo.completed ? 'complete' : ''}`}
            onChange={(event) => event.preventDefault()}
          />
          <span>
            <i className={`${todo.completed ? 'fa fa-check-square-o' : 'fa fa-square-o'}`} onClick={() => handleComplete(todo)}></i>
            <i className="fa fa-pencil"  onClick={() => handleEdit(todo)}></i>
            <i className="fa fa-trash" onClick={() => handleDelete(todo)}></i>
          </span>
        </li>
      ))}
      {todos.length && <DeleteBtn handleAllDelete={handleAllDelete} handleDoneDelete={handleDoneDelete}/>}
    </div>
  );
}

export default TodoItem;
