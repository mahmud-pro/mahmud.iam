import React, {useState, useEffect} from 'react'

export default function UseEffectHook() {
    const [num, setNum] = useState(0);
    // const [num1, setNum1] = useState(1);

    useEffect(() => {
        // alert(`Multiplied by ${num1}`);
        document.title=`${num}`
    },[num])

    
    
    
    
  return (
    <>
        <button onClick={()=>{setNum(num+1);}}> {num}</button>
        {/* <button onClick={()=>{setNum1(num1*num);}}> {num1}</button> */}
    </>
  )
}
