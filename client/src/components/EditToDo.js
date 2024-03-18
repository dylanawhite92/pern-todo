import { useState } from 'react';

// Pass to do prop from to do item
const EditToDo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);

  return (
    <>
      <button
        type='button'
        class='btn btn-warning'
        data-bs-toggle='modal'
        data-bs-target={`#id${todo.todo_id}`}>
        Edit
      </button>
      <div
        class='modal fade'
        id={`id${todo.todo_id}`}
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'>
        <div class='modal-dialog'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h1
                class='modal-title fs-5'
                id='exampleModalLabel'>
                Edit To-Do Item
              </h1>
              <button
                type='button'
                class='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'></button>
            </div>
            <div class='modal-body'>
              <input
                type='text'
                className='form-control'
                value={description}
              />
            </div>
            <div class='modal-footer'>
              <button
                type='button'
                class='btn btn-warning'>
                Save Changes
              </button>
              <button
                type='button'
                class='btn btn-secondary'
                data-bs-dismiss='modal'>
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
