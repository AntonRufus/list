import React, { Fragment } from "react";

// components
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <Fragment>
      <div className="container vh-100">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
