import React from "react";
import { NavLink } from "react-router-dom";

export default function Common(props) {
  return (
    <>
      <section id="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row d-flex  align-items-center">
              <div className="col-md-6 pt-5 pt-lg-0 order-lg-1">
                <h1> {props.name} <strong className="brand-name">Mahmud.iam</strong></h1>
                <h2 className="my-3">
                  We  are the team of talented developer making websites
                </h2>
                <div className="mt-3">
                  <NavLink to={props.visit} className="btn btn-outline-primary btn-get-started">{props.btname}</NavLink>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={props.imgsrc} alt="Image"  className=  {props.animated} />
              </div>
              </div>  
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
 