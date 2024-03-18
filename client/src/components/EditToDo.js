const EditToDo = () => {
  return (
    <>
      <button
        type='button'
        class='btn btn-warning'
        data-bs-toggle='modal'
        data-bs-target='#exampleModal'>
        Edit
      </button>
      <div
        class='modal fade'
        id='exampleModal'
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
