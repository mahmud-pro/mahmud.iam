import React, {useContext} from 'react';
// import context from "react-bootstrap/esm/AccordionContext";
import { FirstName, LastName } from "./CompA";

export default function CompC() {

    const fname = useContext(FirstName);
    const lname = useContext(LastName);
  return (
    <>
      {/* <FirstName.Consumer>
        {(name) => {
          return (
            <LastName.Consumer>
              {(lname) => {
                return (
                  <h1>
                    Hi! This is {name} {lname} from CompC
                  </h1>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer> */}

      <h1>The name is {fname} {lname}</h1>
      <h1>C</h1>
    </>
  );
}
