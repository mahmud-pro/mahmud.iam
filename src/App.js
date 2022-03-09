import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import Home from "./ProjectComponents/Home";
import About from "./ProjectComponents/About";
import Service from "./ProjectComponents/Service";
import Contact from "./ProjectComponents/Contact";
import Navbar from "./ProjectComponents/Navbar";
import Footer from "./ProjectComponents/Footer";

// import "./CommonStyle.css"
// import { Switch } from '@mui/material';
// import About from "./Component/About";
// import Contact from "./Component/Contact";
// import Search from "./Component/Search";
// import Service from "./Component/Service";
// import User from "./Component/User";
// import Error from "./Component/Error";
// import MenuBar from "./Component/MenuBar";
// import { Redirect } from "react-router-dom";
// import RouterDemo from './Component/RouterDemo';
// import UseEffectHook from './Component/UseEffectHook';
// import CompA from './Component/CompA';
// import CompB from './Component/CompB';
// import NewToDoList from './Component/NewToDoList';
// import "./index.css";
// import "./todolist.css";
// import SlotMachine from "./Component/SlotMachine";
// import EventHandling from "./Component/EventHandling";
// import Controlled_Uncontrolled from "./Component/Controlled_Uncontrolled";
// import SpreadOperator from './Component/SpreadOperator';
// import ToDoList from './Component/ToDoList';
// import BootstrapDemo from './Component/BootstrapDemo';

export default function App() {

 

  return (
    <>
      <>
      <>
        {/* <div>
        <h1 className="heading_style">
          {" "}
          🎰 Welcome to <span style={{ fontWeight: "bold" }}>Game-O-Slot</span>
          🎰{" "}
        </h1>
        <div className="slotMachine">
          <SlotMachine x="😸" y="💃" z="😄" />
          <SlotMachine x="😄" y="😄" z="😄" />
          <SlotMachine x="🤕" y="😄" z="😄" />
        </div>
      </div> */}
      </>
      <>
        {/* <EventHandling/> */}
        {/* <Controlled_Uncontrolled/> */}
        {/* <SpreadOperator/> */}
        {/* <ToDoList/> */}
        {/* <NewToDoList/> */}
        {/* <BootstrapDemo/> */}
        {/* <CompA/> */}
        {/* <UseEffectHook/> */}
        {/* <RouterDemo/> */}
      </>
      <>
        {/* <MenuBar/>
        <Switch>
          <Route exact path="/" component={()=><About name="About"/>}  />

          <Route exact path="/service" render={()=><Service name="Service"/>}  />

          <Route exact path="/search" render={()=><Search name="Search"/>}  />

          <Route exact path="/contact/:name" component={Contact}  />

          <Route path="/contact" component={()=><Name name="Name"/>}  />

          <Route path="/user/:extension/:ext2" component={User}  /> *******************User Page */}

          {/* <Route path="/user" component={()=><Service name="User"/>}  /> */}

          {/* <Route component={Error}  /> */}
          {/* <Redirect to="/" />
        </Switch> */}
      </>
      </>

      <>
        <Navbar/>
        <Switch>
          <Route exact path={"/"} component={Home}/>
          <Route exact path={"/about"} component={About}/>
          <Route exact path={"/service"} component={Service}/>
          <Route exact path={"/contact"} component={Contact}/>
          <Redirect to={"/"}/>
        </Switch>
        <Footer/>  
      </>

    </>
  );
}
