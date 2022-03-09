import React, { createContext } from 'react'
import CompC from './CompC'
// import CompB from './CompB'

const FirstName = createContext();
const LastName = createContext();

export default function CompA() {
  return (
      <>
        <FirstName.Provider value={'Mahmud'}>
          <LastName.Provider value={'Khan'}>
            <CompC/>
          </LastName.Provider>
        </FirstName.Provider>
        <h1>A</h1>
      </>
  )
}
export {FirstName, LastName};
