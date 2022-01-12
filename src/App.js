import React, {useState, useRef} from 'react'
import './App.css';

function App() {
  const [toDoList, setToDo] = useState([]);
  const [name, setName] = useState('');
  const inputName = useRef(null);

  const handleName = (event) => {
    setName(event.target.value);
  }

  const handleAdd = () => {
    const newList = toDoList.concat({name});
    setToDo(newList);
  }

  const clearList = () => {
    setToDo([]);
    inputName.current.value = '';
  }

  return (
    <div className='mainContainer'>
      <div className="todoContainer">
        <h1 style={{textAlign: 'center'}}>My Lists</h1>
        <button id='clearList' onClick={clearList}>
          Clear List
        </button>
        <ul id="listBox">
        {
          toDoList.map((item,index) => (
            <li key={index}>{item.name}</li>
          ))
        }
        </ul>
        
        <input style={{marginBottom: '10px', width: '45%', height: '30px', borderRadius: '10px'}} type='text' onChange={handleName} ref={inputName}/>
        <button onClick={handleAdd}>Add Item</button>
      </div>
    </div>
  );
}

export default App;
