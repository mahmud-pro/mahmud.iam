import React, {useState} from "react";
// import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
export default function Li(props) {

    const List = (props) =>{
      const [line, setLine] = useState(false);
    }

  return (
    <div className="todo_style">
      <i
        className="fa fa-times"
        aria-hidden="true"
        onClick={() => {
          props.onSelect(props.id)
        }}
      ><DeleteOutlineOutlinedIcon/></i>
      
      <li>
        {/* <{props.id}> */} {props.text}
      </li>
    </div>
  );
}
