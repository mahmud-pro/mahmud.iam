import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import web from "./img/service.jpg";

export default function About() {
  return (
    <>
      <Common name='Welcome to About Page' imgsrc={web} visit='/contact' btname='Contact Now' animated="img-fluid"/>
    </>
  );
}
 