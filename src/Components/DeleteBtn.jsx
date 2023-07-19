import './DeleteBtn.css'

function DeleteBtn({handleAllDelete, handleDoneDelete}) {
  return (
    <div className="delete__btns">
      <button className='ui red button' onClick={handleDoneDelete}>Delete done tasks</button>
      <button className='ui red button' onClick={handleAllDelete}>Delete all tasks</button>
    </div>
  )
}

export default DeleteBtn