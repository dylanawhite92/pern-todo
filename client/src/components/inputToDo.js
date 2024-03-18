import { useState } from 'react';

const InputToDo = () => {
  const [description, setDescription] = useState('');

  const onSubmitForm = async (e) => {
    // Just reloading page on submit for now so table updates.
    // Can come back later and do conditional rendering.
    // e.preventDefault();

    try {
      const body = { description };
      const response = await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <h1 className='text-center mt-5'>Pern To-Do List</h1>

      <form
        className='d-flex mt-5'
        onSubmit={onSubmitForm}>
        <input
          type='text'
          className='form-control'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className='btn btn-success'>Add</button>
      </form>
    </>
  );
};

export default InputToDo;
