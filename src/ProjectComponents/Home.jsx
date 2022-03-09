import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import web from "./img/img1.jpg";

export default function Home() {
  return (
    <>
      <Common  name='Grow your business with' imgsrc={web} visit='/service' btname='Get Started' animated="img-fluid animated"/>
    </>
  );
}
 