import React, {useEffect} from 'react'

export default function Service(props) {
    useEffect(() => {
      document.addEventListener('click', handleClick);
    
      return function cleanup () {
        document.removeEventListener("click", handleClick);
      };
    });
    
    function handleClick(){
        console.log("Hi I am called again Service useEffect");
    }
    
  return (
    <>
        <h1>This is {props.name} page</h1>
    </>
  )
}
