import React, { Fragment, useEffect, useState } from 'react';
import EditTodo from './EditTodo';
import '../App.css';

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  // delete todo
  const deleteTodo = async (id) => {
    try {
      // const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
      const deleteTodo = await fetch(`/todos/${id}`, {
        method: 'DELETE',
      });
      console.log(deleteTodo);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  // get all todos
  const getTodos = async () => {
    try {
      // const response = await fetch('http://localhost:5000/todos');
      const response = await fetch('/todos');
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  // console.log(todos);
  return (
    <Fragment>
      <table className='table table-hover table-striped mt-4 text-center'>
        <thead>
          <tr className='fs-5'>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {todos.map((todo) => (
            <tr key={todo.id} className='border-dark text-light'>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} />
              </td>
              <td>
                <button
                  className='btn btn-sm danger bg-gradient text-light'
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
