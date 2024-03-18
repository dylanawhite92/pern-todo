import { useState } from 'react';

// Pass to do prop from to do item
const EditToDo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);

  // Update Item Description
  const updateDescription = async (e) => {
    e.preventDefault();

    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:5000/todos/${todo.todo_id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        }
      );

      // Reload page to show update
      window.location = '/';
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <button
        type='button'
        className='btn btn-warning'
        data-bs-toggle='modal'
        data-bs-target={`#id${todo.todo_id}`}>
        Edit
      </button>
      <div
        className='modal fade'
        id={`id${todo.todo_id}`}
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
        onClick={() => setDescription(todo.description)}>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1
                className='modal-title fs-5'
                id='exampleModalLabel'>
                Edit To-Do Item
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
                onClick={() => setDescription(todo.description)}
              />
            </div>
            <div className='modal-body'>
              <input
                type='text'
                className='form-control'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-warning'
                onClick={(e) => updateDescription(e)}>
                Save Changes
              </button>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
                onClick={() => setDescription(todo.description)}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>{' '}
    </>
  );
};

export default EditToDo;
