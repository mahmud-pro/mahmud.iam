import React from 'react'

export default function SpreadOperator() {
    const fullname = ['Mahmud', 'Hussain', 'Khan'];
    const id = [1,2,3,4];
    const myArr = [...fullname, ...id];
    console.log(myArr);
  return (
    <>
    </>
  )
}
