import { useState } from 'react';

const InputToDo = () => {
  return (
    <>
      <h1 className='text-center mt-5'>Pern To-Do List</h1>

      <form className='d-flex mt-5'>
        <input
          type='text'
          className='form-control'
        />
        <button className='btn btn-success'>Add</button>
      </form>
    </>
  );
};

export default InputToDo;