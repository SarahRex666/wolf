import "./App.css";
import React, { useState } from "react";
import Form from "./Form.js";
import Thing from "./Thing.js";
import Drop from "./Drop.js";
import NewDog from "./NewDog";
import CommentList from "./CommentList.js";
import Landing from "./Landing.js";
import One from "./One";
import Two from "./Two";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/about">
            <NewDog />
          </Route>
          <Route path="/users">
            <Form />
            <CommentList />
          </Route>
          <Route path="/cool">
            <Thing />
          </Route>
          <Route path="/one">
            <One />
          </Route>
          <Route path="/two">
            <Two />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
