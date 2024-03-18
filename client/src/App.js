import './App.css';

// Components

import { InputToDo, ListToDos } from './components/index';

function App() {
  return (
    <>
      <div className='container'>
        <InputToDo />
        <ListToDos />
      </div>
    </>
  );
}

export default App;
