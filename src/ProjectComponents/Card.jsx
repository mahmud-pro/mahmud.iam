import React from "react";
import { NavLink } from "react-router-dom";

export default function Card(props) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto d-flex">
        <div className="card">
          <img className="card-img-top" src={props.imgsrc} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title ">{props.title}</h5>
            <p className="card-text">
              {props.cardText}
            </p>
            <NavLink to={'/'} className="btn btn-primary">
              {props.btnText}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
