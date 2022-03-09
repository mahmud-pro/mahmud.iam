import React, { useState } from "react";
import "../CommonStyle.css";
import Sresult from "./Sresult";
export default function Search() {
    const [img, setImg] = useState("");
    const inputEvent = (event) => {
       const data = event.target.value;
       setImg(data);
       console.log(data);
    }
  return (
    <>
      <div className="searchBar">
        <h1>This is Search Page</h1>
        <input type="text" placeholder="Search Anything"  onChange={inputEvent} value={img}/>
      <Sresult/>
      </div>
    </>
  );
}
