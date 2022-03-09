import React, {useState} from 'react'

export default function EventHandling() {

    const color = "gray";
    const Text = "Click";
    const [bgColor, setbgColor] = useState(color);
    const [btnText, setbtnText] = useState(Text);

    const bgChange = () => {
        setbgColor('wheat')
        setbtnText('Clicked')
    };
    


  return (
    <>
        <div className="container" style={{backgroundColor: bgColor}}>
            <button className="button" onClick={bgChange} > {btnText} </button>
        </div>
    </>
  )
}
