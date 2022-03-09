import React from 'react'

export default function SlotMachine(props) {
  // let x = '😄';
  // let y = '😄';
  // let z = '🐌';

  // let x = props.x;
  // let y = props.y;
  // let z = props.z;

  let {x, y, z} = props;
  if ((x===y) && (x===z)){
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h1>This is matching</h1>
          <hr/>
        </div>
      </>
    )
    
  }else{
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h1>This is not matching</h1>
          <hr/>
        </div>
      </>
    )
  }
}
