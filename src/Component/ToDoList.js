import React, { useState } from 'react'
import Li from './Li';

export default function ToDoList() {
  const [inputList, setinputList] = useState('');
  const [Items, setItems] = useState([]);
  const itemEvent = (event) => {
    setinputList(event.target.value);
  };
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setinputList('');
  };

  const deleteItems = (id)=>{
    console.log('Deleted');

    setItems((oldItems)=>{
      return oldItems.filter((arrElement, index)=>{
        return index !== id;
      })
    })
  }

  return (
    <>
      <div className="mainDiv">
        <div className="centerDiv">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" 
          value={inputList} 
          placeholder='Add Items' 
          onChange={itemEvent} />
          <button onClick={listOfItems}> + </button>

          <ol>
            {Items.map((itemVal, index) => {
              return <Li text={itemVal} 
                         key={index}
                         id={index} 
                         onSelect={deleteItems} />
            })}
          </ol>
        </div>
      </div>
    </>
  )
}
