import React, { useState } from "react";

export default function Contact() {
  const [data, setData] = useState({
    fullname:'',
    phone:'',
    email:'',
    msg:''
  })
  const inputEvent = (event) =>{
    const {name, value} = event.target;
    setData((preVal)=>{
      return{
        ...preVal, 
        [name]: value, 
      };
    });
  };

  const formSubmit = (e) =>{
    e.preventDefault();
    alert(`Name: ${data.fullname} Number: ${data.phone} Email: ${data.email}` );
  }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="row-md-6 col-5 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder="Enter your cell no."
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="name@example.com"
                  autoComplete="off"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                />
              </div>

              <div className="col-auto">
                <button type="submit" className="btn btn-outline-primary mb-2 ">
                  Submit
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
}
