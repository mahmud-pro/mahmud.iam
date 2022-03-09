import React, {useState} from 'react'
import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import "../NewToDoList.css";
import NewLi from './NewLi.js'

export default function NewToDoList() {

    const [item, setItem] = useState('');
    const [newItem, setNewItem] = useState(['prevValue']);


    const itemEventOnChange = (event) =>{
        setItem(event.target.value); 
    }

    const listOfItems = () =>{
        setNewItem((prevValue)=>{
            return [...prevValue, item];
        });
        setItem("");
    }

  return (
    <>
        <div className="main_div">
            <div className="center_div">
                <br />
                <h1>New To-Do List</h1>
                <br />

                <input type="text" value={item}  placeholder='Add Items' onChange={itemEventOnChange}/>
                <Button className='newBtn' onClick={listOfItems} > <AddRoundedIcon/> </Button>

                <br />
                <ol>
                    {newItem.map((val, index)=> {
                        return <NewLi val={val} key={index} id={index} />;
                    })}
                </ol>
                <br />
            </div>
        </div>
    </>
  )
}
