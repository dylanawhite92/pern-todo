import { useEffect, useState } from 'react';
import EditToDo from './EditToDo';

const ListToDos = () => {
  // Initialize and manage state
  const [toDos, setToDos] = useState([]);

  // Make fetch request every time component is rendered
  const getToDos = async () => {
    try {
      const response = await fetch('http://localhost:5000/todos');
      const jsonData = await response.json();

      setToDos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getToDos();
  }, []);

  // Delete button send req to db and remove from table
  const deleteToDo = async (id) => {
    try {
      const deleteRequest = await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE',
      });

      setToDos(toDos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <table className='table mt-5 text-center'>
        <thead>
          <tr>
            <th scope='col'>Description</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {toDos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditToDo todo={todo} />
              </td>
              <td>
                <button
                  className='btn btn-danger'
                  onClick={() => deleteToDo(todo.todo_id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListToDos;
