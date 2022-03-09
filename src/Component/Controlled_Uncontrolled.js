import React, {useState} from 'react'



export default function Controlled_Uncontrolled() {
    
    const [fullName, setFullName] = useState({
        fNameInput : "",
        mNameInput : "",
        lNameInput : ""
    });

    const inputEvent= (event)=>{
        console.log(event.target.value);
        console.log(event.target.name);

        // const value = event.target.value;
        // const name = event.target.name;

        const {name,value} = event.target; //Destructuring

        setFullName((preValue)=>{ 
            return{
                ...preValue,
                [name]: value
            }
            // console.log(preValue);
            // if (name === 'fNameInput') {
            //     return{
            //         fName : value,
            //         mName : preValue.mName,
            //         lName : preValue.lName
            //     }
            // }else if (name === 'mNameInput') {
            //     return{
            //         fName : preValue.fName,
            //         mName : value,
            //         lName : preValue.lName
            //     }
            // }else{
            //     return{
            //         fName : preValue.fName,
            //         mName : preValue.mName,
            //         lName : value
            //     }
            // }
        })
    };
    const onSubmits = (event)=>{
        event.preventDefault();
        alert('Form Submitted');
    };

  return (
        <>
            <form onSubmit={onSubmits}>
            <div className='container'>
                <h1>Hellow {fullName.fName} {fullName.mName} {fullName.lName}</h1>
                <input type="text" value={fullName.fNameVal} name='fNameInput' onChange={inputEvent} placeholder='Enter Your Name' />
                <input type="text" value={fullName.mNameVal} name='mNameInput' onChange={inputEvent} placeholder='Enter Your Middle Name'/>
                <input type="text" value={fullName.lNameVal} name='lNameInput' onChange={inputEvent} placeholder='Enter Your Last Name'/>
                <button type='submit' onClick={onSubmits}>Submit Me 😃</button>
            </div>
            </form>
        </>
    )
}
